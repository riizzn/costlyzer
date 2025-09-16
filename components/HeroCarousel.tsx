"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

// api?.scrollTo(index) → works as soon as you have api.

// useEffect → is just for state management (keeping React’s UI in sync with the carousel).

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto px-4 md:px-0"
      >
        <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
          {heroImages.map((o, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 md:pl-6 basis-full flex justify-center items-center"
            >
              <div className="p-3 bg-white border border-gray-200 shadow-sm rounded-xl">
                <Image
                  src={o.imgUrl}
                  width={300}
                  height={300}
                  alt={o.alt}
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-4 max-sm:hidden">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current
                ? "bg-primary"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground mt-2 sm:hidden">
        Swipe to view more
      </div>
    </div>
  );
};

export default HeroCarousel;
