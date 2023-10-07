"use client";
import Link from "next/link";
import React from "react";

import ArrowsDown from "@/public/ArrowsDown";

const Hero = () => {
  const handleArrowsClicked = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full relative">
      <video
        className="w-full"
        autoPlay
        muted
        loop
        id="myVideo"
        src={"/hero.mp4"}
      />
      <div className="absolute hero__gradient gap-[50px] py-[30px] top-0 left-0 h-full justify-center px-[100px] text-center text-[white] flex flex-col">
        <h1 className="title text-[40px] ">
          Precision Meets Vision, Keeping an Eye on Your World.{" "}
        </h1>

        <p className="text-[24px] title font-[400]">
          Guiding fleets with precision, every journey becomes a symphony of
          efficiency and success{" "}
        </p>

        <Link
          href={"/login"}
          className="w-[282px] h-[68px] title bg-main__color text-[24px] font-[400] flex items-center justify-center mx-auto border transition-all ease-in duration-300 hover:bg-[#00131B] hover:border-[white]"
        >
          Get The Product
        </Link>

        <div
          onClick={() => handleArrowsClicked()}
          className="mx-auto cursor-pointer"
        >
          <ArrowsDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
