import { iconsMapper } from "@/utils/constants";

export function initializeMap(mapboxgl: any, map: any, data: any) {
  map.on("style.load", () => {
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
      (layer: any) => layer.type === "symbol" && layer.layout["text-field"]
    ).id;

    map.addLayer(
      {
        id: "add-3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"],
          ],
          "fill-extrusion-opacity": 0.6,
        },
      },
      labelLayerId
    );
  });

  for (const marker of data?.features) {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    const width = marker.properties.iconSize ? marker.properties.iconSize[0] : 30;
    const height = marker.properties.iconSize ? marker.properties.iconSize[1] : 30;
    el.className = "marker";
    // console.log(`url(${iconsMapper,})`);
    el.style.backgroundImage = `url(${iconsMapper[marker.geometry.type]})`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = "100%";

    el.addEventListener("click", (e:any) => {
      var coordinates = marker.geometry.coordinates.slice();

      console.log(marker);
      
      var venu = marker.properties.venue;
      var tsunami;
      if (marker.properties.tsunami === 1) {
        tsunami = "yes";
      } else {
        tsunami = "no";
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML("Place: " + venu + "<br>Was there a tsunami?: " + tsunami)
        .addTo(map);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
  }

  map.on("click", "data", function (e: any) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["data"],
    });
    var clusterId = features[0].properties.cluster_id;
    map
      .getSource("dcmusic.live")
      .getClusterExpansionZoom(clusterId, function (err: any, zoom: any) {
        if (err) return;
        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom,
        });
      });
  });

  map.on("click", "unclustered-point", function (e: any) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var mag = e.features[0].properties.mag;
    var tsunami;
    if (e.features[0].properties.tsunami === 1) {
      tsunami = "yes";
    } else {
      tsunami = "no";
    }
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML("magnitude: " + mag + "<br>Was there a tsunami?: " + tsunami)
      .addTo(map);
  });
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    })
  );

  map.on("mouseenter", "data", function () {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "data", function () {
    map.getCanvas().style.cursor = "";
  });
}
