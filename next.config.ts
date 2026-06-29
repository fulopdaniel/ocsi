import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A projekt gyökerének rögzítése (több lockfile miatti figyelmeztetés ellen)
  turbopack: {
    root: path.join(__dirname),
  },
  // A korábbi dinamikus OG kép (/opengraph-image) URL-jét a Facebook a saját
  // CDN-jén gyorsítótárazta a már megosztott bejegyzésekhez. Mivel a route már
  // statikus /OG.png-re váltott, a régi URL 404-et adna (fehér kép). Ezért a
  // régi útvonalat az új képre irányítjuk, hogy a meglévő megosztások is működjenek.
  async redirects() {
    return [
      {
        source: "/opengraph-image",
        destination: "/OG.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
