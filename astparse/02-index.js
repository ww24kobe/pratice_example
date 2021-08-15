let acorn = require("acorn");

let source = 'var a=1; let c = 2;console.log( a + b );function sum(a,b){return a + b;}'
// console.log(acorn.parse(source, {ecmaVersion: 2020}));

console.log(acorn.parse(`import $ from 'jquery'`));