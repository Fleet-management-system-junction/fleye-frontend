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
    map.getSource("dcmusic.live").setData(data);
  }

}
