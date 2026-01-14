import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdell Design - Professional Thumbnail Designer",
    short_name: "Abdell Design",
    description:
      "Professional thumbnail designer specializing in crypto, trading, lifestyle, and podcast thumbnails for YouTube creators",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
