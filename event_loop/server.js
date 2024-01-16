const http = require('http');

const server  = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end(`<h1>Hey there your are on home page</h1>`);
    }
   
})

server.listen(5000 , ()=>{
    console.log('listening on port: 5000');
})