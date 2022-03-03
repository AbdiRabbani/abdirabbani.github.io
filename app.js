const fs = require('fs');
const http = require('http');
const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            console.log(data.toString())
            res.write(data.toString())
        }
        res.end()
    });
}

const server = http.createServer((req, res) => {
    let url,
        dataResponse

    res.setHeader("Content-Type", "text/html")
    url = req.url.toLocaleLowerCase()
    console.log(url)
    //ROUTING
    if (url == "/login") {
        renderHTML('index.html', res)
    } else if (url == "/singup") {
        dataResponse = {
            data: " Ini adalah halaman singup"
        }
    } else if (url == "/home") {
        dataResponse = {
            data: "Ini adalah halaman home"
        }
    } else {
        dataResponse = {
            data: "404 NotFound"
        }
    }
    res.end()
});

server.listen(5000)