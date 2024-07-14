"use client";
import Logo from "@components/Logo";
import IconScrollToTop from "@icons/IconScrollToTop";
import { navLinks } from "@utils/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterView() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="contact" className="p-[1rem] dark:bg-black-100">
      <footer className="custom-footer flex flex-col items-center justify-center bg-breakerDay-600 dark:bg-black-100 px-[1vw]  rounded-[10px]">
        <div className="relative mx-auto w-full py-8 lg:py-16 sm:px-6 lg:px-8 lg:pt-18">
          <div className="absolute right-[2vw] dark:bg-breakerDay-600 bg-white p-2 lg:p-4 md:p-4 cursor-pointer rounded-full" onClick={scrollToTop}>
            <IconScrollToTop />
          </div>
          <div className="lg:flex lg:items-end lg:justify-between ">
            <div>
              <div className="flex justify-start ml-4 lg:ml-0 md:ml-0 text-white lg:justify-start">
                <Image
                  src={"/csks.png"}
                  width={400}
                  height={400}
                  alt="csks logo"
                  className="w-[10rem] h-[5rem] md:h-[6rem] lg:h-[6rem] lg:w-[15rem] md:w-[15rem]"
                />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center dark:text-gray-400 leading-relaxed text-white lg:text-white text-sm lg:text-base md:text-base lg:text-left">
                IEEE Computer Society (CS) drives progress in Computer Science
                and Engineering by fostering collaboration among professionals
                worldwide. Through conferences, publications, and diverse
                programs, we empower leaders, ensuring they are equipped to
                drive innovation and make a positive global impact. Explore more
                in our footer section.
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              {navLinks.map((nav) => (
                <li key={nav?.title}>
                  <Link
                    className="text-white transition capitalize hover:text-gray-700/75 dark:text-gray-400 dark:hover:text-white/75"
                    href={nav?.url}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-[.5px] w-[92vw] bg-white dark:bg-gray-400"></div>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full py-[1rem] md:[2rem] lg:[2rem] px-[2vw]">
          <div className="">
            <span className="mt-12 text-center text-sm text-white dark:text-gray-400 lg:text-right">
              Copyright &copy; 2024. All rights reserved.
            </span>
          </div>
          <div className="">
            <span className="mt-12 text-center text-sm text-white dark:text-gray-400 lg:text-right">
              Crafted by{" "}
              <span className="font-semibold text-breakerDay-950 dark:text-breakerDay-600">
                IEEE CSKS
              </span>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
