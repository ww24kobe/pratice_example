let mod = require("./counterCommonjs.js")
let mod2 = require("./counterCommonjs.js")
let mod3 = require("./counterCommonjs.js")


console.log(mod.counter.value); // 3
mod.incCounter();
console.log(mod.counter.value); // 4

