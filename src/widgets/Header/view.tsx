import Button from "@components/Button";
import Logo from "@components/Logo";
import LogoBlack from "@components/LogoBlack";
import { navLinks } from "@utils/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
const DarkModeToggle = dynamic(() => import("@components/Toggle"), {
  ssr: false,
});

export default function HeaderView() {
  return (
    <div className="fixed w-screen flex flex-row px-[5vw] py-[2rem] backdrop-blur-md dark:bg-black-100  bg-opacity-0">
      <div className="flex-1">
        <div className="dark:hidden flex">
          <Logo />
        </div>
        <div className="dark:flex hidden">
          <LogoBlack />
        </div>
      </div>
      <div className="flex-2 flex flex-row items-center justify-center gap-[4vw]">
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
      <div className="flex-1 flex flex-row items-center justify-end gap-4">
        <DarkModeToggle />
        <Button
          className="bg-breakerDay-500 px-4 py-2 rounded-[10px] outline-none border-none text-white"
          title="Join whatsapp channel"
        />
      </div>
    </div>
  );
}
