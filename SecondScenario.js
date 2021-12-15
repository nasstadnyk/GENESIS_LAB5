//Перевірка покупки
const playwright = require('playwright');
(async () => {
     {
      const browser = await playwright.chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://www.demoblaze.com/prod.html?idp_=1');
      await page.click('a[onclick^="addToCart"]');
      console.log("Test failed.")
      await browser.close();
    }
  })();