const PubSub = require('pubsub-js');

var mySubscriber1 = function (msg, data) {
    console.log('mySubscriber1',
        msg, '--', data);
};
var mySubscriber2 = function (msg, data) {
    console.log('mySubscriber2',
        msg, '--', data);
};


let token1 = PubSub.subscribe('MY TOPIC', mySubscriber1);
let token2 = PubSub.subscribe('MY TOPIC', mySubscriber2);

PubSub.unsubscribe(token1);

PubSub.publish('MY TOPIC', 'hello world!1');
PubSub.publish('MY TOPIC', 'hello world!2');
PubSub.publish('MY TOPIC', 'hello world!3');
PubSub.publish('OTHER TOPIC', 'hello world!3');
