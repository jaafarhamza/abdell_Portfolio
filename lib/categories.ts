export const categories = [
  {
    slug: "crypto",
    label: "Crypto",
    accentLabel: "Thumbnail",
    color: "#f59e0b",
  }, // amber
  {
    slug: "trading",
    label: "Trading",
    accentLabel: "Thumbnail",
    color: "#10b981",
  }, // emerald
  {
    slug: "make-money-style",
    label: "Make Money",
    accentLabel: "Thumbnail",
    color: "#22c55e",
  }, // green
  { slug: "life-style", label: "Life style", accentLabel: "Thumbnail", color: "#ec4899" }, // pink
  {
    slug: "motivation",
    label: "Motivation",
    accentLabel: "Thumbnail",
    color: "#f97316",
  }, // orange
  {
    slug: "podcast",
    label: "Podcast",
    accentLabel: "Thumbnail",
    color: "#8b5cf6",
  }, // violet
  {
    slug: "reaction",
    label: "Reaction",
    accentLabel: "Thumbnail",
    color: "#ef4444",
  }, // red
  { slug: "real-state", label: "Real state", accentLabel: "Thumbnail", color: "#06b6d4" }, // cyan
  {
    slug: "other-works-1",
    label: "Other work 1",
    accentLabel: "Thumbnail",
    color: "#6366f1",
  }, // indigo
  {
    slug: "other-works-2",
    label: "Other work 2",
    accentLabel: "Thumbnail",
    color: "#a855f7",
  }, // purple
] as const;

export type Category = (typeof categories)[number];
