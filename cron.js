// require packages
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://render.com/");
    
    const text = await page.$eval('*', el => el.innerText);
    console.log(text);
    
    await browser.close();
})();