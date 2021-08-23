function foo(a,b){
    console.log(a,b);
}

// 需求：延迟五秒执行函数，且不改变原函数结果，
function delay(callback,delay){
    return function(){
        let arg = [...arguments]
        setTimeout(() => {
            callback.apply(null, arg);
        }, delay);
    }
    
}

// 封装一个装饰器，改变函数的行为，让函数后延迟5秒后执行，返回一个函数的包装器
let newFoo = delay(foo,5000);
newFoo('123');