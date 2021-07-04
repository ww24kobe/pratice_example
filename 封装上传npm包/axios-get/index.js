const ora = require('ora');

const spinner = ora('请求中...').start();

setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'request...';
    spinner.succeed();
}, 1000);

