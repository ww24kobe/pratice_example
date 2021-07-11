let ajax = require('../ajax.js');


describe('测试 ajax 请求库-测试套件', () => {
    it('request url   测试用例', async () => {
        let res =  await ajax({
            url: 'https://api.w0824.com/api/getlunbo',
            method: "get"
        })
        expect(res.status).toBe(0);
        expect(res.message.length).toBe(3);
    });
    
})
