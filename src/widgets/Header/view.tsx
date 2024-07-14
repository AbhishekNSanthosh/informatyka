"use client";
import React, { useState } from "react";
import Button from "@components/Button";
import Logo from "@components/Logo";
import LogoBlack from "@components/LogoBlack";
import Icon3Bars from "@icons/Icon3Bars";
import { navLinks } from "@utils/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import IconClose from "@icons/IconClose";

const DarkModeToggle = dynamic(() => import("@components/Toggle"), {
  ssr: false,
});

export default function HeaderView() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div
      className={`${
        drawerOpen ? "bg-white " : ""
      } fixed dark:bg-black-100 w-screen backdrop-blur-md top-0 z-50 flex flex-col items-center justify-center px-[5vw] py-[1.4rem] md:py-[2rem] lg:py-[2rem] bg-opacity-0`}
    >
      <div className="flex w-full">
        <Link href={"/"} className="flex-1">
          <div className="flex-1">
            <div className="dark:hidden flex">
              <Logo />
            </div>
            <div className="dark:flex hidden">
              <LogoBlack />
            </div>
          </div>
        </Link>
        <div className="flex-2 md:flex lg:flex flex-row items-center justify-center gap-[4vw] hidden">
          {navLinks?.map((navItem, index) => (
            <Link
              className="font-medium capitalize text-base dark:text-gray-400"
              key={`${navItem?.title}_${index}`}
              href={navItem?.url}
            >
              {navItem?.title}
            </Link>
          ))}
        </div>
        <div className="flex-1 lg:flex md:flex flex-row items-center justify-end gap-4 hidden">
          <DarkModeToggle />
          <Link href="https://whatsapp.com/channel/0029VaKFZ0e0bIdpmuDApI2t" className="">
            <Button
              className="bg-breakerDay-600 px-4 py-2 rounded-[10px] outline-none border-none text-white"
              title="Join WhatsApp channel"
            />
          </Link>
        </div>
        {drawerOpen ? (
          <div className="flex-1 lg:hidden md:hidden flex flex-row items-center justify-end gap-4">
            <div
              onClick={() => {
                setDrawerOpen(false);
              }}
            >
              <IconClose className="size-8 cursor-pointer" />
            </div>
          </div>
        ) : (
          <div className="flex-1 lg:hidden md:hidden flex flex-row items-center justify-end gap-4">
            <div
              onClick={() => {
                setDrawerOpen(true);
              }}
            >
              <Icon3Bars className="size-8 cursor-pointer" />
            </div>
          </div>
        )}
      </div>
      {drawerOpen && (
        <div className="h-[93vh] relative mt-4 w-screen flex gap-10 flex-col pt-[3rem] px-[5vw] dark:bg-black backdrop-blur-3xl bg-white dark:bg-black-100">
          <div className="flex flex-col w-full">
            {navLinks?.map((navItem, index) => (
              <Link
                className="font-medium capitalize text-base dark:text-gray-400 w-full flex items-center justify-between py-4"
                key={`${navItem?.title}_${index}`}
                href={navItem?.url}
                onClick={() => {
                  setDrawerOpen(false);
                }}
              >
                {navItem?.title}
                <MdArrowForwardIos />
              </Link>
            ))}
          </div>
          <div className="w-full">
            <DarkModeToggle />
          </div>
          <div className="w-full">
          <Link href="https://whatsapp.com/channel/0029VaKFZ0e0bIdpmuDApI2t" className="w-full">
            <Button
              className="bg-breakerDay-600 px-4 py-4 w-full rounded-[10px] outline-none border-none text-white"
              title="Join WhatsApp channel"
            />
            </Link>
          </div>
          <div className="absolute bottom-8 right-0 flex-row gap-2 w-full items-center justify-center flex dark:text-gray-400">
            <span className="">All rights reserved</span>|
            <span className="">
              Crafted by{" "}
              <span className="font-semibold text-breakerDay-600">
                {" "}
                IEEE CSKS
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
