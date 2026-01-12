import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";
import { ImageModal } from "@/components/ui/ImageModal";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const data = categories.find((c) => c.slug === category);

  if (!data) notFound();

  // Prepare images array for the modal component
  const images = [1, 2, 3, 4, 5, 6].map((i) => ({
    src: `/my-works/${data.slug}/${i}.jpg`,
    alt: `${data.label} Project ${i}`,
  }));

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden ">
      {/* Background Image */}
      <Image
        src="/background _white.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-[20px] bg-linear-to-b from-black via-black/10 to-transparent z-1" />
      <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-linear-to-t from-black via-black/10 to-transparent z-1" />
      <div className="absolute top-0 left-0 bottom-0 w-[20px] bg-linear-to-r from-black via-black/10 to-transparent z-1" />
      <div className="absolute top-0 right-0 bottom-0 w-[20px] bg-linear-to-l from-black via-black/10 to-transparent z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        <Link
          href="/#my-works"
          className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors"
        >
          <svg
            className="w-4 h-4"
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
          Back to My Works
        </Link>

        {/* Title with logo style and category color - centered */}
        <div className="flex justify-center mt-8 mb-14">
          <div className="relative inline-block">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-black">
              {data.label}
            </span>
            <span
              className="absolute -right-15 sm:-right-20 md:-right-30 -bottom-4 sm:-bottom-4 md:-bottom-6 font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ color: data.color }}
            >
              {data.accentLabel}
            </span>
          </div>
        </div>

        {/* Image Grid with Modal */}
        <ImageModal images={images} categoryColor={data.color} />
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const data = categories.find((c) => c.slug === category);
  return {
    title: data
      ? `${data.label} ${data.accentLabel} | abdell design`
      : "My Works",
  };
}
