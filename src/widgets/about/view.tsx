import Logo from "@components/Logo";
import TitleBar from "@components/TitleBar";
import Image from "next/image";
import React from "react";

export default function AboutView() {
  return (
    <div className="px-[5vw] py-[2rem] pb-[4rem] dark:bg-black-100">
      <div className="flex flex-col gap-14">
        <div className="">
          <TitleBar title="About" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <span className="text-xl text-breakerDay-700 capitalize font-semibold">About Informatyka 4.0</span>
          </div>
          <div className="">
            <span className="text-justify dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              eum hic odio facere? Repudiandae veritatis nihil sed voluptatem,
              illo repellendus praesentium, et at, blanditiis nobis
              necessitatibus nemo laborum distinctio quae? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Provident, temporibus
              magnam! Corporis maxime pariatur qui laborum consequatur <br />
              temporibus aliquam. Rerum officia adipisci ipsa molestiae ullam
              minus unde itaque quod voluptas?Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Amet itaque non debitis asperiores
              eos, temporibus delectus, recusandae explicabo soluta culpa
              dolorum libero error deleniti ipsam consequuntur veritatis?
              Debitis, dolorem. Fugiat.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-center">
            <span className="text-xl text-breakerDay-700 capitalize font-semibold">
              About IEEE CS Kerala Chapter
            </span>
          </div>
          <div className="flex gap-5">
            <div className="flex-1 px-8 py-1">
              <Image
                src={"/csksimg.png"}
                height={700}
                width={700}
                alt="csks agm"
                className="w-full h-fit rounded-[8px]"
              />
            </div>
            <div className="flex-1">
              <span className="text-justify dark:text-gray-400">
                The IEEE Computer Society (CS) Kerala Chapter, operating within
                the IEEE Kerala Section, enjoys widespread recognition for its
                extensive membership and dynamic range of activities.
                Established in 1985, it stands as the largest Computer Society
                Chapter worldwide, encompassing 48 Student Branch Chapters and a
                membership count of 2043 in 2023. The Kerala Chapter actively
                fosters collaboration with its Student Branch Chapters,
                spearheading flagship events like the All Kerala Computer
                Society Student Convention (AKCSSC) since 2015. The chapter also
                hosted the All India Computer Society Student and Young
                Professional Congress 2023 (AICSSYC -23). <br /> <br /> The Chapter owes much
                of its success to the commitment and leadership of its dedicated
                volunteers, who have garnered esteemed positions within the IEEE
                community. Notably, the Chapter has been honoured with
                prestigious accolades, including theIEEE Computer Society
                (Global) Outstanding Chapter Award in 2018, theEarly Career
                Professionals Engagement in Outstanding Chapter Award Program in
                2022, andIEEE Kerala Section's Outstanding Large Society Chapter
                Award in 2023, the and . With its passion, dedication, and
                innovative ideas, the Chapter has become a respected presence in
                the IEEE community, inspiring positive change.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
