const puppeteer = require('puppeteer');
var urls =[];
(async () => {
    const browser = await puppeteer.connect({'browserWSEndpoint': 'ws://127.0.0.1:61937/devtools/browser/687fa22f-7d4c-429c-a7df-0e73681de0cf',slowMo:100});

    const page = (await browser.pages())[2];
    await page.setViewport({ width: 1920, height: 1080 });
    console.log((await browser.pages()).length);
    console.log((await page.title()));
    console.log((await page.url()));

    // await page.waitForSelector('video');
    const videos = await page.$$("div[id^='theSonChapter']");
    const name = await page.$eval('.vjs-tech', el => el.src);

    // console.log(typeof name,name)

    // console.log(typeof videos)


    for (var i=0;i<videos.length;i++) {

        await page.waitForSelector('video');
        // const src = await page.$eval('.vjs-tech', el => el.src); // const + await 大爷的
        // urls.push(await page.$eval('.vjs-tech', el => el.src));

        (await page.$$("div[id^='theSonChapter']"))[i].click();
        // await page.waitForSelector('video');

        await page.waitForNavigation();
        // await page.waitForSelector('.vjs-tech');
        urls.push(await page.$eval('.vjs-tech', el => el.src));
        await page.waitForSelector('video');

        console.log('done')
    }
    console.log(urls);


})();