var ws = new WebSocket("ws://localhost:8080");
// Connection opened
ws.onopen = function () {
    console.log("Connected to WebSocket server");
    // Send multiple messages
    var counter = 0;
    setInterval(function () {
        ws.send("Message ".concat(counter++));
    }, 1000);
};
// Listen for messages from the server
ws.onmessage = function (event) {
    console.log("Message from server: ".concat(event.data));
};
// Handle connection close
ws.onclose = function () {
    console.log("Disconnected from WebSocket server");
};
// Handle errors
ws.onerror = function (error) {
    console.error("WebSocket error:", error);
};
