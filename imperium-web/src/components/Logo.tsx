import Image from "next/image";
import Link from "next/link";

// Wordmark cropped from the supplied 1568×1568 PNG (orange on white), made transparent.
// Replace with SVG when supplied.
export function Logo({ tone = "ink", className = "" }: { tone?: "ink" | "white"; className?: string }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className}`} aria-label="Imperium home">
      <Image
        src={tone === "ink" ? "/brand/imperium-logo-orange.png" : "/brand/imperium-logo-white.png"}
        alt="Imperium"
        width={667}
        height={120}
        priority
        className="h-[24px] w-auto md:h-[27px]"
      />
    </Link>
  );
}
