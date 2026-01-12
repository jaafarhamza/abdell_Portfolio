import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16"
    >
      {/* Background Image */}
      <Image
        src="/HeroSection/portfolio.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Color Blur Effects */}
      {/* Red blur - top right */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-red-500/25 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] xl:blur-[200px] -translate-y-1/3 translate-x-1/3" />

      {/* Red blur - bottom left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-red-500/25 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] xl:blur-[200px] translate-y-1/3 -translate-x-1/3" />

      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-black/50 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] xl:blur-[200px] -translate-y-1/3 translate-x-1/3" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-black/50 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] xl:blur-[200px] translate-y-1/3 -translate-x-1/3" />

      {/* White blur - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] bg-white/4 rounded-full blur-[120px] sm:blur-[140px] md:blur-[160px] lg:blur-[180px] xl:blur-[200px]" />

      {/* Floating Design Icons */}
      {/* Pen tool - top left area */}
      <div className="absolute top-[15%] left-[30%] sm:left-[30%] md:left-[30%] opacity-40 animate-float-1">
        <Image
          src="/HeroSection/icons/pen-tool.png"
          alt=""
          width={60}
          height={60}
          className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"
        />
      </div>

      {/* Crop - top right area */}
      <div className="absolute top-[20%] right-[10%] sm:right-[15%] opacity-35 animate-float-2 animation-delay-1000">
        <Image
          src="/HeroSection/icons/crop.png"
          alt=""
          width={60}
          height={60}
          className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[45px] lg:h-[45px] xl:w-[55px] xl:h-[55px]"
        />
      </div>

      {/* Lasso - middle left */}
      <div className="absolute top-[45%] left-[5%] sm:left-[8%] opacity-30 animate-float-3">
        <Image
          src="/HeroSection/icons/lasso.png"
          alt=""
          width={50}
          height={50}
          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
        />
      </div>

      {/* Anchor points - middle right */}
      <div className="absolute top-[50%] right-[6%] sm:right-[10%] opacity-35 animate-float-4">
        <Image
          src="/HeroSection/icons/anchor-points-adjustment.png"
          alt=""
          width={55}
          height={55}
          className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] md:w-[38px] md:h-[38px] lg:w-[46px] lg:h-[46px] xl:w-[55px] xl:h-[55px]"
        />
      </div>

      {/* Pen - bottom left area */}
      <div className="absolute bottom-[18%] left-[20%] sm:left-[18%] opacity-40 animate-float-2">
        <Image
          src="/HeroSection/icons/pen.png"
          alt=""
          width={50}
          height={50}
          className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[34px] md:h-[34px] lg:w-[42px] lg:h-[42px] xl:w-[50px] xl:h-[50px]"
        />
      </div>

      {/* Pen tool variant - bottom right area */}
      <div className="absolute bottom-[30%] right-[12%] sm:right-[18%] opacity-30 animate-float-1 animate-pulse-glow">
        <Image
          src="/HeroSection/icons/pen-tool (1).png"
          alt=""
          width={45}
          height={45}
          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] xl:w-[45px] xl:h-[45px]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black -z-10" />

      {/* Left Vertical Toolbar */}
      <div className="absolute sm:-left-14 -left-12 xl:-left-26 md:-left-12 lg:-left-14 xl:top-4 lg:top-4 h-full w-auto  md:block -rotate-3 opacity-50 ">
        <div className="relative h-full w-[160px] lg:w-[320px] xl:w-90 sm:w-60">
          <Image
            src="/HeroSection/vertical_tool.png"
            alt=""
            fill
            className="object-contain object-left"
            sizes="80px"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Dashed Border Box */}
        <div className="relative border-2 border-dashed border-white/50 rounded-sm xl:pl-22 lg:pl-16 xl:pr-42 xl:py-16 lg:pr-24 lg:py-12 md:pr-20 md:py-8 md:pl-14 sm:pr-20 sm:py-8 sm:pl-14 pr-10 py-6 pl-6">
          {/* Corner Squares */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 left-1/2 right-1/2 w-4 h-4 bg-white" />
          <div className="absolute -top-2 right-1/2 left-1/2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white" />

          {/* Arrows Move Tool - bottom right */}
          <div className="absolute -bottom-7 -right-7 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 lg:-bottom-16 lg:-right-16 xl:-bottom-20 xl:-right-20">
            <Image
              src="/HeroSection/arrows-move-tool.png"
              alt="Move tool"
              width={80}
              height={80}
              className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[45px] lg:h-[45px] xl:w-[60px] xl:h-[60px]"
            />
          </div>

          {/* Content */}
          <div className="text-center">
            {/* Thumbnails Design text */}
            <p className="text-start font-medium md:text-[1rem] sm:text-lg sm:text-[0.6rem] lg:text-lg xl:ml-4 xl:-mb-4 lg:-mb-2 md:-mb-2 lg:ml-3 md:ml-2 sm:ml-2 text-[0.6rem] ml-1">
              <span
                className="inline-block text-white"
                style={{
                  borderBottom: "2px solid #facc15",
                  lineHeight: "0.9",
                  paddingBottom: "0px",
                }}
              >
                Thumbnails
              </span>
              <span className="text-gray-400"> Design</span>
            </p>

            {/* Portfolio with white disc */}
            <div className="relative inline-block">
              <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[13rem] tracking-tight text-white ">
                <span>Portf</span>
                <span className="relative inline-flex items-center justify-center mx-1 sm:mx-2 lg:ml-[2px] md:ml-[2px] sm:ml-[2px] ">
                  {/* White disc - responsive with breakpoints */}
                  {/* SIZE: w-[Xpx] h-[Xpx] | POSITION: top-[Xpx] left-[Xpx] */}
                  <span
                    className="bg-white -z-10 rounded-full inline-block relative
                      w-[35px] h-[35px] -top-[2px] left-[2px]
                      sm:w-[44px] sm:h-[44px] sm:-top-[3px] sm:left-[5px]
                      md:w-[60px] md:h-[60px] md:-top-[5px] md:left-[6px]
                      lg:w-[80px] lg:h-[80px] lg:-top-px lg:left-[8px]
                      xl:w-[125px] xl:h-[125px] xl:-top-[7px] xl:left-[10px]"
                  />

                  {/* Hand image - responsive with breakpoints */}
                  {/* SIZE: w-[Xpx] | POSITION: left-[X%] top-[X%] */}
                  <Image
                    src="/HeroSection/hand.png"
                    alt="Hand holding light"
                    width={500}
                    height={500}
                    className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-[45%]
                      w-[54px] left-[58%] top-[82%]
                      sm:w-[68px] sm:left-[64%] sm:top-[80%]
                      md:w-[92px] md:left-[62%] md:top-[80%]
                      lg:w-[125px] lg:left-[63%] lg:top-[85%]
                      xl:w-[195px] xl:left-[60%] xl:top-[80%]"
                    style={{ maxWidth: "none", height: "auto" }}
                  />

                  {/* Glow effect - responsive */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full blur-3xl -z-20
                    w-[130px] h-[130px]
                    sm:w-[130px] sm:h-[130px]
                    md:w-[150px] md:h-[150px]
                    lg:w-[140px] lg:h-[140px]
                    xl:w-[200px] xl:h-[200px]"
                  />
                  <div
                    className="absolute -left-72 top-30 -translate-x-1/2 -translate-y-1/2 bg-black/40 rounded-full blur-3xl 
                    w-[400px] h-[400px]
                    sm:w-[330px] sm:h-[330px]
                    md:w-[350px] md:h-[350px]
                    lg:w-[400px] lg:h-[400px]
                    xl:w-[400px] xl:h-[400px]"
                  />
                </span>
                <span className="ml-0.5 lg:ml-2 md:ml-1 sm:ml-1">lio</span>
              </h1>
              {/* Abdell signature */}
              <div className="flex justify-end">
                <p className=" absolute xl:-right-32 xl:-bottom-6 lg:-right-14 lg:-bottom-2 md:-right-10 md:-bottom-2 sm:-right-10 sm:-bottom-2 text-2xl -bottom-2 -right-7 font-dancing sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-red-500">
                  Abdell .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Toolbar */}
      <div className="absolute bottom-82 sm:bottom-78 xl:bottom-45 lg:bottom-60 md:bottom-70 md:w-sm w-70 sm:w-sm lg:w-full h-auto">
        <div className="relative w-full h-[50px] xl:h-[70px]">
          <Image
            src="/HeroSection/horizontal_tool.png"
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
