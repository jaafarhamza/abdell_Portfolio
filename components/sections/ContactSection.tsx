import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-blue-950/30"
    >

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
              contact
            </span>
            <span className="absolute -right-1 sm:-right-1 -bottom-2 sm:-bottom-2 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">
              me
            </span>
          </div>
          <p className="text-foreground/70 max-w-xl mx-auto mt-4">
            Have a project in mind? Let&apos;s work together to bring your
            vision to life.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}
