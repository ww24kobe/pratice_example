var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.say = function () {
        console.log('animal say');
    };
    Animal = __decorate([
        AddStatic,
        addInstance
    ], Animal);
    return Animal;
}());
function AddStatic(target) {
    target.hello = 'world';
}
function addInstance(target) {
    target.prototype.run = function () {
        console.log('ani-run');
    };
}
var ani = new Animal;
ani.say();
console.log(Animal.hello);
ani.run();
