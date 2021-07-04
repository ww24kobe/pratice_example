function* myGenerator() {
    console.log('1')
    yield 1; // yield 提前返回
    console.log('2')
    yield 2;
    console.log('3')
    yield 3;
}

var gen = myGenerator();
// 通过next获取生成器下一次yield返回的值
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }

// var result;
// while(!(result = gen.next()).done){
//     console.log(result)
// }

for(var i of gen){
    console.log(i)
}
