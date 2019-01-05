const fs = require("fs");
const puppeteer = require('puppeteer');
// var wsEndpoint = fs.readFileSync('lib/wsEndpoint.txt','utf-8');

(async () => {
    // const browser = await puppeteer.connect({'browserWSEndpoint':wsEndpoint });
    const browser = await puppeteer.connect({'browserWSEndpoint':'ws://127.0.0.1:57937/devtools/browser/b6b8f464-7782-4cfc-88f1-2b8353c289d9' });
    // const page = await browser.newPage();
    // await page.goto("https://yunzhijia.com");

    const page = (await browser.pages())[1];
    await page.setViewport({ width: 1920, height: 1080 });
    console.log((await browser.pages()).length);
    console.log((await page.title()));
    console.log((await page.url()));

    console.log(await page.title());

    // await page.waitForSelector('span[title="订单管理"]');
    // await page.click('span[title="订单管理"]');

    // await page.waitForSelector('a[title="订单管理"]');
    // await page.click('a[title="订单管理"]');

    const frame = page.frames().find(frame => frame.name() === 'panel10006602');
    // const text = await frame.$eval('#triggerCodeId-labelEl', element => element.textContent);
    // console.log(text);

    await frame.type('#triggerCodeId-inputEl','99')

    await frame.waitForSelector('#triggerCodeId-inputEl');
    await frame.type('#triggerCodeId-inputEl','so123');
    browser.disconnect();
})();