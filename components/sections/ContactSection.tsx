export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
            contact
          </span>
          <span className="absolute -right-1 sm:-right-1 -bottom-2 sm:-bottom-2 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">
            me
          </span>
        </div>
        <p className="text-foreground/70 max-w-xl mt-8">
          Let&apos;s work together
        </p>
      </div>
    </section>
  );
}
