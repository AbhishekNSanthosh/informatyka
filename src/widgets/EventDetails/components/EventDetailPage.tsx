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
  return (
    <div className="flex w-full">
      {event ? (
        <div className="flex flex-col gap-8 w-full lg:flex-row md:flex-row">
          <div className="flex w-full md:w-[40vw] lg:w-[40vw] flex-col items-center justify-center gap-4 dark:text-gray-400">
            <Image
              src={event.imgUrl}
              height={400}
              width={400}
              alt="Event Image"
              className="rounded-[8px] w-full h-full"
            />
            {isRegistrationOpen && event.registrationLink && (
              <Link href={event.registrationLink} className="w-full" target="_blank">
                <button className="w-full p-3 items-center justify-center dark:text-gray-400 bg-breakerDay-600 text-white flex rounded-[8px] outline-none border-none">
                  Register
                </button>
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <span className="font-semibold text-xl text-justify dark:text-gray-400">
                <i>"{event.title}"</i>
              </span>
            </div>
            {event.description && (
              <div className="w-full">
                <span className="font-normal dark:text-gray-400">{event.description}</span>
              </div>
            )}
            {event.message && (
              <div className="w-full">
                <span className="font-normal dark:text-gray-400">{event.message}</span>
              </div>
            )}
            {event.condition && (
              <div className="w-full">
                <span className="font-normal dark:text-gray-400">{event.condition}</span>
              </div>
            )}
            {event.date && (
              <div className="w-full">
                <span className="font-normal dark:text-gray-400">Date: {event.date}</span>
              </div>
            )}
            {event.time && (
              <div className="w-full">
                <span className="font-normal dark:text-gray-400">Time: {event.time}</span>
              </div>
            )}
            {event.guidlinesLink && (
              <div className="w-full">
                <Link href={event.guidlinesLink} target="_blank" className="font-semibold dark:text-gray-400 text-breakerDay-600">
                  View guidelines
                </Link>
              </div>
            )}

            <span className="dark:text-gray-400">Any queries?</span>
            <div className="flex dark:text-gray-400">
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
