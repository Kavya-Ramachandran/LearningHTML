const websocket = new WebSocket("wss://ws.postman-echo.com/raw");
document.getElementById("sendbtn").addEventListener(("click"), () => {
    websocket.send(document.getElementById("senddata").value);
})
websocket.addEventListener('open', (e) => {
    console.log("added to server");
});

websocket.addEventListener('message', (e) => {
    console.log("Message from server ------------",e.data);

});
websocket.addEventListener('error', (e) => {
    console.log("Websocket has some error");
});
websocket.addEventListener('close', (e) => {
    console.log("Close the server");
});

