var arr = [19, 2, 3, 4];

var result = arr.reduce(function (accumulator, currentValue, index) {
    console.log(accumulator, currentValue, index)
    return accumulator + currentValue;
},100);

console.log(result) // 110 