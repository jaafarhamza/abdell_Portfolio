"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold text-white mb-4">
          Failed to load category
        </h2>
        <p className="text-foreground/70 mb-6">
          We couldn&apos;t load this category. Please try again or go back to all
          works.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Try again
          </button>
          <Link
            href="/#my-works"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
          >
            Back to works
          </Link>
        </div>
      </div>
    </section>
  );
}
