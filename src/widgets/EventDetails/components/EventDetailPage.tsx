import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Contact {
  name: string;
  no: string;
}

interface EventDetailProps {
  event?: {
    id: string;
    title: string;
    description?: string;
    message?: string;
    imgUrl: string;
    condition?: string;
    contact?: Contact[];
    mode?: string;
    date?: string;
    time?: string;
    registrationLink?: string;
    guidlinesLink?: string;
  };
  isRegistrationOpen:any;
}

export default function EventDetailPage(props: EventDetailProps) {
  const { event } = props;
  const isRegistrationOpen = props?.isRegistrationOpen; // Example condition for registration being open
console.log(isRegistrationOpen)
  return (
    <div className="flex w-full">
      {event ? (
        <div className="flex flex-row gap-8 w-full">
          <div className="flex w-[40vw] flex-col items-center justify-center gap-4">
            <Image
              src={event.imgUrl}
              height={400}
              width={400}
              alt="Event Image"
              className="rounded-[8px] w-full h-full"
            />
            {isRegistrationOpen && event.registrationLink && (
              <Link href={event.registrationLink} className="w-full" target="_blank">
                <button className="w-full p-3 items-center justify-center bg-breakerDay-600 text-white flex rounded-[8px] outline-none border-none">
                  Register
                </button>
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <span className="font-semibold text-xl text-justify">
                <i>"{event.title}"</i>
              </span>
            </div>
            {event.description && (
              <div className="w-full">
                <span className="font-normal">{event.description}</span>
              </div>
            )}
            {event.message && (
              <div className="w-full">
                <span className="font-normal">{event.message}</span>
              </div>
            )}
            {event.condition && (
              <div className="w-full">
                <span className="font-normal">{event.condition}</span>
              </div>
            )}
            {event.date && (
              <div className="w-full">
                <span className="font-normal">Date: {event.date}</span>
              </div>
            )}
            {event.time && (
              <div className="w-full">
                <span className="font-normal">Time: {event.time}</span>
              </div>
            )}
            {event.guidlinesLink && (
              <div className="w-full">
                <Link href={event.guidlinesLink} target="_blank" className="font-semibold text-breakerDay-600">
                  View guidelines
                </Link>
              </div>
            )}

            <span className="">Any queries?</span>
            <div className="flex">
              {event.contact?.map((contactDetail, index) => (
                <div key={index} className="w-full flex flex-col">
                  <div>
                    <span className="font-normal">{contactDetail.name}</span>
                  </div>
                  <div>
                    <Link href={`https://wa.me/+91${contactDetail.no}?text=Hey%20${contactDetail.name}`} target="_blank" className="font-normal">
                      +91 {contactDetail.no}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
