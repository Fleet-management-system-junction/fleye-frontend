import { whySectionData } from "@/utils/funcIndex";
import React from "react";

const Why = () => {
  return (
    <section className="w-full bg-white__shade mt-[-30px] py-[10px] px-[50px] flex flex-col text-center items-center ">
      <h1 className="title text-main__color text-[50px] ">Why FLEYE ?</h1>

      <div className="mt-[30px] w-full flex gap-[40px]">
        {whySectionData.map((reason) => (
          <div
            key={reason.title}
            className="h-[312px] flex flex-1 flex-col items-center gap-[30px]"
          >
            {reason.icon}

            <p className="title text-center text-[24px] text-main__color">{reason.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
