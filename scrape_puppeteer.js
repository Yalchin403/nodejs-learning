puppeteer = require('puppeteer')
puppeteer.launch({headless: false}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://yalchin.info');
    await page.screenshot({path:'welcome_home.png'});
    await browser.close();
})