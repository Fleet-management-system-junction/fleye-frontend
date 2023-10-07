"use client";

import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";

import {data} from "@/utils"

export type DataContextType = {
  dataContent: [];
  updateData: (newElement: any) => void;
  selectedIndex: number;
  setSelectedIndex: (newIndex: number) => void;
};

export const DataContext = createContext<DataContextType | null>(null);

const CardDataProvider = (props: PropsWithChildren) => {
  const [dataContent, setData] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState<any>(null);
  const updateData = (data: any) => setData(data);
  return (
    <DataContext.Provider value={{ dataContent, updateData, selectedIndex, setSelectedIndex }}>
      {" "}
      {props.children}{" "}
    </DataContext.Provider>
  );
};

export default CardDataProvider;
