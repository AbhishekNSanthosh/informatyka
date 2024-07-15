import React from "react";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import HeaderView from "@widgets/Header";
import FooterView from "@widgets/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Informatyka",
  description: "",
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
