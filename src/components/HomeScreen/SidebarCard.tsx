/* eslint-disable @next/next/no-img-element */

import CollectionComponent from "./CollectionComponent";
import EventsComponent from "./EventsComponent";

export default function SidebarCard({ selected }: { selected: string }) {
  return (
    <div className="flex  gap-5 max-md:flex-wrap border h-full z-[100] bg-black">
      <div className="w-[80px] text-white h-full bg-[#B9A0FF] ">
        <div className="scrolling-content">
          <div
            className=" flex text-nowrap text-2xl justify-center  items-center pl-5 max-h-[170dvh] text-black  "
            style={{ writingMode: "vertical-lr" }}
          >
            Collection Live : Meta Lives , live on astrix Event : Oasis Bus tour
            , JLN Stadium , Delhi
          </div>
        </div>
      </div>
      {selected == "events" ? <EventsComponent /> : <CollectionComponent />}
    </div>
  );
}
