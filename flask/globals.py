from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

queue = []      # For managing lat, lon from mqtt
uav_data = {}   # For http requests on specific uav data

topics = lambda X: {0: f"uav{X}/gps/lat", 1: f"uav{X}/gps/lon", 2: f"uav{X}/bat/id", 3: f"uav{X}/bat/vl", 4: f"uav{X}/bat/pt"}

WAIT = 3


