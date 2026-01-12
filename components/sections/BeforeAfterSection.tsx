"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

// Before/After comparison data - add your images here
const comparisons = [
  {
    id: 1,
    before: "/before_after/ex_1/1.jpg",
    after: "/before_after/ex_1/2.jpg",
    title: "Thumbnail Design 1",
  },
  {
    id: 2,
    before: "/before_after/ex_2/1.jpg",
    after: "/before_after/ex_2/2.jpg",
    title: "Thumbnail Design 2",
  },
  {
    id: 3,
    before: "/before_after/ex_3/1.jpg",
    after: "/before_after/ex_3/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_4/1.jpg",
    after: "/before_after/ex_4/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_5/1.jpg",
    after: "/before_after/ex_5/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_6/1.jpg",
    after: "/before_after/ex_6/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_7/1.jpg",
    after: "/before_after/ex_7/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_8/1.jpg",
    after: "/before_after/ex_8/2.jpg",
    title: "Thumbnail Design 3",
  },
  {
    id: 3,
    before: "/before_after/ex_9/1.jpg",
    after: "/before_after/ex_9/2.jpg",
    title: "Thumbnail Design 3",
  },
];

// Image Comparison Slider Component
function ImageComparisonSlider({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-ew-resize select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          draggable={false}
        />
        {/* AFTER label */}
        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
          AFTER
        </span>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative w-full h-full"
          style={{ width: `${100 / (sliderPosition / 100)}%` }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            draggable={false}
          />
        </div>
        {/* BEFORE label */}
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
          BEFORE
        </span>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-white">
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 rotate-180"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1));
  };

  const currentComparison = comparisons[currentIndex];

  return (
    <section
      id="before-after"
      className="min-h-screen flex items-center justify-center md:px-12 md:py-20 bg-black"
    >
      <div className="w-full max-w-full">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            aria-label="Previous comparison"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 group-hover:border-white/60 flex items-center justify-center transition-colors">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <span className="hidden sm:inline text-sm font-medium">
              Previous
            </span>
          </button>

          {/* Title */}
          <div className="relative text-center flex flex-col items-center">
            <div className="relative inline-block mb-2">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white">
                before
              </span>
              <span className="absolute -right-6 sm:-right-8 -bottom-2 sm:-bottom-4 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500">
                after
              </span>
            </div>
            <p className="text-white/60 text-sm mt-4">
              {currentIndex + 1} / {comparisons.length}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            aria-label="Next comparison"
          >
            <span className="hidden sm:inline text-sm font-medium">Next</span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 group-hover:border-white/60 flex items-center justify-center transition-colors">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Image Comparison Slider */}
        <div className="relative">
          <ImageComparisonSlider
            key={currentComparison.id}
            beforeImage={currentComparison.before}
            afterImage={currentComparison.after}
          />
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {comparisons.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-6 sm:w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to comparison ${index + 1}`}
            />
          ))}
        </div>

        {/* Instructions */}
        <p className="text-center text-white/40 text-xs sm:text-sm mt-4">
          Drag the slider to compare before and after
        </p>
      </div>
    </section>
  );
}
