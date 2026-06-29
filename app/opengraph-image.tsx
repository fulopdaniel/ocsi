import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

// Statikus, 1200×630-as OG-kép – minden oldal ezt örökli.
export const runtime = "nodejs";
export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profilkep.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #103f3c 0%, #0d8174 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Bal: szöveg */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 60px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#5ed4be",
              fontWeight: 700,
            }}
          >
            {`Kárpittisztítás · ${site.city}`}
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 18,
            }}
          >
            Asztalos Tibor
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#c9f2e8",
              lineHeight: 1.3,
              marginTop: 22,
            }}
          >
            Kanapé, szőnyeg és matrac mélytisztítása helyszínen
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              background: "#f5a524",
              color: "#0c1f1c",
              fontSize: 38,
              fontWeight: 800,
              padding: "16px 32px",
              borderRadius: 999,
              alignSelf: "flex-start",
            }}
          >
            {site.phoneDisplay}
          </div>
        </div>

        {/* Jobb: fotó (magas oszlop → arc nem vágódik le) */}
        <div style={{ display: "flex", width: 440, height: "100%" }}>
          <img
            src={photoSrc}
            width={440}
            height={630}
            style={{
              width: 440,
              height: 630,
              objectFit: "cover",
              objectPosition: "50% 20%",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
