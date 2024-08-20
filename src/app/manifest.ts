import { logoImg, logoShortImg } from "@/constants";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vanguard - Leading Provider of Mining Equipment",
    short_name: "Vanguard",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: logoShortImg.src,
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: logoImg.src,
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
