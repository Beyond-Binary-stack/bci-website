type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = invert ? "text-white" : "text-[#102a56]";
  const bodyColor = invert ? "text-[#e9e3d8]" : "text-slate-600";
  const eyebrowColor = invert ? "text-[#f0d8c8]" : "text-[#a32638]";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowColor}`}>
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
          {title}
        </h2>
        {description ? <p className={`text-base leading-7 sm:text-lg ${bodyColor}`}>{description}</p> : null}
      </div>
    </div>
  );
}
