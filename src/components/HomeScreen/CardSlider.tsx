/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";

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
    <div
      ref={containerRef}
      className="absolute scrollbar-none w-[55dvw] pl-64 flex-nowrap left-10 top-48 flex flex-row cursor-grab pointer-events-auto  z-0 gap-5 max-w-[55dvw] overflow-auto pr-32 "
    >
      <img
        src="/Frame 1261154670.jpg"
        className={`h-full  min-w-[390px]  snap-end slide ${
          activeSlide === 0 ? "opacity-100" : "opacity-65 duration-100"
        }`}
        alt="banner image"
        data-index={0}
      />
      <img
        src="/Frame 1261154671 (2).jpg"
        className={`h-full  min-w-[390px] snap-end slide ${
          activeSlide === 1 ? "opacity-100" : "opacity-65 duration-100"
        }`}
        alt="banner image"
        data-index={1}
      />
      <img
        src="/Frame 1261154672.jpg"
        className={`h-full  min-w-[390px] snap-end slide ${
          activeSlide === 2 ? "opacity-100" : "opacity-65 duration-100"
        }`}
        alt="banner image"
        data-index={2}
      />
      <img
        src="/Frame 1261154671.jpg"
        className={`h-full  min-w-[390px] snap-end slide ${
          activeSlide === 3 ? "opacity-100" : "opacity-65 duration-100"
        }`}
        alt="banner image"
        data-index={3}
      />
    </div>
  );
}
