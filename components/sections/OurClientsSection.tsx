import Image from "next/image";
import { clients } from "@/lib/clients";

export function OurClientsSection() {
  return (
    <section id="our-clients" className="py-16 sm:py-20 px-4">
      {/* Title */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="relative inline-block mb-4">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
            our
          </span>
          <span className="absolute -right-10 sm:-right-16 -bottom-2 sm:-bottom-3 font-dancing text-2xl sm:text-3xl md:text-4xl text-blue-500">
            clients
          </span>
        </div>
        <p className="text-foreground/70 mt-6 text-sm sm:text-base">
          Trusted by amazing creators
        </p>
      </div>

      {/* Clients Grid */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
        {clients.map((client) => (
          <a
            key={client.id}
            href={client.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-white/20 group-hover:border-red-500 transition-all duration-300 group-hover:scale-110">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
              />

              {/* YouTube overlay on hover */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
            </div>

            {/* Client Name with Link Icon */}
            <div className="flex items-center justify-center gap-1 mt-3">
              <p className="text-center text-xs sm:text-sm font-medium text-foreground/80 group-hover:text-red-500 transition-colors duration-300">
                {client.name}
              </p>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/50 group-hover:text-red-500 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
