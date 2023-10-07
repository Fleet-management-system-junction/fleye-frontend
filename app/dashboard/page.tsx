"use client";
import Footer from "@/components/Footer/Footer.module";
import MapDisplay from "@/components/MapDisplay/MapDisplay.module";
import Navbar from "@/components/Navbar/Navbar.module";
import GeneralStats from "@/components/StatsDisplay/GeneralStats.module";
import StatsDisplay from "@/components/StatsDisplay/StatsDisplay.module";
import { DataContext } from "@/context/CardDataProvider";

import "../globals.css";

import React, { useContext } from "react";

const Dashboard = () => {
  const { selectedIndex } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <main className="w-full flex bg-white__shade flex-col px-[140px] py-[40px]">
        <MapDisplay />

        {selectedIndex === null ? (
          <GeneralStats
            status="ALERT"
            optimizationRate="30%"
            remainingTime={"5"}
          />
        ) : (
          <StatsDisplay
            status="SAFE"
            optimizationRate="30%"
            remainingTime={"5"}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
