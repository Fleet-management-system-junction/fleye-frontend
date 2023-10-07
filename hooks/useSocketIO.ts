import { useState, useEffect } from "react";
import {io} from "socket.io-client"

function useSocket() {
    const [socket, setSocket] = useState<any>(null);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const my_socket = io("http://localhost:5000/", {
        transports: ["websocket"],
      });
  
      setSocket(my_socket);
  
      my_socket.on("connect", () => {
        console.log("Connected to the socket server");
      });
  
      return () => {
        my_socket.disconnect();
        console.log("Disconnected from the socket server");
      };
    }, []);
  
    useEffect(() => {
      if (socket) {
        socket.on("data", (data: any) => {
          console.log("Received data:", data);
          setData(data);
        });
      }
  
      return () => {
        if (socket) {
          socket.off("data");
        }
      };
    }, [socket]);
  
    const emitData = (data: any) => {
      console.log("Emitting data:", data);
      socket?.emit("data", data);
    };
  
    return { socket, data, emitData };
  }
  
  export default useSocket;