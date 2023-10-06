import paho.mqtt.client as mqtt
from handlers import topics



# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))

    # Subscribing in on_connect() means that if we lose the connection and
    # reconnect then subscriptions will be renewed.
    # client.subscribe("$SYS/#")
    for i in range(1, 3):
        for pos, topic in topics(i).items():
            client.subscribe(topic, 2)
        print(f"connected to {topic}")


# # The callback for when a PUBLISH message is received from the server.
# def on_message(client, userdata, msg):
#     print(msg.topic+" "+str(msg.payload.decode()))

client = mqtt.Client()
client.connect("13.38.173.241", 1883, 60)
client.on_connect = on_connect

if __name__ == "__main__":
    client.on_message = on_message

# Blocking call that processes network traffic, dispatches callbacks and
# handles reconnecting.
# Other loop*() functions are available that give a threaded interface and a
# manual interface.
client.loop_start()
