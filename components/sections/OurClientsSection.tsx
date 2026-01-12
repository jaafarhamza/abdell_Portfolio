export function OurClientsSection() {
  return (
    <section
      id="our-clients"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
            our
          </span>
          <span className="absolute -right-10 sm:-right-18 -bottom-2 sm:-bottom-4 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">
            clients
          </span>
        </div>
        <p className="text-foreground/70 max-w-xl mt-8">
          Trusted by amazing brands
        </p>
      </div>
    </section>
  );
}
