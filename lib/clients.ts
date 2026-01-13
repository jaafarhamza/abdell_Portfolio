export const clients = [
  {
    id: 1,
    name: "Jooviers Gems",
    image: "/clients/1.jpg",
    youtubeUrl: "https://www.youtube.com/@JooviersGems/videos",
  },
  {
    id: 2,
    name: "Jashustles",
    image: "/clients/2.jpg",
    youtubeUrl: "https://www.youtube.com/@Jashustles/videos",
  },
  {
    id: 3,
    name: "Just Teachin Stuff",
    image: "/clients/3.jpg",
    youtubeUrl: "https://www.youtube.com/@Justteachinstuff/videos",
  },
  {
    id: 4,
    name: "Dontez Akram",
    image: "/clients/4.jpg",
    youtubeUrl: "https://www.youtube.com/@_therealtez/videos",
  },
  {
    id: 5,
    name: "Abdul-Qawiyy",
    image: "/clients/5.jpg",
    youtubeUrl: "https://www.youtube.com/@theabdulqawiyy/videos",
  },
] as const;

export type Client = (typeof clients)[number];
