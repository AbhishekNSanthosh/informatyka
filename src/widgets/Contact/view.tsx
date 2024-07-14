import React from "react";
import IconChat from "@icons/IconChat";
import IconMail from "@icons/IconMail";
import Image from "@components/Image";
import TitleBar from "@components/TitleBar";

const contact = [
  {
    id: 1,
    name: "Devanarayanan SV",
    role: "Student Representative, IEEE CS Kerala Chapter",
    img: "/contact/deva.png",
    mail: "devanarayanansv@ieee.org",
    contact: "9495861692",
  },
  {
    id: 2,
    name: "Neha Arun",
    role: "WIC, IEEE CS Kerala Chapter",
    img: "/contact/neha.png",
    mail: "nehaarun18@gmail.com",
    contact: "9496691266",
  },
  // {
  //   id: 2,
  //   name: "Sabareesh K",
  //   role: "Joint-Secretary Industry, IEEE CS Kerala Chapter",
  //   img: "/images/assets/contact/jana.png",
  //   mail: "sabareeshk55@gmail.com",
  //   contact: "9946425732",
  // },
  {
    id: 3,
    name: "Maria Tresa",
    role: "Tranvancore HSR, IEEE CS Kerala Chapter",
    img: "/contact/maria.png",
    mail: "mariatresa2003@gmail.com",
    contact: "9074003840",
  },
  {
    id: 4,
    name: "Dr. Deepthi Sasidharan",
    role: "Chair, IEEE CS Kerala Chapter",
    img: "/contact/deepthi.png",
    mail: "deepthis@ieee.org",
    contact: "9544170787",
  },
];
export default function ContactView() {
  return (
    <div className="mx-auto px-[5vw] sm:py-16 lg:py-1 dark:bg-black-100">
      <div className="flex flex-col items-center py-4 sm:py-10 lg:py-5">
        <TitleBar title="Contact" />
      </div>
      <div className="flex flex-wrap justify-center">
        {contact?.map((item) => (
          <div
            className="w-full dark:bg-black-100 max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4"
            key={item?.id}
          >
            <div className="flex flex-col items-center py-10 px-2">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={item?.img}
                width={400}
                height={400}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-black-300 dark:text-gray-400">
                {item?.name}
              </h5>
              <span className="text-sm text-black-300 dark:text-gray-500">
                {item?.role}
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href={`mailto:${item?.mail}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-breakerDay-600 rounded-lg hover:bg-slk-light focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <IconMail className="size-6 mr-2" />
                  E-Mail
                </a>
                <a
                  href={`tel:${item?.contact}`}
                  className="inline-flex items-center py-2 px-4 ms-2 text-sm font-medium text-black-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  <IconChat className="mr-2 w-6 h-6" />
                  Message
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
