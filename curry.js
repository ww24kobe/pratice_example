function curry(fn, args) {
    var length = fn.length; // 原实参个数
    args = args || []; // 闭包变量
    return function (...rest) {
        var _args = [...args, ...rest];
        return _args.length < length ?
            curry.call(this, fn, _args) : // 调用科里化本身
            fn.apply(this, _args); // 参数满足，执行
    }
}
var fn = curry(function (a, b, c) {
    console.log( a + b + c );
});
fn('a', 'b', 'c'); // abc
fn('a', 'b', 'c'); // abc
fn('a', 'b')('c'); // abc
fn('a')('b')('c'); // abc
fn(1)(2)(3); // 6
fn(1,2)(3); // 6