import React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import HeaderView from "@widgets/Header";
import FooterView from "@widgets/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Informatyka 4.0",
  description:
    "Informatyka, presented by the IEEE Computer Society Kerala Chapter Women in Computing, is a dynamic series of events on cutting-edge topics. Led by pioneering individuals in the industry, these sessions are designed to inspire and motivate everyone, from aspiring tech enthusiasts to seasoned professionals. Each event explores the latest advancements and trends in technology, offering valuable insights and fostering a vibrant sense of community and empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <HeaderView />
        <div className="pt-[70px] lg:pt-[100px] md:[100px]">{children}</div>
        <FooterView />
        <Analytics />
      </body>
    </html>
  );
}
