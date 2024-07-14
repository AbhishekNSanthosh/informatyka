import React from "react";

interface titleBarProps {
  title: string;
  secondTitle?: string;
}

export default function TitleBar(props: titleBarProps) {
  return (
    <div className="w-full flex items-center justify-start gap-2 border-l-[7px] border-breakerDay-600">
      <span className="dark:text-black-100 md:text-5xl lg:text-5xl text-3xl font-semibold bg-breakerDay-600 h-fit ml-1 text-white">
        {props?.title}
      </span>
    </div>
  );
}
