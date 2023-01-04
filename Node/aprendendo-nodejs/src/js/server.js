const http = require('http');
// import http from "node:http";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    if(req.url === '/produto'){
      res.end(JSON.stringify({
        data: "Rota de produto",
      }))
    }

    if(req.url === '/user'){
      res.end(JSON.stringify({
        data: "Rota de usuário",
      }))
    }
}).listen(4001, () => console.log("servidor rodando na porta 4001"));