"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
// Create a WebSocket Server
var wss = new ws_1.WebSocketServer({ port: 8080 });
console.log("WebSocket server started on ws://localhost:8080");
// Handle client connection
wss.on("connection", function (ws) {
    console.log("New client connected");
    // Handle messages from the client
    ws.on("message", function (message) {
        console.log("Received: ".concat(message));
        // Echo the message back to the client
        ws.send("Server: ".concat(message));
    });
    // Handle client disconnect
    ws.on("close", function () {
        console.log("Client disconnected");
    });
});
