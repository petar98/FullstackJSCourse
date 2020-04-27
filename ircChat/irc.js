var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'my_bot_pesho', {
    channels: ['#course-node']
});

client.on('error', function(message) {
    console.log('error: ', message);
});

client.on('connect', function() {
    console.log('connected to the irc server');
});

client.on('message', function(from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

setTimeout(function() {
    client.join('#course-node');
    client.say('#course-node', 'Hello jeezeers, I am Peshos bot');
    setTimeout(function() {
        client.say('#course-node', 'im bored in a house');
    }, 3000);
}, 5000);