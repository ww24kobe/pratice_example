let JSZip = require('JSZip');
var zip = new JSZip();

zip.file("Hello.txt", "Hello World\n");

var img = zip.folder("images");
img.file("smile.gif", imgData, {
    base64: true
});

zip.generateAsync({
    type: "blob"
}).then(function (content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});

// https://www.npmjs.com/package/jszip