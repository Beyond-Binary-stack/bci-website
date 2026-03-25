import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Globe2,
  GraduationCap,
  PlayCircle,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteButton } from "@/components/ui/site-button";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import {
  ctaContent,
  branding,
  facilities,
  footerContent,
  galleryItems,
  heroContent,
  newsItems,
  overviewContent,
  programs,
  stats,
  studentLife,
  testimonials,
  tourContent,
  trustItems,
} from "@/lib/site-content";

const trustIcons = {
  badgeCheck: BadgeCheck,
  globe: Globe2,
  building: Building2,
  shield: ShieldCheck,
};

const statIcons = {
  users: Users,
  graduationCap: GraduationCap,
  school: School,
  award: Award,
};

const heroVideoUrl = "/BC/hero.mp4";

const campusTourVideoUrl = "/BC/Vedio.mp4";

function MediaCard({
  title,
  description,
  image,
  compact = false,
}: {
  title: string;
  description: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#dfd2c3] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183f7a]/12">
      <div className={`relative overflow-hidden ${compact ? "aspect-[4/3]" : "aspect-[5/4]"}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
      </div>
    </article>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
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
            <p className="max-w-3xl text-xl font-medium text-[#f0d8c8] sm:text-2xl">
              {heroContent.subtitle}
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              {heroContent.description}
            </p>
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

export function TrustSection() {
  return (
    <section className="bg-[#fffaf4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A trusted learning environment for every stage of growth"
          description="Families choose British Canadian International School for its balance of academic excellence, student wellbeing, and modern learning resources."
          align="center"
        />
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = trustIcons[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[#dfd2c3] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#b53043]/30 hover:shadow-xl hover:shadow-[#183f7a]/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#edf2fb] p-3 text-[#183f7a]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#102a56]">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section id="overview" className="bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-xl shadow-[#183f7a]/15">
          <Image src={overviewContent.image} alt={overviewContent.title} fill className="object-cover" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex max-w-2xl flex-col items-center space-y-6 text-center">
            <SectionHeading
              eyebrow="School Overview"
              title={overviewContent.title}
              description={overviewContent.description}
            />
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {overviewContent.secondaryText}
            </p>
            <SiteButton href={overviewContent.action.href} variant="ghost">
              {overviewContent.action.label}
            </SiteButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="bg-[#102a56] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="At A Glance"
          title="Numbers that reflect a thriving school community"
          description="A growing academic environment supported by dedicated educators, well-designed classrooms, and years of trusted service."
          invert
          align="center"
        />
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = statIcons[item.icon];

            return (
              <article
                key={item.label}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-8 text-center shadow-lg shadow-black/20 backdrop-blur"
              >
                <div className="mx-auto mb-6 inline-flex rounded-2xl bg-[#b53043]/18 p-4 text-[#f0d8c8]">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-300">{item.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#fffaf4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Academic Programs"
          title="Learning pathways designed for confident, curious students"
          description="Our academic stages support students with age-appropriate guidance, engaging classroom experiences, and strong educational foundations."
          align="center"
        />
        <div className="grid w-full gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="group overflow-hidden rounded-[1.75rem] border border-[#dfd2c3] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183f7a]/12">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={program.image} alt={program.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-[#102a56]">{program.title}</h3>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{program.description}</p>
                <Link
                  href="#cta"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#b53043] transition hover:text-[#8f1f31]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FacilitiesSection() {
  return (
    <section className="bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Facilities"
          title="Modern spaces that support discovery, focus, and active learning"
          description="Our campus is designed to give students room to learn, explore, and grow through practical experiences and everyday comfort."
          align="center"
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {facilities.map((facility) => (
            <div key={facility.title} className="group relative overflow-hidden rounded-[1.75rem]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">{facility.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-200">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CampusTourSection() {
  return (
    <section id="tour-video" className="bg-[#fffaf4] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div className="flex items-center justify-center">
          <div className="flex max-w-2xl flex-col items-center space-y-6 text-center">
            <SectionHeading
              eyebrow="Campus Tour"
              title={tourContent.title}
              description={tourContent.description}
            />
            <ul className="grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-2 sm:text-base">
              {tourContent.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-[#dfd2c3] bg-white px-4 py-3 text-center"
                >
                  {highlight}
                </li>
              ))}
            </ul>
            <SiteButton href={tourContent.action.href} variant="ghost">
              {tourContent.action.label}
            </SiteButton>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#102a56] shadow-2xl shadow-[#183f7a]/18">
          <video
            className="aspect-video w-full object-cover"
            controls
            poster={tourContent.poster}
          >
            <source src={campusTourVideoUrl} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute left-6 top-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#081225]/70 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            <PlayCircle className="h-5 w-5 text-[#f0d8c8]" />
            Campus Tour Preview
          </div>
        </div>
      </div>
    </section>
  );
}

export function StudentLifeSection() {
  return (
    <section id="student-life" className="bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Student Life"
          title="A vibrant experience beyond the classroom"
          description="From sports and events to clubs and field trips, students enjoy opportunities that strengthen friendships, leadership, and confidence."
          align="center"
        />
        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {studentLife.map((item) => (
            <MediaCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#102a56] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="flex items-center justify-center text-center">
          <SectionHeading
            eyebrow="Testimonials"
            title="Families trust us to guide their children with care and excellence"
            description="Parent feedback reflects the supportive learning culture, high expectations, and personal attention students receive every day."
            invert
          />
        </div>
        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="bg-[#fffaf4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Latest News"
          title="Recent highlights from the academy"
          description="Keep up with the activities, celebrations, and academic moments that make school life memorable."
          align="center"
        />
        <div className="grid w-full gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-[#dfd2c3] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#183f7a]/12"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-[#102a56]">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">{item.summary}</p>
                <Link
                  href="#footer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#b53043] transition hover:text-[#8f1f31]"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center lg:justify-between">
          <SectionHeading
            eyebrow="Gallery Preview"
            title="School memories, classroom moments, and celebrations"
            description="A quick look at the experiences that shape life at British Canadian International School."
          />
          <SiteButton href="#footer" variant="ghost">
            View Full Gallery
          </SiteButton>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <MediaCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section id="cta" className="bg-[#102a56] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,_#102a56,_#b53043)] px-8 py-14 shadow-2xl shadow-black/25 sm:px-12 lg:px-16">
          <div className="flex flex-col items-center gap-8 text-center lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#f0d8c8]">
                Admissions
              </span>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {ctaContent.title}
              </h2>
              <p className="text-base leading-8 text-slate-200 sm:text-lg">{ctaContent.description}</p>
            </div>
            <div className="shrink-0">
              <SiteButton href={ctaContent.action.href}>{ctaContent.action.label}</SiteButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer id="footer" className="bg-[#fffaf4] py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 text-center sm:px-10 lg:grid-cols-[0.85fr_0.75fr_0.95fr] lg:px-12">
        <div className="flex flex-col items-center space-y-5">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#dfd2c3] bg-white shadow-sm">
              <Image src={branding.logo} alt={branding.schoolName} fill className="object-contain p-2" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a32638]">
              {branding.schoolName}
            </span>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            A supportive school community focused on academic excellence, student wellbeing, and future-ready learning.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div className="text-center">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-[#b53043]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Social Media</h3>
            <ul className="space-y-3">
              {footerContent.social.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 transition hover:text-[#b53043]"
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6 text-center">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Contact Information</h3>
            <ul className="space-y-4">
              {footerContent.contact.map((item) => (
                <li key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <Link href={item.href} className="text-slate-700 transition hover:text-[#b53043]">
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[1.5rem] border border-[#dfd2c3]">
            <iframe
              title="British Canadian International School location"
              src={footerContent.mapEmbedUrl}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
