import Image from "next/image";

type PhoneScreenshotProps = {
  src: string;
  alt: string;
  title?: string;
  priority?: boolean;
  /** Visual width of the phone frame */
  size?: "sm" | "md" | "lg";
  className?: string;
  caption?: string;
};

const SIZE_MAP = {
  sm: { width: 220, className: "w-[180px] sm:w-[220px]" },
  md: { width: 280, className: "w-[220px] sm:w-[260px] md:w-[280px]" },
  lg: { width: 320, className: "w-[240px] sm:w-[280px] md:w-[320px]" },
} as const;

/** Portrait ~9:16 phone frame for ZH88 app screenshots */
export default function PhoneScreenshot({
  src,
  alt,
  title,
  priority = false,
  size = "md",
  className = "",
  caption,
}: PhoneScreenshotProps) {
  const { width, className: sizeClass } = SIZE_MAP[size];
  const height = Math.round(width * (16 / 9));

  return (
    <figure className={`flex flex-col items-center ${className}`.trim()}>
      <div
        className={`relative ${sizeClass} aspect-[9/16] rounded-[1.75rem] overflow-hidden border-[3px] border-gray-700 bg-black shadow-2xl ring-1 ring-white/10`}
      >
        <Image
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          className="absolute inset-0 h-full w-full object-cover object-top"
          sizes={`${width}px`}
          priority={priority}
          quality={80}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-xs text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
