// console.time('time')
// let sum = 0;

// for (let i = 1; i <= 9000000; i++) {
//     sum += i;
// }
// console.log('sum:' + sum)
// console.timeEnd('time')

// console.time('time')
// let sum = 0, n = 9000000;
// sum = (1+n) * n / 2
// // console.log(i,sum,n)
// console.log('sum:' + sum)
// console.timeEnd('time')

// function sum(min,max){
//     let sum = 0;
//     for(let i=min; i<=max; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log( sum(1,100) )

// function sum(min, max) {
//     console.time('time')
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }
//      console.timeEnd('time')
//     return sum;
   
// }

// console.log(sum(20, 10000000))


function sum(min, max) {
    console.time('time')
    let sum = (min + max) * (max-min + 1);
    sum = sum / 2;
     console.timeEnd('time')
    return sum;
}

console.log(sum(20, 10000000))