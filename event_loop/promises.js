const { readFile , writeFile} = require('fs').promises;

const start = async() => {

    try{
         const first = await readFile('./content/first.txt' , 'utf8');
         const second = await readFile('./content/second.txt' , 'utf8');

         await writeFile('./content/result_first.txt',` NODE IS AWESOME : ${first} , ${second}`, {flag:'a'})

         console.log(first);
         console.log(second);
    }
    catch(error){
        console.log(error);
    }    
}
start()

//// and example of the async and await methods


const {readFile} = require('fs').promises
const http = require('http')

const server = http.createServer((req , res) => {
    const words = async() => {

        try{
            const text = await readFile('./content/bigfile.txt' , {encoding:'utf-8'} )
                if(req.url === '/'){
                        res.end(text)
                    }
        }
        catch(err){
            console.log(err);
        }
    }
    words()  
})

server.listen(1200)

