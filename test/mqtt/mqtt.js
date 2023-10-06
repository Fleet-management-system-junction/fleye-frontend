const mqtt = require("mqtt");

const protocol = "mqtt";
const host = "13.38.173.241";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});


client.on("connect", () => {
  const topic = "uav1/gps/lon";
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    }
  });
  console.log("Connected");
});

client.on("packetreceive", (w) => {
  console.log("uav1 lat: ", parseFloat(w.payload));
});
