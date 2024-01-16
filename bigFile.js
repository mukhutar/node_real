const {writeFile} = require('fs').promises

const BigFile = async() => {
   try{
    for(let i = 0; i < 10000; i++) {
        await writeFile('./content/bigfile' , `hello world${i} \n` , {flag:'a'})
    }
   }
   catch(error){
    console.log(error);
   }
}

BigFile()