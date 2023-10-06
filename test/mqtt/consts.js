const endpoints = ({ uav_id }) => ({
  battery: {
    id: `uav${uav_id}/bat/id`,
    voltageLevel: `uav${uav_id}/bat/v1Level`,
    powerSupplyStatus: `uav${uav_id}/bat/pt`,
  },
  gps: {
    fixationStatus: 
  }
});
