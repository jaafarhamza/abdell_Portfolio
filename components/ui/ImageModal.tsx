"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ImageModalProps = {
  images: { src: string; alt: string }[];
  categoryColor: string;
};

export function ImageModal({ images, categoryColor }: ImageModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState<string>("");
  const mountedRef = useRef(false);

  // Check if component is mounted (client-side only)
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

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
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {images.map((image, i) => (
          <div
            key={i}
            className="relative aspect-video overflow-hidden group cursor-pointer rounded-xl"
            style={{ borderBottom: `4px solid ${categoryColor}` }}
            onClick={() => openModal(image.src, image.alt)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
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

      {/* Modal - Rendered via Portal to document.body */}
      {typeof window !== "undefined" &&
        selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center p-4 animate-in fade-in duration-200"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop with blur - blocks scrolling */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

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
