const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { todo } = require("node:test");

const filePath = path.join(__dirname, "./db/db.json");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    console.log(req.url, url);
    if (pathname === "/todos" && req.method === "GET") {
        const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
        res.writeHead(200, {
            "content-type": "application/json",
        });
        res.end(todos);
    } else if (pathname === "/todo/create" && req.method === "POST") {
        // get post data
        let todo = "";
        req.on("data", (chunk) => {
            todo = todo + chunk;
        });

        req.on("end", () => {
            todo = JSON.parse(todo);
            todo.createdAt = new Date().toISOString();

            const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
            parsedTodos = JSON.parse(todos);

            parsedTodos.push(todo);

            console.log(parsedTodos);
            fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), {
                encoding: "utf-8",
            });

            res.writeHead(200, {
                "content-type": "application/json",
            });
            res.end(JSON.stringify(todo));
        });
    } else if (pathname === "/todo" && req.method === "GET") {
        const title = url.searchParams.get("title");

        const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
        parsedTodos = JSON.parse(todos);

        const todo = parsedTodos.find((todo) => todo.title === title);

        res.writeHead(200, {
            "content-type": "application/json",
        });

        if (todo) {
            res.end(JSON.stringify(todo));
        } else {
            res.end("data not found");
        }
    } else if (pathname === "/todo" && req.method === "PATCH") {
        const title = url.searchParams.get("title");

        let data = "";

        req.on("data", (chunk) => {
            data = data + chunk;
        })

        req.on("end", () => {
            const { body } = JSON.parse(data);
            const todos = fs.readFileSync(filePath, { encoding: "utf-8" });
            const parsedTodos = JSON.parse(todos);

            const index = parsedTodos.findIndex((todo) => todo.title === title);

            console.log(title, body, index);
            if (index >= 0) {
                parsedTodos[index].body = body;

                fs.writeFileSync(filePath, JSON.stringify(parsedTodos, null, 2), { encoding: "utf-8" });

                res.writeHead(200, {
                    "content-type": "application/json",
                })

                res.end(JSON.stringify(parsedTodos[index]));
            } else {
                res.end("index not found");
            }
        })
    } else {
        res.end("route not found");
    }
});

server.listen(5000, "localhost", () => {
    console.log("✅ PORT: 5000");

});
