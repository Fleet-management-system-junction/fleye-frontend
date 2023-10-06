"use client";
// components/Map.jsx

import React, { useState } from "react";

import Map from "react-map-gl";
import { HexagonLayer } from "deck.gl/typed";
import DeckGL from "deck.gl/typed";
import "mapbox-gl/dist/mapbox-gl.css";

// import map config
import {
  lightingEffect,
  material,
  INITIAL_VIEW_STATE,
  colorRange,
} from "@/components/Map/config";

const LocationAggregatorMap = () => {

  
  return (
    <div>
      <DeckGL
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <Map
          controller={true}
          mapboxAccessToken={"pk.eyJ1IjoibW9oY2VuMjMxMSIsImEiOiJjbG5kd2xwZHgwODdyMmtxb2Y2YmEzYmRnIn0.F8KKASMPJGPufU1UB1zAGA"}
          mapStyle="mapbox://styles/petherem/cl2hdvc6r003114n2jgmmdr24"
        ></Map>
      </DeckGL>
    </div>
  );
};

export default LocationAggregatorMap;