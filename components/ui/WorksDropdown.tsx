"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/lib/categories";

export function WorksDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-foreground/70 transition-colors flex items-center gap-1"
      >
        My Works
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 shadow-xl z-50">
          <Link
            href="/#my-works"
            className="block px-4 py-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            All Works
          </Link>
          <div className="border-t border-white/10 my-1" />
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/my-works/${cat.slug}`}
              className="block px-4 py-2 hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
