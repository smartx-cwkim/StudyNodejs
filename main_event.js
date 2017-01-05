var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('Connection Successful');

	// data_received event occur
	eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
	console.log('data_received');
});

eventEmitter.emit('connection');

console.log('pragram has ended');