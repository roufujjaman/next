const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");


const dbPath = path.join(__dirname, "./db/db.json");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    console.log(pathname);

    if (pathname === "/todos" && req.method === "GET") {
        const data = fs.readFileSync(dbPath, {encoding: "utf-8"});
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(data);
    } else if (pathname === "/todos/create" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })

        req.on("end", () => {
            const todo = JSON.parse(data);
            console.log(typeof todo);
            todo.createdAt = new Date().toISOString();
            console.log(todo.createdAt);

            const todos = JSON.parse(fs.readFileSync(dbPath, {encoding: "utf-8"}));
            
            todos.push(todo);

            fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2), {encoding: "utf-8"});
        })

        res.end();
        
    } else if (pathname === "/todo" && req.method === "GET") {
        const title = url.searchParams.get("title");
        console.log(title);
        res.end("single todo")
    }
    else {
        res.end("route not found");
    }
})


server.listen(5000, "localhost", () =>
    console.log("✅ SERVER LISTENING AT PORT 5000")
)