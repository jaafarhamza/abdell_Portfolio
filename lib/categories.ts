export const categories = [
  { slug: "crypto", label: "Crypto" },
  { slug: "trading", label: "Trading" },
  { slug: "make-money-style", label: "Make Money Style" },
  { slug: "life-style", label: "Life Style" },
  { slug: "motivation", label: "Motivation" },
  { slug: "podcast", label: "Podcast" },
  { slug: "reaction", label: "Reaction" },
  { slug: "real-state", label: "Real State" },
  { slug: "other-works-1", label: "Other Works 1" },
  { slug: "other-works-2", label: "Other Works 2" },
] as const;

export type Category = (typeof categories)[number];
