#!/usr/bin/env node

const program = require('commander');
const ora = require('ora');



const { getInfo } = require("./src/api/getData.js");
program
    .version('1.0.0')
    .option('-t, --test [test] ', '请求地址，默认: https://w0824.com/api/info.json')
    .parse(process.argv);

if (program.yourname) {
    console.log(`Hello wangwei, ${program.yourname}! ${program.glad ? 'I am very happy to see you!' : ''}`);
}

if (program.test) {
    
    program.test = program.test === true ? "https://w0824.com/api/info.json" : program.test
    let spinner = ora(`请求中: ${program.test}`).start();
    // console.log(`request for ${program.test}`);
    getInfo(program.test).then(res => {
        spinner.color = 'green';
        spinner.text = '请求完成';
        spinner.succeed();
        console.log(res.data)
    }).catch( err => {
        spinner.color = 'red';
        spinner.text = '请求失败';
        spinner.fail();
    })
}