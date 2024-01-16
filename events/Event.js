const EventEmitter = require('events')

const CustomEmmiter = new EventEmitter()

CustomEmmiter.on('listen', (name, id) => {
    
        console.log('data received', `user : ${name} ,with id: ${id}`);
    
})

CustomEmmiter.emit('listen', 'mukhutar' , '21')