function* myGenerator(url) {
    yield fetch(url);
}

var gen = myGenerator('http://api.w0824.com/api/getlunbo');

let pro = gen.next().value;
console.log(pro)