const {readFileSync , writeFileSync} = require('fs')

console.log('star');

const first = readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/second.txt' , 'utf8')



writeFileSync( './content/result-sync.txt', 
              `here is the result: ${first} and ${second}`,
              {flag:'a'}
)

console.log('done with the task');
console.log('starting with the next one');
