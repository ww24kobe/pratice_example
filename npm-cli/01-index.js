const chalk = require('chalk');
const ora = require('ora');

console.log(chalk.green('Hello world!'));
console.log(chalk.black.bgBlue('INFO'));
console.log(chalk.black.bgGreen('INFO'));


const spinner = ora('加载中...').start();

setTimeout(() => {
    spinner.color = 'blue';
    spinner.text = '马上回来了...';
    spinner.hideCursor = false;
    // spinner.indent = 5
}, 1000);

setTimeout(() => {
    spinner.succeed('ok')
    spinner.fail('fail')
    spinner.warn('warn')
    spinner.info(`info`)
}, 2000);

setTimeout(() => {
    spinner.stop()
}, 3000);

// console.log(spinner)