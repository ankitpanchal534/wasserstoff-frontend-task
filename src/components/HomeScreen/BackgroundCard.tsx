/* eslint-disable @next/next/no-img-element */

import { lexend } from "@/app/fonts";
import { cn } from "@/utils/cn";
import { useState } from "react";
import CardSlider from "./CardSlider";
import SidebarCard from "./SidebarCard";

export function BackgroundCard() {
  const [selected, setSelected] = useState("events");
  const activeClass =
    "z-10 justify-center px-9 py-5 duration-300 bg-neutral-600 rounded-[100px]  cursor-pointer text-stone-50 max-md:px-5";
  const inActiveClass =
    "z-10 justify-center px-9 py-5 duration-300 rounded-[100px]  cursor-pointer text-stone-50 max-md:px-5";
  return (
    <div className="flex gap-5 justify-between pl-4 relative bg-zinc-900 max-md:flex-wrap overflow-hidden">
      <div
        className={cn(
          "flex flex-col self-start mt-4 font-bold whitespace-nowrap"
        )}
      >
        <div className="flex gap-4 text-4xl font-extrabold tracking-tight text-amber-300 leading-[64px]">
          <img
            loading="lazy"
            src="/Astrix Branding.svg"
            alt="logo"
            className="aspect-square w-[74px]"
          />
          <div>Astrix.</div>
        </div>
        <div className="mt-20 w-[55dvw]     text-white text-opacity-20 ">
          <div className="max-w-[360px] text-8xl text-wrap break-words space-x-5">
            ASTRIX <br />
            <br /> <br />
            COLLECTIBLE
          </div>
        </div>
        <div
          className={cn(
            lexend.className,
            "flex gap-5 justify-between  mx-7 mt-16 max-w-full text-lg leading-5 text-center bg-zinc-800 rounded-[100px] w-[328px] max-md:pl-5 max-md:mx-2.5 max-md:mt-7"
          )}
        >
          <div
            className={selected == "events" ? activeClass : inActiveClass}
            onClick={() => setSelected("events")}
          >
            Events
          </div>
          <div
            className={selected == "collections" ? activeClass : inActiveClass}
            onClick={() => setSelected("collections")}
          >
            Collections
          </div>
        </div>
      </div>
      <CardSlider />
      <SidebarCard selected={selected} />
    </div>
  );
}
