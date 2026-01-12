"use client";

import { useState } from "react";
import type { Category } from "@/lib/categories";

type Props = {
  categories: readonly Category[];
};

export function WorksFilter({ categories }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.slug === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full border transition-all ${
              activeFilter === "all"
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/20 hover:border-foreground/40"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveFilter(cat.slug)}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeFilter === cat.slug
                  ? "bg-foreground text-background border-foreground"
                  : "border-foreground/20 hover:border-foreground/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* All categories with their works */}
      <div className="space-y-20">
        {filteredCategories.map((cat) => (
          <div key={cat.slug} id={`works-${cat.slug}`}>
            <h3 className="font-dancing text-3xl md:text-4xl mb-2">
              {cat.label}
            </h3>
            <p className="text-foreground/50 mb-8">
              Explore my {cat.label.toLowerCase()} projects
            </p>

            {/* Project grid for this category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-foreground/5 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all overflow-hidden group"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-foreground/30 group-hover:text-foreground/50 transition-colors">
                      {cat.label} Project {i}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
