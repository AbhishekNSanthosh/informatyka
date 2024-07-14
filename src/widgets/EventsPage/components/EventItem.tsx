import Image from "next/image";
import React from "react";

interface eventItemProps {
  event: {
    title: string;
    imgUrl: string;
    desc: string;
  };
}
export default function EventItem(props: eventItemProps) {
  return (
    <div className="w-full p-1">
      <Image src={props?.event?.imgUrl} width={400} height={400} alt="" />
    </div>
  );
}
