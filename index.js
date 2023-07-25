// require packages
const express = require("express");
const puppeteer = require("puppeteer");

// Express
const app = express();
const port = process.env.PORT || 3001;

// Root path GET endpoint
app.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://render.com/");
    const image = await page.screenshot();
    
    await browser.close();
    
    res.set("Content-Type", "image/png");
    res.send(image);
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));