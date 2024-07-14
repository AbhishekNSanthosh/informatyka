"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Contact {
  name: string;
  no: string;
}

interface eventItemProps {
  event: {
    id:string;
    title: string;
    description: string;
    message: string;
    imgUrl: string;
    condition: string;
    contact: Contact[];
    mode: string;
    date: string;
    time: string;
    registrationLink: string;
    guidlinesLink: string;
  };
}
export default function EventItem(props: eventItemProps) {
  const router = useRouter()
  return (
    <Link href={`/events/${props?.event?.id}`}>
      <div onClick={()=>{
        // router?.push(`/${props?.event?.id}`)
      }} className="w-full dark:bg-black-100 flex-1 flex flex-col items-start justify-center bg-white shadow-md rounded-[10px] gap-4 cursor-pointer">
        <Image
          src={props?.event?.imgUrl}
          width={700}
          height={700}
          alt=""
          className="rounded-[8px] h-full w-full"
        />
      </div>
    </Link>
  );
}
