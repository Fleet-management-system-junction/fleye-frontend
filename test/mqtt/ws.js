const WebSocket = require(`ws`);
const wss = new WebSocket(`ws://13.38.173.241:3333/app/1/uav1/bat/id`);

wss.onmessage = function (e) {
  console.log("I'm client");
  let message = JSON.parse(e.data);
  console.log(message);
};
