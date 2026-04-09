"use client";
import React from "react";
import {cn} from "@/lib/utils";
import {useInView} from "framer-motion";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

const images = [
  {
    src: "/works/work-4.webp",
    alt: "Skinova work 1",
    ratio: 4 / 5,
  },
  {
    src: "/works/work-5.webp",
    alt: "Skinova work 2",
    ratio: 4 / 5,
  },
  {
    src: "/works/work-6.webp",
    alt: "Skinova work 3",
    ratio: 4 / 5,
  },
  {
    src: "/works/work-7.webp",
    alt: "Skinova work 4",
    ratio: 4 / 5,
  },
  {
    src: "/works/work-8.webp",
    alt: "Skinova work 5",
    ratio: 4 / 5,
  },
  {
    src: "/works/work-9.webp",
    alt: "Skinova work 6",
    ratio: 4 / 5,
  },
];

export function ImageGallery() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-10 px-4">
      <div className="mx-auto grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <AnimatedImage
            key={image.src ?? index}
            alt={image.alt}
            src={image.src}
            ratio={image.ratio ?? 4 / 5}
            placeholder="https://placehold.co/1080x1350/"
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedImage({alt, src, ratio, placeholder}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {once: true});
  const [isLoading, setIsLoading] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      className="bg-accent relative size-full rounded-lg border">
      <Image
        fill
        alt={alt}
        src={imgSrc}
        quality={70}
        className={cn(
          "size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out",
          {
            "opacity-100": isInView && !isLoading,
          },
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        onError={handleError}
      />
    </AspectRatio>
  );
}
