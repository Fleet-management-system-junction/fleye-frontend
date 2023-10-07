import { DataContext } from "@/context/CardDataProvider";
import { youtubeMapper } from "@/utils/constants";
import React, { useContext } from "react";

interface geInteface {
  key: string;
  value: string;
}

const DataCard = ({
  type,
  geometry,

  properties,
}) => {
  const isAnySelected: boolean = type !== undefined;

  const { setSelectedIndex } = useContext(DataContext);

  return (
    <div className="py-[30px] bg-[white] px-[35px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] transition-all ease-in duration-300 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col gap-[30px] ">
      <div className="max-h-[230px] w-full">
        {isAnySelected ? (
          <video
            autoPlay
            loop
            controls
            muted
            src={youtubeMapper[properties.name] ?? ""}
          />
        ) : (
          <div className="h-[200px] w-full bg-[black]" />
        )}
      </div>

      <p className="text-[24px] title text-center font-normal text-black">
        {!isAnySelected ? "No vehical is selected" : properties.name}
      </p>

      {!isAnySelected && (
        <p className="text-[14px] text text-center font-normal">
          Select a vehical from the map to see the live streaming of the road
        </p>
      )}

      {isAnySelected && (
        <div className="w-full flex flex-col gap-[15px]">
          {[
            { key: "Car number:", value: "11223 112 12" },
            { key: "Localisation:", value: "36.7785611.562 - Hidra - Alger" },
            { key: "Velocity::", value: "45km/h" },
          ]?.map((data) => (
            <div className="w-full flex gap-[15px]" key={data.key}>
              <p className="text underline text-[18px]"> {data.key} </p>
              <p className="text text-[18px]"> {data.value} </p>
            </div>
          ))}
        </div>
      )}

      {isAnySelected && (
        <button
          onClick={() => setSelectedIndex(null)}
          className="mx-auto title text-[24px] font-normal text-center"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default DataCard;
