import React from "react";

const GuidelinesWrapper = () => {
  return (
    <div className="p-[10px] min-w-[300px] flex bg-[white] flex-col gap-[10px]">
      <p className="text text-[18px] font-[500]">
        Our interactive map enables effortless tracking of your fleet. It
        represents the real world in a{" "}
        <span className="underline font-bold">3D simulation</span> . You can
        track the vehicles of your{" "}
        <span className="underline font-bold">own</span> company by{" "}
        <span className="underline font-bold">clicking on the icon</span>{" "}
        corresponding to it. The map then provides a{" "}
        <span className="underline font-bold"> live streaming </span>from the
        spotlighted vehicle to let the owner know real-time road conditions and
        critical insights into the vehicle&apos;s status and performance.
      </p>

      <button
        className="mx-auto rounded-[10px] py-[10px] px-[20px] border bg-[white] title text-[24px] font-[400]"
      >
        Understood
      </button>
    </div>
  );
};

export default GuidelinesWrapper;
