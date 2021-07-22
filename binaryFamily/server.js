const http = require('http')
const fs = require('fs');
const fsextra = require('fs-extra')
const express = require('express')
const path = require('path');
const cors = require('cors');
var multiparty = require('multiparty');

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
    res.send('index')
})

app.post('/chunk', (req, res) => {
    var form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        let [filename, index] = fields.filename[0].split('==');
        let [fileChunk] = files.avatar

            !fs.existsSync('images/') && fs.mkdirSync('images/')

        let chunkDir = 'images/' + filename;
        !fs.existsSync(chunkDir) && fs.mkdirSync(chunkDir)

        let chunkFilePath = chunkDir + '/' + index + '-' + filename;
        // 读写流
        let readStream = fs.createReadStream(fileChunk.path),
            writeStream = fs.createWriteStream(chunkFilePath);
        readStream.pipe(writeStream)
        readStream.on('end', () => {
            // console.log('read end')
        })

    });
    res.json({message:"chunk uploaded"})
})

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

app.post('/merge', async (req, res) => {
    await sleep(1000); // 延迟 读取目录
    let {
        filename,
        ext,
        oldName
    } = req.body;
    let dir = path.resolve(__dirname, "images", filename);
    const files = fs.readdirSync(dir);
    console.log(files);
    const fullNamePath = "./images/" + oldName;
    files.sort((a, b) => a.localeCompare(b)).forEach(chunk => {
        // fs.stat(`${dir}/${chunk}`, (err, stats) => {
        //     console.log(stats.isFile())
        // })
        fs.appendFileSync(fullNamePath, fs.readFileSync(`${dir}/${chunk}`));
        fs.unlinkSync(`${dir}/${chunk}`)
    })
    fs.rmdirSync(dir);

    res.json({
        message: "upload success"
    })
})

app.listen(4000, () => {
    console.log('server is running at port 4000');
})