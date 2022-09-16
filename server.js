const http = require("http")
const port = 3000;

const rotas = { 
    '/' : 'Curso de Node',
    '/livros': 'Pagina de Livros',
    '/autores': 'Listagem de Autores',
    '/editora': 'Pagina da editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () =>{
    console.log(`to ouvindo carai, em http://localhost:${port}`);
})