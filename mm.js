var fs = require('fs');
var request = require("request");
var src = "http://img1.mm131.me/pic/2229/7.jpg";
var writeStream = fs.createWriteStream('image007.png');

var options = { method: 'GET',
    url: 'http://img1.mm131.me/pic/2229/7.jpg',
    headers:
        { 'Postman-Token': '2004cd5b-0c68-444b-9704-ce07489060b5',
            'cache-control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.26 Safari/537.36 Core/1.63.6788.400 QQBrowser/10.3.2767.400',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            Referer: 'http://www.mm131.com/xinggan/2229_7.html',
            'Accept-Encoding': 'gzip, deflate',
            Connection: 'keep-alive',
            Accept: 'image/webp,image/apng,image/*,*/*;q=0.8' } };

var readStream = request(options);
readStream.pipe(writeStream);
readStream.on('end', function() {
    console.log('文件下载成功');
});
readStream.on('error', function() {
    console.log("错误信息:" + err)
});
writeStream.on("finish", function() {
    console.log("文件写入成功");
    writeStream.end();
});


