export default function Loading() {
  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        {/* Back button skeleton */}
        <div className="h-6 w-32 bg-white/10 rounded animate-pulse mb-8" />

        {/* Title skeleton */}
        <div className="flex justify-center mb-14">
          <div className="h-12 w-64 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Image grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-video bg-white/10 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
