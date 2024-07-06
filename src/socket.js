import { io } from "socket.io-client";

const socket = io("https://tttgame-backend.onrender.com/"); // Ensure this URL matches your deployed backend server

export default socket;
