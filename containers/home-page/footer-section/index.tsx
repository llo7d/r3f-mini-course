import React, { FC } from "react";
import Brand from "../../../components/Brand";
import Link from "next/link";
import { FooterNavs } from "./constants";

interface FooterSectionProps { }

const FooterSection: FC<FooterSectionProps> = ({ }) => {
  return (
    <footer className="w-full flex justify-center border-t border-[#FFFFFF1A] py-8 ">
      <div className="flex flex-col text-center gap-y-1 ">
        <p className="text-[15.13px] leading-6 text-[#B2BECD] ">
          Need help?
          <Link href={"https://x.com/llo7d"} className="text-[#635AFF]">
            {" "}
            Send us a message
          </Link>
        </p>
        {/* <p className="text-[15.13px] leading-6 text-[#B2BECD] ">
          Need help? Email{" "}
          <strong className="font-bold text-white">hello@justcode.lol</strong>
        </p> */}
        <div className="flex gap-y-3">
          {FooterNavs.map((nav, index) => (
            <Link
              href={`/${nav.toLowerCase().replace(/ /g, "-")}`}
              key={index}
              className="text-[#B2BECD] text-[14.75px] leading-6 font-normal flex gap-x-1 hover:text-[#b2becd8c]"
            >
              {nav}
              {index !== FooterNavs.length - 1 && (
                <span className="text-[#B2BECD] text-[14.75px] leading-6 font-normal">
                  |
                </span>
              )}
            </Link>
          ))}
        </div>
        <p className="text-[#B2BECD] text-[11.06px] leading-4 text-center py-4">
          Copyright © 2024 justcode
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
