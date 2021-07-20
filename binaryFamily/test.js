const fs = require('fs');

let dir = "./images/";


const files = fs.readdirSync(dir);
console.log(files);

let filename = "curry.png";

files.sort( (a,b) => a.localeCompare(b) ).forEach(file=>{
    fs.stat(`${dir}/${file}`, (err, stats) => {
        console.log(stats.isFile())
    })
    // fs.appendFileSync(filename, fs.readFileSync(`${dir}${file}`) );
})