const EventEmitter = require('events')

const emmiter = new EventEmitter

emmiter.on("request event", (name , date) => {
    console.log('event received' , `done by:${name} on ${date} `);
})

emmiter.emit('request event', 'MK' ,'16.1.2024')

