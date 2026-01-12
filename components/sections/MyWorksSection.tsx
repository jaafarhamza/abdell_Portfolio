import { categories } from "@/lib/categories";
import { WorksFilter } from "./WorksFilter";

export function MyWorksSection() {
  return (
    <section id="my-works" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-dancing text-4xl md:text-5xl mb-4 text-center">
          My Works
        </h2>
        <p className="text-foreground/70 text-center mb-12">
          Explore my creative portfolio
        </p>

        <WorksFilter categories={categories} />
      </div>
    </section>
  );
}
