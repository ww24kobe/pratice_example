
var MyStack = function () {
    this.stack = [];
};

MyStack.prototype.push = function (x) {
    this.stack.push(x);
};

MyStack.prototype.pop = function () {
    return this.stack.pop();
};

MyStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MyStack.prototype.empty = function () {
    return this.stack.length === 0;
};
 
var obj = new MyStack()
obj.push(1)
obj.push(2)

var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()

console.log(obj)
 
