
var express = require('express');
var path = require('path');
var moment = require('moment');

var app = express();
//1.引入安装的art-tempalte模板引擎的模块
var artTemplate = require('art-template');
var expressArtTemplate = require('express-art-template');

//2.配置express框架的模板引擎为art-template
app.set('views',path.join(__dirname,'views')); //设置视图所在的文件夹
app.engine('html',expressArtTemplate)// 设置模板文件的后缀为.html
app.set('view engine','html')

//定义一个过滤器dateFormat
artTemplate.defaults.imports.dateFormat = function(time,format = 'YYYY-MM-DD HH:mm:ss'){
  return moment.unix(time).format(format);
}

app.get('/login',function(req,res){
  res.render('login.html',{name:"科比"});
})

app.get('/', function (req, res) {
    res.render('index.html', {
        name: "科比",
        text: "<button>click Me</button>"
    });
})


app.get('/register', function (req, res) {
    res.render('register.html', {
        name: "科比"
    });
})

app.listen(3000,function(){
  console.log('请访问 3000');
})