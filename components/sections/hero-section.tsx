"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteButton } from "@/components/ui/site-button";
import { heroContent, branding } from "@/lib/site-content";

const heroVideoUrl = "/BC/hero.mp4";
const heroPoster = "/BC/Students 1.jpg"; // choose a representative image from assets

export function HeroSection() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        {isVideoActive ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={heroPoster}
            alt="Hero scene"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[#081225]/74" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(181,48,67,0.28),_transparent_32%)]" />
      </div>
      <nav className="absolute left-0 top-0 z-10 flex items-center gap-3 px-6 py-4 sm:px-10 lg:px-12">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/95 shadow-lg shadow-black/20">
          <Image src={branding.logo} alt={branding.schoolName} fill className="object-contain p-2" priority />
        </div>
        <span className="text-sm font-semibold text-white/90 drop-shadow">{branding.schoolName}</span>
      </nav>
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-12">
        <div className="flex max-w-4xl animate-fade-up flex-col items-center space-y-8">
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {heroContent.title}
            </h1>
            <p className="max-w-3xl text-xl font-medium text-[#f0d8c8] sm:text-2xl">{heroContent.subtitle}</p>
            <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">{heroContent.description}</p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <SiteButton href={heroContent.primaryAction.href}>{heroContent.primaryAction.label}</SiteButton>
            <SiteButton href={heroContent.secondaryAction.href} variant="outline">
              {heroContent.secondaryAction.label}
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
