import { categories } from "@/lib/categories";
import { WorksFilter } from "./WorksFilter";

export function MyWorksSection() {
  return (
    <section id="my-works" className="min-h-screen px-8 ">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <div className="relative inline-block">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
            my
          </span>
          <span className="absolute -right-10 sm:-right-14 -bottom-2 sm:-bottom-2 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">
            works
          </span>
        </div>
      </div>
      <WorksFilter categories={categories} />
    </section>
  );
}
