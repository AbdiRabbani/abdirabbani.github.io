const fs = require('fs');
const http = require('http');


const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data.toString())
        }
        res.end()
    });
}

const css = ((req, res) => {
    if(req.url == '/home.css'){
        res.writeHead(200, {
            'Content-Type' : 'text/css'
        })
        const fileContent = fs.readFileSync('./home.css', {
            encoding: 'utf8'
        })
        res.write(fileContent)
        res.end
    }
})

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    })

    css(req, res)

    const url = req.url

    switch (url) {
        case "/home":
            renderHTML('./home.html', res)
            break;

        case "/about":
            renderHTML('./about.html', res)
            break;

        case "/form" :
            renderHTML('./form.html', res)
            break;

        case "/profile" :
            renderHTML('./profil.html', res)
            break;
    }
})

server.listen(5456)