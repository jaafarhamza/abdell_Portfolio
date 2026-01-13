# Contact Form Email Setup - Complete Guide

## ✅ Installation Complete

The contact form is now fully configured with Resend!

## 🚀 Quick Setup

### 1. Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to **API Keys** in the dashboard
4. Click **Create API Key**
5. Copy your API key

### 2. Create `.env.local` File

Create a file named `.env.local` in your project root:

```env
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Your email address where contact form submissions will be sent
CONTACT_EMAIL=your-email@example.com
```

**Important:** Replace the values with your actual API key and email!

### 3. Restart Your Development Server

```bash
npm run dev
```

## 📧 Email Template Features

The email template includes:
- ✨ Beautiful gradient header
- 📝 Sender information (name & email)
- 💬 Message content with proper formatting
- 🔵 Quick reply button
- 📅 Timestamp
- 📱 Responsive design
- 🎨 Professional styling

## 🔧 Customization

### Change Email Sender

Edit `app/actions/contact.ts`:

```typescript
from: "Your Name <onboarding@resend.dev>", // Change this
```

**Note:** For production, verify your own domain in Resend to use a custom email address.

### Change Email Template Colors

Edit `components/emails/ContactEmailTemplate.tsx`:

```typescript
// Header gradient
background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

// Accent color
color: "#667eea",
```

### Add More Fields

1. Add input to `components/ui/ContactForm.tsx`
2. Update validation in `app/actions/contact.ts`
3. Add field to email template in `components/emails/ContactEmailTemplate.tsx`

## 🧪 Testing

### Test in Development

1. Fill out the contact form
2. Check your terminal for logs
3. Check your email inbox

### Test Email Template

You can preview the email template by creating a test page:

```tsx
// app/test-email/page.tsx
import { ContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

export default function TestEmail() {
  return (
    <ContactEmailTemplate
      name="John Doe"
      email="john@example.com"
      message="This is a test message"
    />
  );
}
```

Visit `/test-email` to preview the email design.

## 🔒 Security Notes

- ✅ API key is server-side only (never exposed to client)
- ✅ Input validation on server
- ✅ Rate limiting recommended for production
- ✅ Email sanitization included

## 📊 Resend Free Tier

- 100 emails/day
- 3,000 emails/month
- Perfect for portfolio sites!

## 🆘 Troubleshooting

### "Failed to send message"

1. Check your API key is correct in `.env.local`
2. Restart your dev server after adding `.env.local`
3. Check Resend dashboard for error logs

### Email not received

1. Check spam folder
2. Verify `CONTACT_EMAIL` in `.env.local`
3. Check Resend dashboard logs

### "RESEND_API_KEY is not defined"

1. Make sure `.env.local` exists in project root
2. Restart your development server
3. Check for typos in variable name

## 🎉 You're All Set!

Your contact form is now ready to receive messages with beautiful email notifications!
