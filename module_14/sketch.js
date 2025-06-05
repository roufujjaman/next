const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("wooo");

    let data = "";

    req.on("data", (chunk) =>
        data = data + chunk
    );
    req.on("end", () =>
        console.log(data)
    );
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(5000, () => {
    console.log("The server listening at port: 5000");

})