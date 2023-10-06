from flask import request, request, request, Flask
from flask_socketio import socketio, SocketIO, emit
from flask_cors import CORS
from handlers import topics
from mqtt import client
import time
import random


queue = []

uav_data = {}


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

def on_message(client, userdata, msg):

    print(msg.topic+" "+str(msg.payload.decode()))
    for i in range(1, 3):
        if (msg.topic == topics(i)[0]):
            print("queue" , queue)
            if (queue.__len__() == 0):
                queue.append((msg.payload.decode(), None))
            elif  queue[-1][0] == None:
                queue[-1] = (msg.payload.decode(), queue[-1][1]) 
                socketio.emit("data", {"long": queue[-1][0], "lat": queue[-1][1]})
                time.sleep(30)
                queue.pop(-1)
        if (msg.topic == topics(i)[1]):
            if (queue.__len__() == 0):
                queue.append((None, msg.payload.decode()))
            elif  queue[-1][1] == None:
                queue[-1] = (queue[-1][0], msg.payload.decode()) 
                socketio.emit("data", {"long": queue[-1][0], "lat": queue[-1][1]})
                time.sleep(30)
                print("emitted", queue[-1])
                queue.pop(-1)

        if (msg.topic == topics(i)[2]):
            uav_data[i] = msg.payload.decode()
            print(msg.payload.decode())
            

    
   
    # socketio.emit('data', msg.payload.decode())
    # emit(msg.payload.decode())

client.on_message = on_message

@app.route('/')
def hello_world():
    return {"message": "Server up"}

@app.route('/uav/<int:id>', methods=["GET"])
def uav_info(id):
    return {"data": uav_data[id]}


@socketio.on("connect")
def handle_connect():
    print("client connected");


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


@socketio.on('data')
def handle_message(message):
    print('Received message:', message)
    client.loop_read()
    # Broadcast the received message to all connected clients

    # for i in range(10):
    #     time.sleep(2)
    # emit('data', {"long": random.randint(10, 200), "lat": random.randint(10, 200) }, broadcast=True)
    



if __name__ == '__main__':
    socketio.run(app, debug=True)