import { createServer } from 'http'

const server = createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200
        res.end()
    }
})

server.listen(3001, () => {
    console.log("Server listen on http://localhost:3001")
})