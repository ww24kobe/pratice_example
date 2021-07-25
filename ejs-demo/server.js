var express = require('express');
var path = require('path');
let ejs = require('ejs')

var app = express();

//2.配置express框架的模板引擎为art-template
app.set('views', path.join(__dirname, 'views')); //设置视图所在的文件夹
app.engine('.html', ejs.__express) // 设置模板文件的后缀为.html
app.set('view engine', 'html')

app.get('/', function (req, res) {
    res.render('index.html', {
        name: "科比",
        text: "<button>click Me</button>"
    });
})

app.listen(3000, function () {
    console.log('请访问 3000');
})