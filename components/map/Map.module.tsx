"use client";
import { useContext, useEffect, useState } from "react";
import { addDataLayer } from "../map/addDataLayer";
import { initializeMap } from "../map/initializeMap";
import mapboxgl from "mapbox-gl";

import { DataContext } from "@/context/CardDataProvider";
import { iconsMapper } from "@/utils/constants";
import useSocket from "@/hooks/useSocketIO";

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  const { dataContent, setSelectedIndex, updateData } = useContext(DataContext);

  const { data } = useSocket();
  mapboxgl.accessToken =
    "pk.eyJ1IjoibW9oY2VuMjMxMSIsImEiOiJjbG5kd2xwZHgwODdyMmtxb2Y2YmEzYmRnIn0.F8KKASMPJGPufU1UB1zAGA";

  useEffect(() => {
    updateData(data);
  }, [data]);

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/streets-v11",
      // center: [-77.02, 38.887],
      zoom: 2.5,
      pitch: 45,
      // maxBounds: [
      //   [-77.875588, 38.50705], // Southwest coordinates
      //   [-76.15381, 39.548764], // Northeast coordinates
      // ],
    });

    initializeMap(mapboxgl, map, dataContent);

    console.log("content", dataContent)
    dataContent?.forEach((marker, i) => {
      // Create a DOM element for each marker.
      const el = document.createElement("div");
      const width = marker.properties.iconSize
        ? marker.properties.iconSize[0]
        : 30;
      const height = marker.properties.iconSize
        ? marker.properties.iconSize[1]
        : 30;
      el.className = "marker";

      el.style.backgroundImage = `url(${iconsMapper[marker.properties.name]})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = "100%";

      el.addEventListener("click", (e: any) => {
        var coordinates = marker.geometry.coordinates.slice();

        setSelectedIndex(i);
        map.zoomIn();

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML("hello world")
          .addTo(map);
      });

      // Add markers to the map.
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && dataContent && Map?._loaded) {
      addDataLayer(Map, dataContent);
    }
  }, [dataContent]);

  return (
    <div className="w-full">
      <div id="my-map" style={{ height: 600, width: 550 }} />
    </div>
  );
}
