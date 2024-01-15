const {readFile , writeFile} = require('fs')

console.log('start');

readFile( './content/first.txt', 'utf8' ,(err , result) => {
    if(err){
        console.log('err');
        return;
    }
    const first = result

    readFile( './content/second.txt', 'utf8' , (err, result) => {
        if(err){
             console.log('there was an error');
             return;
        }
        const second = result

        writeFile( './content/result-async.txt', 
            `here is the result for async approach ${first} , ${second}` ,
            (err, result) => {
                if(err){
                     console.log('there was an error');
                      return
                    } 

                    console.log('done with this task');
            }

        )
    })
} )

console.log('starting next task');
