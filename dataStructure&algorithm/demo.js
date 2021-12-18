function test1(n) {
    console.log('O(1)');
}

function test2(n){
    while((n = n / 4) >= 1){
        console.log('log2N');
    }
}

function test3(n) {
    for (let i = 0; i < n; i++) {
        console.log('O(n)');
    }
}

function test4(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log('n平方');
        }
    }
}

test1(20); // O(1)   without for while
test2(20); // O(logN)   (while /2 /3)
test3(20); // O(n)  for while
test2(20); // O(nlogN)  for (while / 2)
test4(20); // O(n2) for for 
test4(20); // O(n3) for for  for