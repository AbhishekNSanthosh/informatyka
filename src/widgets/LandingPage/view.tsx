import Button from "@components/Button";
import IconArrow from "@icons/IconArrow";
import React from "react";

export default function LandingPageView() {
  return (
    <div className="px-[5vw] flex w-full min-h-[90vh] items-center justify-center dark:bg-black-100">
      <div className="h-full flex items-center justify-center flex-col gap-2 text-center w-[70vw]">
        <span className="uppercase maintitle font-medium dark:text-gray-400">
          women in computing presents
        </span>
        <span className="text-[90px] font-extrabold maintitle mainTitle transparent">
          INFORMATYKA 4.0
        </span>
        <span className="text-center mt-4 dark:text-gray-400">
          Streaming a series of tech talks on leading-edge topics, brought up by
          IEEE Computer Society Kerala Chapter Women in Computing. Hold on,
          because we aren't just up with an event, but an experience designed to
          flood tech enthusiasts with the wisdom of tomorrow.
        </span>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button title="Go to Events" className="border-none outline-none px-4 py-2 rounded-[7px] bg-breakerDay-600 text-white text-base"/>
          <Button title="Learn More" icon={<IconArrow className="size-5"/>} className="border-none dark:bg-black-100 dark:text-breakerDay-600 flex items-center justify-center gap-2 outline-none px-4 py-2 rounded-lg bg-white text-breakerDay-700 text-base"/>
        </div> 
      </div>
    </div>
  );
}
