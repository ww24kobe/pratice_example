console.log('commonjs')
var counter = {
    value: 3
};

function incCounter() {
    counter.value++;
}
module.exports = {
    counter: counter,
    incCounter: incCounter,
};