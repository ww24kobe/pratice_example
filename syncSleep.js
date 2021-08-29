function sleep(wait){
    var startTime = ( + new Date())
    while(true){
        var curTime = (+new Date())
        if (curTime - startTime > wait) {
            break;
        }
    }
}

console.log(1)
console.log(2)
sleep(3000)
console.log(3)