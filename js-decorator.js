@speakName
class Hero {}

// 装饰器三个参数
function speakName(target, name, descriptor) {
    target.prototype.name = 'hero';
}

const hero = new Hero();
console.log(hero.name); // hero

// speak 作为装饰器修饰了 Hero 类， 
// 在类的原型上添加了 name 属性。 当实例化Hero 类时， 实例上拥有了name 属性
// 需要babel编译