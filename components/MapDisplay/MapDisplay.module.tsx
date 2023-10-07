"use client";

import React, { useContext } from "react";
import Map from "@/components/map/Map.module";
import Link from "next/link";
import DataCard from "./DataCard.module";
import { DataContext } from "@/context/CardDataProvider";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import GuidelinesWrapper from "../utils/GuidelinesWrapper";

const MapDisplay = () => {
  const { dataContent, selectedIndex } = useContext(DataContext);
  const isAnySelected: boolean = selectedIndex !== null;

  return (
    <section className="w-full flex gap-[30px] justify-between">
      <div className="flex flex-col gap-[34px] ">
        <div className="flex flex-col">
          <h1 className="title text-[50px] font-normal text-main__color">
            Inteructive map
          </h1>

          <p className="text text-[14px] text-main__color">
            Did not manage to use it?{" "}
            <span className="underline cursor-pointer font-bold">
              <Popup
                trigger={
                  <button className="text spacing-[10px] tracking-wide">
                    See Guideline
                  </button>
                }
              >
               <GuidelinesWrapper /> 
                </Popup>{" "}
            </span>
          </p>
        </div>

        {selectedIndex !== null ? (
          <DataCard {...dataContent[selectedIndex]} />
        ) : (
          <DataCard  />
        )}
      </div>
      <div className="h-[668px] relative basis-[50%]">
        <Map />
        {isAnySelected && (
          <Link
            href={"/dashboard#analytics"}
            className="text-[18px] text mt-[10px] font-[500] underline text-main__color"
          >
            See more details about the selected vehicle
          </Link>
        )}
      </div>
    </section>
  );
};

export default MapDisplay;
