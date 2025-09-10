"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  images: string[];
  speed?: number; // duration of full scroll in seconds
  className?: string;
}

export default function LogoCarousel({ images, speed = 25, className }: LogoCarouselProps) {
  const fewImages = images.length <= 3;

  const itemClass = fewImages
    ? "relative flex-[0_0_100%] max-w-full h-16 sm:h-20 md:h-24"
    : "relative flex-none w-40 sm:w-48 md:w-56 lg:w-64 h-14 sm:h-16 md:h-20";

  return (
    <div className={cn("group relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className={itemClass}>
            <Image
              src={src}
              alt={`partner-logo-${i % images.length}`}
              fill
              className="object-contain"
              priority={i < images.length}
            />
          </div>
        ))}
      </div>
      {/* second track */}
      <div
        className="absolute top-0 flex w-max animate-marquee2 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={`dup-${i}`} className={itemClass}>
            <Image
              src={src}
              alt={`partner-logo-${i % images.length}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
