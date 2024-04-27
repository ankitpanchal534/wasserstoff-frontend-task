/* eslint-disable @next/next/no-img-element */
import { lexend } from "@/app/fonts";
import { cn } from "@/utils/cn";

export default function EventsComponent() {
  return (
    <div
      className={cn(
        lexend.className,
        "flex flex-col grow items-start my-auto basis-0 w-fit "
      )}
    >
      <div className="  text-2xl  font-bold  text-white ">
        Explore Your First <br />
        Collectible
      </div>
      <div className="mt-14 text-6xl font-extrabold tracking-tight text-white leading-[64px] max-md:mt-7 max-md:mr-2.5  max-md:text-4xl max-md:leading-[50px]">
        Event Name
      </div>
      <div className="mt-3 text-xl font-medium leading-8 text-white ">
        Venue 04/3/2024 @19:00
      </div>
      <div className="mt-3 text-base font-semibold tracking-normal leading-6 text-white ">
        Lorem ipsum dolor sit amet <br />
        consectetur. Ac lorem massa in morbi
        <br /> et sed ipsum. Pellentesque mattis
        <br /> condimentum ut nulla.
      </div>

      <div className="mt-14 text-2xl font-semibold text-white max-md:mt-7 ">
        Artist Lineup
      </div>
      <div className="mt-5  ">
        <div className="flex  gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex justify-center items-center mt-1.5 bg-black rounded-lg border border-black border-solid overflow-hidden">
            <img loading="lazy" src="/Group 1171274895.png" alt="card image" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between pt-32 px-3 items-end">
        <div>
          <img src="/image 131.jpg" alt="qr code" className="h-28 w-28" />
        </div>
        <div className=" text-2xl font-bold  bg-amber-300 rounded-[40px] p-2 px-4 text-zinc-900 ">
          Join Waitlist
        </div>
      </div>
    </div>
  );
}
