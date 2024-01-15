const path = require('path');

console.log(path.sep);

const pathFile = path.join('./content' , 'sub_folder' , 'text.txt')

const base = path.normalize(pathFile)

console.log(base);

const absolute  = path.resolve(__filename, './content' , 'sub_folder' , 'text.txt') 
console.log(absolute);