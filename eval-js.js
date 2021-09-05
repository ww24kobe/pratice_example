var abc = '1'

function foo() {
    console.log(1)
}
var str = `
;(function(){
    function foo() {
        console.log(2)
    };
    var abc = 2;
})()
`;
eval(str);

foo(); // 1
console.log( abc ); // 1