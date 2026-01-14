import { categories } from "@/lib/categories";
import { WorksFilter } from "./WorksFilter";

export function MyWorksSection() {
  return (
    <section id="my-works" className="min-h-screen px-8 ">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <div className="relative inline-block">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
            My
          </span>
          <span className="absolute -right-6 sm:-right-8 md:-right-14 -bottom-2 sm:-bottom-2 md:-bottom-4 font-dancing text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold text-red-500">
            works
          </span>
        </div>
      </div>
      <WorksFilter categories={categories} />
    </section>
  );
}
