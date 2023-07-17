import { io } from "socket.io-client";

const skt = ()=>{
    return io("http://localhost:5000");
}

export default skt;