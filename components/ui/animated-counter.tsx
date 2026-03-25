"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  durationMs = 1800,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [durationMs, hasStarted, value]);

  const formatted = useMemo(() => `${displayValue.toLocaleString("en-US")}${suffix}`, [displayValue, suffix]);

  return <span ref={ref}>{formatted}</span>;
}
