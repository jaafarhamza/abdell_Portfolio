"use server";

import "server-only";
import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type FormState = {
  error?: string;
  success?: boolean;
  message?: string;
} | null;

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!name || name.trim().length < 2) {
    return { error: "Name must be at least 2 characters" };
  }

  if (!email || !email.includes("@")) {
    return { error: "Please provide a valid email address" };
  }

  if (!message || message.trim().length < 10) {
    return { error: "Message must be at least 10 characters" };
  }

  try {
    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Abdell Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New Contact from ${name}`,
      react: ContactEmailTemplate({ name, email, message }),
    });

    if (error) {
      return { error: "Failed to send message. Please try again." };
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch {
    return { error: "Failed to send message. Please try again." };
  }
}
