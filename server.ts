import { WebSocketServer, WebSocket } from "ws";

// Create a WebSocket Server
const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket server started on ws://localhost:8080");

// Handle client connection
wss.on("connection", (ws: WebSocket) => {
    console.log("New client connected");

    // Handle messages from the client
    ws.on("message", (message: string) => {
        console.log(`Received: ${message}`);

        // Broadcast to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Broadcast: ${message}`);
            }
        });

        // Echo the message back to the client
        ws.send(`Server: ${message}`);
    });

    // Handle client disconnect
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
