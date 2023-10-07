"use client";

import React from "react";

import { LineChart } from "@mui/x-charts/LineChart";
import AlertBar from "@/components/utils/AlertBar";

const GeneralStats = ({
  status,
  remainingTime,
  optimizationRate,
}: {
  status: string;
  remainingTime: string;
  optimizationRate: string;
}) => {
  return (
    <section id="analytics" className="w-full flex flex-col gap-[10px]">
      <h1 className="text-[50px] title uppercase text-main__color font-bold">
        Data Analysing
      </h1>
      <p className="text text-main__color">
        Export my data to CSV ??{" "}
        <span className="underline font-bold cursor-pointer">here</span>
      </p>
      <div className="w-full flex gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className=" min-w-[230px] bg-[white] w-fit px-[40px] py-[30px] flex border border-main__color flex-col gap-[10px]">
            <p className="text text-[18px] font-[500] underline">Vehicles</p>

            <div className="w-full flex justify-between">
              <p className="text text-[16px] font-normal">Active:</p>
              <div className="bg-main__color text-[white] rounded-[5px] px-[5px] py-[3px] text">
                20
              </div>
            </div>
            <div className="w-full flex justify-between">
              <p className="text text-[16px] font-normal">Unactive:</p>
              <div className="bg-light__shade text-[white] rounded-[5px] px-[5px] py-[3px] text">
                15
              </div>
            </div>
            <div className="w-full flex justify-between">
              <p className="text text-[16px] font-normal">Ideal:</p>
              <div className="bg-submain__color text-[white] rounded-[5px] px-[5px] py-[3px] text">
                17
              </div>
            </div>
          </div>

          <div className=" min-w-[230px] bg-[white] w-fit px-[40px] py-[30px] flex items-center border border-main__color flex-col gap-[10px]">
            <p className="text text-[18px] font-[500] underline">
              Vehicle state
            </p>
            <p
              className={`title text-[50px] ${
                status === "ALERT" ? "text-[#CA0404]" : "text-[black]"
              } font-normal`}
            >
              {status}
            </p>
            {status === "ALERT" && (
              <p className="text-[18px] text text-center">Check Alerts</p>
            )}
          </div>
        </div>
        <div className="w-full max-h-[344px]  border bg-[white] border-main__color">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], label:"Time unit" }]}
            
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: "Average velocity (km/h)"
              },
            ]}
            className="w-full h-full"
          />
        </div>
      </div>
      <AlertBar
        content="Detected anomaly on RN number 5, check vehicles on road"
        bgColor="#FFD260"
      />
      <AlertBar
        content=" Drone number 5 is running out of energy, check it on map. Expected time to fall: 10 mins"
        bgColor="#CA0404"
      />
    </section>
  );
};

export default GeneralStats;
