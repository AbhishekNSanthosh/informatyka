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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Informatyka, presented by the IEEE Computer Society Kerala Chapter Women in Computing, is a dynamic series of events on cutting-edge topics. Led by pioneering individuals in the industry, these sessions are designed to inspire and motivate everyone, from aspiring tech enthusiasts to seasoned professionals. Each event explores the latest advancements and trends in technology, offering valuable insights and fostering a vibrant sense of community and empowerment." />
        <meta name="keywords" content="IEEE CSKS, Computer Society, Kerala Section, Informatyka, Technology Events, Women in Computing" />
        <meta name="author" content="IEEE Computer Society Kerala Chapter Women in Computing" />
        
        <meta property="og:title" content="Informatyka 4.0" />
        <meta property="og:description" content="Informatyka, presented by the IEEE Computer Society Kerala Chapter Women in Computing, is a dynamic series of events on cutting-edge topics." />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://informatyka4-0.vercel.app/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Event",
              "name": "Informatyka 4.0",
              "description": "Informatyka, presented by the IEEE Computer Society Kerala Chapter Women in Computing, is a dynamic series of events on cutting-edge topics.",
              "startDate": "2024-07-20T19:00-05:00",
              "endDate": "2024-07-20T23:00-05:00",
              "eventAttendanceMode": "http://schema.org/OnlineEventAttendanceMode",
              "eventStatus": "http://schema.org/EventScheduled",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://informatyka4-0.vercel.app/"
              },
              "image": "/logo.svg",
              "organizer": {
                "@type": "Organization",
                "name": "IEEE Computer Society Kerala Chapter Women in Computing",
                "url": "https://informatyka4-0.vercel.app/"
              }
            }
          `}
        </script>
      </head>
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
