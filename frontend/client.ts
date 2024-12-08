const ws = new WebSocket("ws://localhost:8080");

// Connection opened
ws.onopen = () => {
    console.log("Connected to WebSocket server");

    // Send multiple messages
    let counter = 0;
    setInterval(() => {
        ws.send(`Message ${counter++}`);
    }, 1000);
};

// Listen for messages from the server
ws.onmessage = (event: MessageEvent) => {
    console.log(`Message from server: ${event.data}`);
};

// Handle connection close
ws.onclose = () => {
    console.log("Disconnected from WebSocket server");
};

// Handle errors
ws.onerror = (error) => {
    console.error("WebSocket error:", error);
};
