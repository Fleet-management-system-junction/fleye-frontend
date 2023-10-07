import React from "react";
import Logo from "@/public/Logo";
import Link from "next/link";

const Navbar = () => {
  const isLoggedIn: Boolean = false;

  return (
    <nav className="w-full px-[140px] py-[15px] bg-main__color flex justify-between items-center">
      <div className="flex gap-[20px] items-center ">
        <Logo />

        <h1 className=" text-white__shade title font-bold text-[40px]  uppercase  ">
          fleye
        </h1>
      </div>

      <div className="flex gap-[45px] items-center">
        <Link
          href="/login"
          className="title text-[20px] transition-all ease-in duration-500 hover:underline  text-[white]"
        >
          {isLoggedIn ? "Company Name" : "Login"}
        </Link>
        <div className="text-white title px-[20px] py-[10px] text-[24px] font-[400] text-[white] border border-white rounded-[10px] cursor-pointer transition-all ease-in duration-300 hover:bg-submain__color hover:border-submain__color">
          Get the product
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
