import Image from "next/image";
import { contactInfo } from "@/lib/contact-info";

export function Footer() {
  return (
    <footer id="footer" className="relative py-16 sm:py-20 md:py-20 px-4 ">
      {/* Background Image */}
      <Image
        src="/footer/background.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={75}
      />

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto flex flex-col items-center">
        {/* Let's work together with arrow */}
        <div className="relative inline-block mb-20">
          <p className="font-dancing font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-red-500">
            Let&apos;s work together
          </p>
          <Image
            src="/footer/arrow.png"
            alt=""
            width={100}
            height={100}
            className="absolute -bottom-8 right-0 sm:-bottom-5 md:-bottom-8 w-[60px] h-[30px] sm:w-[60px] sm:h-[20px] md:w-[120px] md:h-[20px]"
          />
        </div>

        {/* Dashed Border Box */}
        <div className="relative border-2 border-dashed border-white/50 rounded-sm px-8 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-12 lg:py-14">
          {/* Corner Squares */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-500" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500" />

          {/* Photoshop SVG icons on borders with glow */}
          <div className="absolute -top-10 right-[15%]">
            <Image
              src="/footer/photoshop.svg"
              alt=""
              width={60}
              height={60}
              className="relative w-8 h-8 sm:w-20 sm:h-20 -rotate-10 blur-[0.2rem]"
            />
          </div>
          <div className="absolute -bottom-10 left-[15%]">
            <Image
              src="/footer/photoshop.svg"
              alt=""
              width={40}
              height={40}
              className="relative w-8 h-8 sm:w-20 sm:h-20 rotate-12 blur-[0.2rem]"
            />
          </div>

          {/* Arrows Move Tool - bottom right */}
          <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 md:-bottom-12 md:-right-12 lg:-bottom-18 lg:-right-18">
            <Image
              src="/HeroSection/arrows-move-tool.png"
              alt="Move tool"
              width={80}
              height={80}
              className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] md:w-[36px] md:h-[36px] lg:w-[50px] lg:h-[50px]"
            />
          </div>

          {/* Thanks for Scrolling Text */}
          <div className="text-center relative">
            {/* Black light glow effect above text */}
            <div className="absolute -top-20 left-1/4 -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-black/50 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] z-10" />
            <div className="absolute -top-40 right-[-10%] -translate-x-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-black/50 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] z-10" />

            <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-white tracking-wide">
              Thanks for Scrolling!
            </h2>
          </div>
        </div>

        {/* Interested in working together text */}
        <div className="text-center mt-16 mb-10 max-w-full">
          <p className="text-foreground/80 text-sm sm:text-base md:text-2xl xl:text-4xl">
            Interested in{" "}
            <span
              className="text-white font-semibold"
              style={{
                borderBottom: "2px solid #facc15",
                paddingBottom: "2px",
              }}
            >
              working together?
            </span>
          </p>
          <p className="text-foreground/60 text-xs sm:text-sm md:text-2xl xl:text-4xl">
            Feel free to send me a message here to get started.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-8 mb-8">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:scale-105 transition-transform"
          >
            <div className="p-2 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors">
              <Image
                src="/contact/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="text-left">
              <p className="text-foreground/60 text-xs">
                {contactInfo.whatsapp.label}
              </p>
              <p className="text-foreground text-sm sm:text-base font-medium group-hover:text-green-400 transition-colors">
                {contactInfo.whatsapp.displayPhone}
              </p>
            </div>
          </a>

          {/* Drive */}
          <a
            href={contactInfo.drive.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:scale-105 transition-transform"
          >
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Image
                src="/contact/drive.svg"
                alt="Drive"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="text-left">
              <p className="text-foreground/60 text-xs">
                {contactInfo.drive.label}
              </p>
              <p className="text-foreground text-sm sm:text-base font-medium truncate max-w-[200px] group-hover:text-blue-400 transition-colors">
                {contactInfo.drive.displayUrl}
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contactInfo.email.address}`}
            className="flex items-center gap-3 group hover:scale-105 transition-transform"
          >
            <div className="p-2 bg-red-600 rounded-lg group-hover:bg-red-700 transition-colors">
              <Image
                src="/contact/gmail.svg"
                alt="Email"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </div>
            <div className="text-left">
              <p className="text-foreground/60 text-xs">
                {contactInfo.email.label}
              </p>
              <p className="text-foreground text-sm sm:text-base font-medium truncate max-w-[200px] group-hover:text-red-400 transition-colors">
                {contactInfo.email.displayAddress}
              </p>
            </div>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-foreground/60 text-sm mt-14">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}
