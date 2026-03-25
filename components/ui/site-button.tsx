import type { ReactNode } from "react";
import Link from "next/link";

type SiteButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
};

export function SiteButton({ href, children, variant = "solid" }: SiteButtonProps) {
  const styles = {
    solid:
      "bg-[#b53043] text-white shadow-lg shadow-[#b53043]/25 hover:bg-[#9f2436]",
    outline:
      "border border-white/30 bg-white/10 text-white hover:border-[#f0d8c8]/80 hover:bg-white/20",
    ghost:
      "border border-[#d8c7b5] bg-[#fffaf2] text-[#102a56] hover:border-[#b53043]/30 hover:bg-[#f7efe4]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
