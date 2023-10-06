from flask_socketio import  emit


topics = lambda X: {0: f"uav{X}/gps/lat", 1: f"uav{X}/gps/lon", 2: f"uav{X}/bat/id", 3: f"uav{X}/bat/vl", 4: f"uav{X}/bat/pt"}


