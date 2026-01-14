"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, null);

  return (
    <form action={formAction} className="w-full max-w-2xl mx-auto space-y-6">
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground/80 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={pending}
          className="w-full px-4 py-3 bg-blue-900/10 border border-white/20 rounded-3xl text-white placeholder-white/40 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-colors disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      {/* Email Input */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground/80 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={pending}
          className="w-full px-4 py-3 bg-blue-900/10 border border-white/20 rounded-3xl text-white placeholder-white/40 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-colors disabled:opacity-50"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground/80 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={pending}
          rows={6}
          className="w-full px-4 py-3 bg-blue-900/10 border border-white/20 rounded-3xl text-white placeholder-white/40 focus:outline-none focus:border-blue-800/50 focus:ring-1 focus:ring-blue-800/50 transition-colors disabled:opacity-50"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Error Message */}
      {state?.error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-3xl">
          <p className="text-red-400 text-sm">{state.error}</p>
        </div>
      )}

      {/* Success Message */}
      {state?.success && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-3xl">
          <p className="text-green-400 text-sm">{state.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={pending}
        className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-3xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
