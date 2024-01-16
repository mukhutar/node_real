
const http = require('http')
const fs= require('fs')
const { error } = require('console')

http
.createServer(function (req, res) {
    // const text = readFileSync('./content/bigfile.txt' , 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/bigfile.txt' , 'utf8')
    fileStream.on('open' , () => {
        fileStream.pipe()

    })

    fileStream.on('error', (error)=>{
        res.end(error)
    })

})

.listen(8080)