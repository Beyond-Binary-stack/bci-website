"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

import type { TestimonialItem } from "@/lib/site-content";

type TestimonialCarouselProps = {
  items: TestimonialItem[];
};

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const currentItem = items[index];

  const move = (direction: "next" | "prev") => {
    setIndex((current) => {
      if (direction === "next") {
        return (current + 1) % items.length;
      }

      return (current - 1 + items.length) % items.length;
    });
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10">
      <Quote className="h-10 w-10 text-[#f0d8c8]" />
      <div className="mt-6 space-y-6">
        <p className="text-xl leading-8 text-white sm:text-2xl">&ldquo;{currentItem.quote}&rdquo;</p>
        <div>
          <p className="text-lg font-semibold text-white">{currentItem.name}</p>
          <p className="text-sm uppercase tracking-[0.22em] text-slate-300">{currentItem.role}</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {items.map((item, itemIndex) => (
            <button
              key={`${item.name}-${itemIndex}`}
              type="button"
              aria-label={`Go to testimonial ${itemIndex + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                itemIndex === index ? "w-10 bg-[#b53043]" : "w-2.5 bg-white/35"
              }`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
            onClick={() => move("prev")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
            onClick={() => move("next")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
