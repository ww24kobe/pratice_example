var MyQueue = function () {
    this.queue = [];
};

MyQueue.prototype.push = function (x) {
    this.queue.push(x);
};

MyQueue.prototype.pop = function () {
    return this.queue.shift();
};

MyQueue.prototype.top = function () {
    return this.queue[0];
};

MyQueue.prototype.empty = function () {
    return this.queue.length === 0;
};

var obj = new MyQueue()
obj.push(1)
obj.push(2)

// var param_1 = obj.pop()
// var param_2 = obj.pop()
// var bool = obj.empty()
var value = obj.top();
console.log(value)
console.log(obj)
