import { iconsMapper } from "@/utils/constants";
import mapboxgl from "mapbox-gl";

export function addDataLayer(map: any, data: any) {
  if (!map.getSource("dcmusic.live")) {
    map.addSource("dcmusic.live", {
      type: "geojson",
      data: data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
      clusterProperties: {
        sum: ["+", ["get", "event_count"]],
      },
    });
  } else {

    map._markers.forEach(element => {
      element.remove();
    });
    
    data.forEach((marker: any) => {
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

      // el.addEventListener("click", (e: any) => {
      //   var coordinates = marker.geometry.coordinates.slice();

      //   setSelectedIndex(i);
      //   map.zoomIn();

      //   new mapboxgl.Popup()
      //     .setLngLat(coordinates)
      //     .setHTML("hello world")
      //     .addTo(map);
      // });
      new mapboxgl.Marker(el).setLngLat(marker.geometry?.coordinates).addTo(map);
      // map.panTo(data[1].geometry?.coordinates);
    });


    console.log("ch: ", data);
    map.getSource("dcmusic.live").setData(data[0]);
    console.log(map);
  }
}
