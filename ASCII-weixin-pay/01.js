/*
特别注意以下重要规则：
签名生成的通用步骤如下：

第一步， 设所有发送或者接收到的数据为集合M， 将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（ 字典序）， 使用URL键值对的格式（ 即key1 = value1 & key2 = value2…） 拼接成字符串stringA。

特别注意以下重要规则：

◆ 参数名ASCII码从小到大排序（ 字典序）；◆ 如果参数的值为空不参与签名；◆ 参数名区分大小写；◆ 验证调用返回或微信主动通知签名时， 传送的sign参数不参与签名， 将生成的签名与该sign值作校验。◆ 微信接口可能增加字段， 验证签名时必须支持增加的扩展字段
第二步， 在stringA最后拼接上key得到stringSignTemp字符串， 并对stringSignTemp进行MD5运算， 再将得到的字符串所有字符转换为大写， 得到sign值signValue。 注意： 密钥的长度为32个字节。

*/
let md5 = require('md5');
let queryString = {
    
    'mch_id': 4,
    'attach':'pay', //商家数据包，原样返回，如果填写中文，请注意转换为utf-8
    'body':3,
    'nonce_str':5,
    'notify_url':6,
    'out_trade_no':7,
    'spbill_create_ip':8,
    'total_fee':9, 
    'trade_type':10,
    'scene_info':11,
    'appid': 1,
}

let keys = Object.keys(queryString);

let newKeys = keys.sort((a,b)=>{
    x1 = a.toLowerCase()
    x2 = b.toLowerCase();
    if (x1 > x2) {
        return 1;
    }
    if (x1 < x2) {
        return -1;
    }
    return 0;
})
console.log(newKeys)
let queryArr = [newKeys];
newKeys.map(k=>{
    queryArr.push(`${k}=${queryString[k]}`)
})
let stringA = queryArr.join('&');
let key = 'rw2343edsdhde'

let stringSignTemp = md5(stringA + `&key=${key}`)


console.log(stringSignTemp.toUpperCase()); //sign