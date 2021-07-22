const fs = require('fs-extra')

fs.readdir('../')
    .then(res=>{
        console.log(res);
    })