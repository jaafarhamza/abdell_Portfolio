import Image from "next/image";

export function ProfileSection() {
  return (
    <section id="profile" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background _white.png"
        alt=""
        fill
        loading="eager"
        className="object-cover"
        sizes="100vw"
        quality={75}
      />

      {/* Black gradient shadow - top */}
      <div className="absolute top-0 left-0 right-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-linear-to-b from-black/50 via-black/10 to-transparent z-5" />

      {/* Black gradient shadow - right */}
      <div className="absolute top-0 right-0 bottom-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] bg-linear-to-l from-black/50 via-black/10 to-transparent z-5" />

      {/* Black gradient shadow - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-linear-to-t from-black/50 via-black/10 to-transparent z-5" />

      {/* Black gradient shadow - left */}
      <div className="absolute top-0 left-0 bottom-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] bg-linear-to-r from-black/50 via-black/10 to-transparent z-5" />

      {/* ============================================ */}
      {/* PERSON IMAGE - RESPONSIVE */}
      {/* Mobile: centered, smaller | Tablet: right side | Desktop: right side larger */}
      {/* ============================================ */}
      <div
        className="absolute z-10
          bottom-0 right-1/2 translate-x-1/2 h-[70vh]
          sm:right-1/4 sm:translate-x-1/2 sm:h-[65vh]
          md:right-[-22%] md:translate-x-0 md:h-[65vh]
          lg:right-[-20%] lg:h-[75vh]
          xl:right-[-20%] xl:h-[90vh]
          2xl:right-[1%]"
      >
        <Image
          src="/profile/person.png"
          alt="Profile photo"
          width={1200}
          height={1200}
          className="h-full w-auto"
          style={{ maxWidth: "none" }}
        />
      </div>

      {/* ============================================ */}
      {/* PERSON INFO IMAGE - RESPONSIVE */}
      {/* Mobile: bottom center | Tablet: left side | Desktop: left side larger */}
      {/* ============================================ */}
      <div
        className="absolute z-20
          bottom-[50%] left-[60%] -translate-x-1/2 h-[55vh]
          sm:bottom-[30%] sm:left-[45%] sm:-translate-x-1/2 sm:h-[70vh]
          md:bottom-[30%] md:left-[0%] md:translate-x-0 md:h-[70vh]
          lg:bottom-[25%] lg:left-[0%] lg:h-[80vh]
          xl:bottom-[-5%] xl:left-[0%] xl:h-screen
          "
      >
        <Image
          src="/profile/person_information.png"
          alt="Profile information"
          width={1200}
          height={1200}
          className="h-full w-auto"
          style={{ maxWidth: "none" }}
        />
      </div>
    </section>
  );
}
