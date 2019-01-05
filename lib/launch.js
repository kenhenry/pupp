const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await (puppeteer.launch({
        // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
        //executablePath: 'C:\\Users\\12283\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe',
        //设置超时时间
        timeout: 15000,
        //如果是访问https页面 此属性会忽略https错误
        // ignoreHTTPSErrors: true,
        // 打开开发者工具, 当此值为true时, headless总为false
        devtools: false,
        // 关闭headless模式, 不会打开浏览器
        headless: false,
        // args:['--start-fullscreen']
        args:['--start-maximized', '--window-size=1920,1080']

    }));
    const browserWSEndpoint = browser.wsEndpoint();
    // console.log(browserWSEndpoint)
    fs.writeFile('lib/wsEndpoint.txt', browserWSEndpoint,function(err){
        if(err) console.log('wsEndpoint写入失败');
        else console.log('wsEndpoint写入成功');
    });
    // const page = await browser.newPage();
    // await page.goto('https://www.jianshu.com/u/40909ea33e50');
    // await page.setViewport({ width: 1920, height: 1080 });
    // await console.log('test');

})();