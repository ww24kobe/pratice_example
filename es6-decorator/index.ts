@AddStatic
@addInstance
class Animal{
    say(){
        console.log('animal say')
    }
}


function AddStatic(target){
    target.hello = 'world'
}

function addInstance(target){
    target.prototype.run = function(){
        console.log('ani-run')
    }
}

let ani = new Animal;
ani.say()
console.log(Animal.hello)
ani.run()