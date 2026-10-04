import type { MetadataRoute } from "next";
import { church } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: church.name,
    short_name: church.short,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f2",
    theme_color: "#1f2d5c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
