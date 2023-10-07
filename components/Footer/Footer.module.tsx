import React from "react";

import Logo from "@/public/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer__gradient pt-[20px] bg-white__shade px-[140px] py-[40px] flex flex-col gap-[24px] ">
      <div className="flex gap-[10px] items-center mx-auto ">
        <Logo />

        <h1 className=" text-main__color text font-bold text-[36px] mt-[8px] uppercase  ">
          fleye
        </h1>
      </div>

      <p className="text-[24px] font-[400] text-center text-white__shade">
        made with &#10084;&#65039; and ☕️, by
      </p>

      <p className="text-[40px] font-normal title text-main__color text-center">
        ANONYMOUS
      </p>

      <div className="h-[0.5px] w-full bg-[white]" />

      <div className="w-full flex justify-between items-center">
        <p className="text-[18px] text font-normal text-[white]">
          {`Copyrights ${new Date().getFullYear()} - all rights reserved`}
        </p>

        <Link href={"#"} className="text-[white] text text-[18px]">
          Terms And Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
