const EventEmitter = require('node:events');
const MessageEmitter = new EventEmitter();

MessageEmitter.on('newMessage', () => {
    console.log("You have received a new message!");
});

MessageEmitter.on('newMessage', (message) => {
    console.log("You have received a new message!");
    console.log(message);
});

MessageEmitter.on('newMessage', (message, year) => {
    console.log(message + " on " + year);
});

MessageEmitter.emit('newMessage', 'Dinner is ready bro!!', 2020);