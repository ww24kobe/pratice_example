# porket-ajax

这是一个基于promise封装的ajax请求库，仅用于浏览器端

## usasge

```javascript
ajax(options);

try {
    let res =  await ajax({
        url: 'url',
        method: "get"
    })
    console.log(res);
}  catch(e) {
    console.error(e);
}
```

## options
- url: request url
- method: request method
- data: request data, data is json format