"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Category } from "@/lib/categories";

type Props = {
  categories: readonly Category[];
};

export function WorksFilter({ categories }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const filteredCategories =
    activeFilter === "all"
      ? categories
      : categories.filter((cat) => cat.slug === activeFilter);

  const openModal = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedAlt("");
  };

  // Block body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

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
              style={{
                borderColor: activeFilter === cat.slug ? cat.color : undefined,
                backgroundColor:
                  activeFilter === cat.slug ? cat.color : undefined,
              }}
              className={`px-4 py-2 rounded-full border transition-all ${
                activeFilter === cat.slug
                  ? "text-white"
                  : "border-foreground/20 hover:border-foreground/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* All categories with their works */}
      <div className="space-y-10">
        {filteredCategories.map((cat) => (
          <div
            key={cat.slug}
            id={`works-${cat.slug}`}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background Image for each category */}
            <div className="absolute inset-0">
              <Image
                src="/background _white.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              {/* Title with logo style and category color */}
              <div className="relative inline-block md:mb-8">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide text-black">
                  {cat.label}
                </span>
                <span
                  className="absolute -right-15 sm:-right-20 md:-right-30 -bottom-3 sm:-bottom-4 md:-bottom-6 font-dancing text-2xl sm:text-3xl md:text-5xl"
                  style={{ color: cat.color }}
                >
                  {cat.accentLabel}
                </span>
              </div>

              {/* Project grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                    style={{ borderBottom: `6px solid ${cat.color}` }}
                    onClick={() =>
                      openModal(
                        `/my-works/${cat.slug}/${i}.jpg`,
                        `${cat.label} Project ${i}`
                      )
                    }
                  >
                    {/* Project Image */}
                    <Image
                      src={`/my-works/${cat.slug}/${i}.jpg`}
                      alt={`${cat.label} Project ${i}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Rendered via Portal */}
      {typeof window !== "undefined" &&
        selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 animate-in fade-in duration-200"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop with blur - blocks scrolling */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Close button - Enhanced styling */}
            <button
              className="absolute top-4 right-4 z-10000 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:rotate-90"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image container - Rounded with shadow */}
            <div
              className="relative z-10 max-w-6xl w-full"
              style={{ maxHeight: "85vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black/50">
                <Image
                  src={selectedImage}
                  alt={selectedAlt}
                  fill
                  className="object-contain rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 90vw"
                  priority
                />
              </div>
            </div>

            {/* Hint text */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm z-10">
              Click outside or press ESC to close
            </p>
          </div>,
          document.body
        )}
    </>
  );
}
