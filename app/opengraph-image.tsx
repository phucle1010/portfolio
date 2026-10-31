import { ImageResponse } from "next/og";

export const alt = "Le The Phuc - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#000000",
        color: "#ffffff",
        borderLeft: "16px solid #a855f7",
      }}
    >
      <div style={{ fontSize: 32, color: "#a855f7", letterSpacing: 2 }}>
        PUCKLEE.DEV_
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
          Le The Phuc
        </div>
        <div style={{ fontSize: 40, color: "#cfc2d6" }}>Software Engineer</div>
      </div>
      <div style={{ fontSize: 28, color: "#9ca3af" }}>
        React · Next.js · React Native · NestJS · AI Search
      </div>
    </div>,
    size
  );
}
