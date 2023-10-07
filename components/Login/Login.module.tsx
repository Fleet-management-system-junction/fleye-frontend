"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    router.push("/dashboard", { scroll: false });
  };

  return (
    <div className="w-full relative">
      <video
        className="w-full"
        autoPlay
        muted
        loop
        id="myVideo"
        src={"/login.mp4"}
      />
      <div className="absolute w-full gap-[50px] py-[30px] top-0 left-0 h-full justify-center px-[100px] text-center text-[white] flex flex-col items-center">
        <div className="py-[30px]  mx-auto w-fit  px-[50px] flex flex-col gap-[30px] bg-[#dafffb80] ">
          <h1 className="title text-[50px] font-[400] leading-normal text-main__color">
            LOGIN
          </h1>

          <form
            onSubmit={(e) => handleLogin(e)}
            className="w-full flex flex-col gap-[15px]"
          >
            <input
              type="email"
              className="px-[30px] w-[360px] text-[black] py-[20px] bg-[white] outline outline-main__color text-[18px] text focus:placeholder:text-[transparent]"
              placeholder="company email"
            />

            <input
              type="password"
              className="px-[30px] w-[360px] text-[black] py-[20px] bg-[white] outline outline-main__color text-[18px] text focus:placeholder:text-[transparent]"
              placeholder="company password"
            />

            <button
              onClick={(e) => handleLogin(e)}
              className="text-center w-[360px] px-[30px] py-[20px] bg-main__color text-[white] text-[24px]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
