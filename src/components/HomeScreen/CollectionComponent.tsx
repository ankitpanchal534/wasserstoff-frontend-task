/* eslint-disable @next/next/no-img-element */
import { lexend } from "@/app/fonts";
import { cn } from "@/utils/cn";

export default function CollectionComponent() {
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
        Meta <br />
        Lives
      </div>
      <div className="mt-3 text-2xl font-bold leading-8 text-white ">
        Live in Astrix
      </div>
      <div className="mt-3 text-base font-semibold tracking-normal leading-6 text-white ">
        Lorem ipsum dolor sit amet <br />
        consectetur. Ac lorem massa in morbi
        <br /> et sed ipsum. Pellentesque mattis
        <br /> condimentum ut nulla.
      </div>
      <div className="flex gap-3.5 py-0.5 mt-8 text-xl font-medium leading-10 text-stone-50 max-md:flex-wrap">
        <img
          loading="lazy"
          src="/Frame 1261154678.png"
          alt="avatar group"
          className="max-w-full aspect-[3.7] w-[150px]"
        />
        <div className="flex-auto my-auto">22k people interested</div>
      </div>
      <div className="mt-14 text-sm font-semibold text-white max-md:mt-7 ">
        Collectibles
      </div>
      <div className="mt-5  ">
        <div className="flex  gap-5 max-md:flex-col max-md:gap-0">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] min-w-[164px] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow px-2.5 py-3 mx-auto w-full bg-violet-300 rounded-lg max-md:mt-4">
                <div className="flex gap-5 justify-between">
                  <div className="justify-center px-1 text-xs font-bold text-white whitespace-nowrap bg-black rounded-lg">
                    2024
                  </div>
                  <div className="text-xs font-semibold text-black">
                    <span className="font-medium">By</span>{" "}
                    <span className="font-bold">Pablo</span>
                  </div>
                </div>
                <div className="self-center mt-2.5 text-xs font-medium text-black">
                  Collectible Name
                </div>
                <div className="flex justify-center items-center mt-1.5 bg-black rounded-lg border border-black border-solid overflow-hidden">
                  <img loading="lazy" src="/image 14.png" alt="card image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center self-center px-5 py-2.5 mt-20 text-2xl font-bold leading-8 bg-amber-300 rounded-[40px] text-zinc-900 max-md:mt-7">
        Join Waitlist
      </div>
    </div>
  );
}
