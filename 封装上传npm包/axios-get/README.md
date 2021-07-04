# 测试axiox-get请求
使用get方法来测试请求地址，获取返回的数据


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
  -t, --test [test]          请求地址，默认: https://w0824.com/api/info.json
  -h, --help                 display help for command
```

##  使用如下：
```
axios-get --test https://w0824.com/api/users.json
request for https://w0824.com/api/users.json
[
  { id: 1, title: 'zhangsan', content: 'zhangsan@qq.com' },
  { id: 2, title: 'lisi', content: 'lisi@qq.com' },
  { id: 3, title: 'wangwu', content: 'wangwu@qq.com' },
  { id: 4, title: 'zhaoliu', content: 'zhaoliu@qq.com' },
  { id: 5, title: 'meili', content: 'meili@qq.com' },
  { id: 6, title: 'junge', content: 'junge@qq.com' },
```
