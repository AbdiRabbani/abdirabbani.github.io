
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) =>{
    let url,
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url.toLocaleLowerCase()

    //ROUTING
    if(url == "/login"){
        fs.readFile('index.html', (err, data) => {
            if(err){
                res.writeHead(404)
                res.write('Error: file not found')
            }else{
                res.write(data)
            }
        });
    }else if(url == "/singup"){
        dataResponse = {
            data : " Ini adalah halaman singup"
        }
    }else if(url == "/home"){
        dataResponse = {
            data : "Ini adalah halaman home"
        }
    }else{
        dataResponse = {
            data : "404 NotFound"
        }
    }
    res.end()
});

server.listen(5000)

