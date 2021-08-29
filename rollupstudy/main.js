// Rollup默认开启tree - shaking
import {bar} from "./msg"
const add = require('./add.js')
console.log( add(1,2) )
console.log(bar())
if(Math.random() > 0.5){

    console.log('> 0.5')
    require('./jian.js')
}

let arr = [1,2,3,4,5];
let size = 2;
console.log(size)





