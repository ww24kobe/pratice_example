let ejs = require('ejs');
// console.log(ejs.__express);

let data = {
    name: 'curry',
    text: '<button>click Me</button>'
}
let html = ejs.render('<h1>hello <%- name.toUpperCase() + text %></h1>', data)
console.log(html);