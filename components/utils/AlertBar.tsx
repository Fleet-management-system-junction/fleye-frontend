import React from "react";

const AlertBar = ({
  bgColor,
  content,
}: {
  bgColor: string;
  content: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="px-[40px] py-[30px] w-full text-[white]  text-[18px] text font-[500]"
    >
      <span className="underline text">Alert:</span>
      {` ${content} ` }
    </div>
  );
};

export default AlertBar;
