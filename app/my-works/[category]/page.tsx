import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/categories";

type PageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const data = categories.find((c) => c.slug === category);

  if (!data) notFound();

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/#my-works"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 transition-colors"
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

        <h1 className="font-dancing text-4xl md:text-5xl mb-4">{data.label}</h1>
        <p className="text-foreground/70 mb-12">
          Explore my {data.label.toLowerCase()} projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for project cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video bg-foreground/5 rounded-lg border border-foreground/10 flex items-center justify-center"
            >
              <span className="text-foreground/30">Project {i}</span>
            </div>
          ))}
        </div>
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
    title: data ? `${data.label} | abdell design` : "My Works",
  };
}
