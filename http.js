const http = require ("http")

const PORT = 2000

const app = http.createServer((req  , res) =>{
    if (req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<html><body><p>This is my home page.</p></body</html>`);
        res.end();
    }else if(req.url === "/about"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<html><body><p>This is my about page.</p></body</html>`);
        res.end();
    }else if(req.url === "/contact"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<html><body><p>This is my contact page.</p></body</html>`);
        res.end();
    }else if(req.url === "/body"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<html><body><p>This is my body page.</p></body</html>`);
        res.end();
    }else res.end("invalid Request");
     
});

app.listen(PORT , () =>{
    console.log("port is up and listining");
    
});


