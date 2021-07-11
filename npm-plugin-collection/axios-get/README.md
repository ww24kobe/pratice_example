# 测试axiox-get请求
使用get方法测试请求api接口，仅限与浏览器端。

## 全局安装 
```
npm i axios-get -g
```

## 使用
```
axios-get -h
Usage: axios-get [options]

Options:
  -V, --version              版本号
  -t, --test [test]          请求地址，默认: https://api.w0824.com/api/getlunbo
  -h, --help                 display help for command
```

##  使用如下：
```
axios-get --test https://api.w0824.com/api/getlunbo
request for https://api.w0824.com/api/getlunbo
{
  status: 0,
  message: [
    {
      url: 'http://www.baidu.com1111122222',
      img: 'http://test.w0824.com/banner9.png'
    },
    { url: 'http://jd.com', img: 'http://test.w0824.com/banner10.jpg' },
    {
      url: 'https://www.tmall.com/',
      img: 'http://test.w0824.com/banner11.jpg'
    }
  ]
}
```
