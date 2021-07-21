var fs = require("fs");
var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function () {
    console.log('You will see this message every second');
    fs.appendFileSync('1.txt', '追加的数据hello');
}, null, true, 'America/Los_Angeles');

job.start();