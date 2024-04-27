import { cn } from "@/utils/cn";
/* eslint-disable @next/next/no-img-element */

import { Dispatch, SetStateAction, useEffect, useState } from "react";

function SplashScreen({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prevToggle) => !prevToggle);
    }, 2000);

    setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={cn(
        open ? "scale-100" : "scale-0",
        "flex justify-center items-center w-full px-16 py-20 bg-yellow-50 max-md:px-5",
        open ? "flex" : "hidden"
      )}
      onClick={() => setOpen(false)}
    >
      <div className="flex flex-col  w-full  max-md:max-w-full">
        <div className="text-5xl font-bold text-black max-md:max-w-full">
          Astrix.
        </div>
        <div className="flex flex-col pl-20 mt-28 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-3 items-center max-md:flex-wrap">
            <div className=" my-auto text-5xl font-medium  text-black max-md:text-4xl">
              WE
            </div>
            <div className="flex overflow-hidden justify-center items-center ">
              <img
                loading="lazy"
                src="/Frame 1.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
            <div className="  my-auto text-5xl font-medium  text-black max-md:max-w-full max-md:text-4xl">
              ORGANIZE THE
            </div>
          </div>
          <div className="flex gap-5 mt-9 max-md:flex-wrap justify-start ">
            <div className=" my-auto text-5xl font-medium  text-black max-md:max-w-full max-md:text-4xl">
              CONNECTION
            </div>
            <div className="flex overflow-hidden   items-center   ">
              <img
                loading="lazy"
                src="/Frame 2.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
          </div>
          <div className="flex  mt-12 max-md:flex-wrap max-md:mt-10">
            <div className="flex  gap-3 max-md:flex-wrap">
              <div className="flex overflow-hidden  shrink-0 justify-center items-center  w-fit">
                <img
                  loading="lazy"
                  src="/Frame 3.png"
                  alt="screen image"
                  className=""
                />
              </div>
              <div className=" my-auto text-5xl font-medium  text-black max-md:text-4xl">
                BETWEEN
              </div>
            </div>
            <div className="flex  gap-3">
              <div className="flex overflow-hidden relative flex-col justify-center items-center ">
                <img
                  loading="lazy"
                  src="/Frame 4.png"
                  alt="screen image"
                  className={`object-cover duration-500 h-16 ${
                    toggle ? "max-w-full" : "max-w-[240px]"
                  }`}
                />
              </div>
              <div className=" my-auto text-5xl font-medium  text-black max-md:text-4xl">
                MUSIC
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-9 max-md:flex-wrap">
            <div className=" my-auto text-5xl font-medium  text-black max-md:text-4xl">
              ARTIST
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center items-center ">
              <img
                loading="lazy"
                src="/Frame 5.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
            <div className=" my-auto text-5xl font-medium  text-black max-md:text-4xl">
              CULTURE
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center items-center ">
              <img
                loading="lazy"
                src="/Frame 6.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-11 max-md:flex-wrap max-md:mt-10 ">
            <div className="flex overflow-hidden relative flex-col justify-center items-center ">
              <img
                loading="lazy"
                src="/Frame 7.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
            <div className="  text-5xl font-medium  text-black max-md:text-4xl">
              ART
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center items-center ">
              <img
                loading="lazy"
                src="/Frame 8.png"
                alt="screen image"
                className={`object-cover duration-500 h-16 ${
                  toggle ? "max-w-full" : "max-w-[240px]"
                }`}
              />
            </div>
            <div className=" my-auto text-5xl font-medium  text-black max-md:max-w-full max-md:text-4xl">
              & COLLECTIONS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SplashScreen;
