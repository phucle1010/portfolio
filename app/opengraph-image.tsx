import { ImageResponse } from "next/og";

import { site } from "@/constants/lab";

export const alt = site.title;
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
        padding: "64px 72px",
        background: "#100f0c",
        color: "#ebe6d8",
        borderLeft: "12px solid #e8a317",
      }}
    >
      <div
        style={{
          fontSize: 22,
          color: "#948c7a",
          letterSpacing: 1,
        }}
      >
        {site.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          I build digital products that scale.
        </div>
        <div style={{ fontSize: 26, color: "#948c7a" }}>
          Le The Phuc · Full-Stack Developer
        </div>
      </div>
      <div
        style={{
          fontSize: 20,
          color: "#5e584c",
        }}
      >
        SaaS · web applications · AI-powered products
      </div>
    </div>,
    size
  );
}
