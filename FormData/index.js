var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('my_field', 'my value');
form.append('my_file', fs.createReadStream('./liu.jpg'));

let writeStream = fs.createWriteStream('./1.jpg')
fs.createReadStream('./liu.jpg').pipe(writeStream)