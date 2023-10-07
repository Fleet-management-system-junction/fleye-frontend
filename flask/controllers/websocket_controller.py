from globals import WAIT, socketio
import time

class WebsocketController():
    @staticmethod
    def emit(data, topic="data"):
        socketio.emit(topic, data)
        print("emitted", data)
        time.sleep(WAIT)

