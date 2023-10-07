"use client";

import React from "react";

import { LineChart } from "@mui/x-charts/LineChart";
import AlertBar from "@/components/utils/AlertBar";

const StatsDisplay = ({
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
      <h1 className="text-[50px] uppercase text-main__color font-bold">Data Analysing</h1>
      <p className="text text-main__color">Export my data to CSV ?? <span className="underline font-bold cursor-pointer">here</span></p>
      <div className="w-full flex gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="max-h-[172px] min-w-[230px] bg-[white] w-fit px-[40px] py-[30px] flex items-center border border-main__color flex-col gap-[10px]">
            <p className="text text-[18px] font-[500] underline">
              Vehicle state
            </p>
            <p className="title text-[50px] font-normal">{status}</p>
          </div>

          <div className="max-h-[172px] min-w-[230px] bg-[white] w-fit px-[20px] py-[30px] flex items-center border border-main__color flex-col ">
            <div className="flex flex-col gap-[2px] title text-center text-[47px] font-normal">
              {remainingTime} min 
              <span className="text text-center text-[18px] mt-[-20px] font-[300]">
                to reach destination
              </span>
            </div>
            <p className="text text-[15px] font-[300] mt-[20px]">
              <span className="underline font-bold text-[15px]"> Optimization Rate: </span>
              {optimizationRate}
            </p>
          </div>
        </div>
        <div className="w-full max-h-[344px]  border bg-[white] border-main__color">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: "Time unit" }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: "Energy usage"

              },
              {
                data: [1, 1.5, 3, 5.5, 4.5, 2],
                label: "Velocity"

              },
            ]}
            className="w-full h-full"
          />
        </div>
      </div>
      <AlertBar content="There is an optimized way to reach destination (lower estimated usage of fuel), click to show on the map" bgColor="#176B87" />
    </section>
  );
};

export default StatsDisplay;
