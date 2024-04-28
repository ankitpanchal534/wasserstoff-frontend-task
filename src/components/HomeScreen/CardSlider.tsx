/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { lexend } from "@/app/fonts";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

const images = [
  "/Frame 1261154670.jpg",
  "/Frame 1261154671 (2).jpg",
  "/Frame 1261154672.jpg",
  "/Frame 1261154671.jpg",
];

export default function CardSlider() {
  const containerRef: any = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let interval: any;

    const handleMouseEnter = () => {
      clearInterval(interval);
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleIntersect = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSlide(parseInt(entry.target.getAttribute("data-index")));
        }
      });
    };

    const startScrolling = () => {
      interval = setInterval(() => {
        // Check if the container and scrollWidth properties are available
        if (containerRef?.current?.scrollWidth !== undefined && !isHovered) {
          // If scrolled to the end, reset scroll position to the start
          if (
            containerRef.current.scrollLeft +
              containerRef.current.clientWidth ===
            containerRef.current.scrollWidth
          ) {
            containerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          } else {
            // Scroll by 450 pixels every 1500 milliseconds
            containerRef.current.scrollBy({
              left: 450,
              behavior: "smooth",
            });
          }
        }
      }, 1500);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: containerRef.current,
      threshold: 0.5, // Trigger when half of the slide is visible
    });

    // Observe each slide
    containerRef.current.querySelectorAll(".slide").forEach((slide: any) => {
      observer.observe(slide);
    });

    startScrolling();

    containerRef.current.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Clear the interval and remove event listeners when the component is unmounted
    return () => {
      clearInterval(interval);
      observer.disconnect();
      containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div>
      <div
        ref={containerRef}
        className="absolute scrollbar-none w-[55dvw] pl-64 flex-nowrap left-10 top-48 flex flex-row cursor-grab pointer-events-auto  z-0 gap-5 max-w-[55dvw] overflow-x-auto overflow-y-hidden pr-32 "
      >
        {images.map((img_url, index) => (
          <div key={index}>
            <Heading />
            <img
              src={img_url}
              className={`h-full  min-w-[390px]  snap-end  ${
                activeSlide === index
                  ? "opacity-100"
                  : "opacity-65 duration-100"
              }`}
              alt="banner image"
              data-index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const Heading = () => {
  return (
    <div className={cn(lexend.className, " font-bold text-white mb-2")}>
      <h1 className="text-4xl ">Lunar Palace:</h1>
      <span className="text-2xl">(ft. Kanye west)</span>
    </div>
  );
};
