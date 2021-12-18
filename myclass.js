class Count {
    constructor(email) {
        console.log('constructor');
        this.email = email
    }
    state = {
        age: 12,
        username: "bryant"
    }

    foo() {
        console.log(this.state.age);
        console.log('foo called');
    }

    bar = () => {
        console.log(this.state.username);
        console.log('bar called');
    }
    render() {
        console.log('render => DOM');
    }
}

let count = new Count('120@qq.com');
console.log(count);
count.foo()
count.bar()
count.render()