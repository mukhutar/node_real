const {createReadStream} = require('fs')

const stream = createReadStream('./content/bigfile.txt' ,{highWaterMark:9000,encoding: 'utf8'})

stream.on('data', (err) => {
    console.log(err);
} )