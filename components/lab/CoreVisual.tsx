"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";

import { StaticCore } from "./StaticCore";

const CoreCanvas = dynamic(() => import("./CoreCanvas"), {
  ssr: false,
  loading: () => <StaticCore />,
});

class WebGLBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return <StaticCore />;
    return this.props.children;
  }
}

export function CoreVisual() {
  const frame = useRef<HTMLDivElement>(null);
  const [webgl, setWebgl] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setWebgl(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = frame.current;
    if (!node || !webgl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [webgl]);

  return (
    <div ref={frame} className="absolute inset-0">
      {webgl ? (
        <WebGLBoundary>
          <CoreCanvas playing={playing} />
        </WebGLBoundary>
      ) : (
        <StaticCore />
      )}
    </div>
  );
}
