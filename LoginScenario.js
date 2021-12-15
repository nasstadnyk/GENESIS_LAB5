//Перевірка логіну
const playwright = require('playwright');
(async () => {
     {
      const browser = await playwright.chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto('https://www.demoblaze.com/index.html');
      await page.click('id=login2');
      await page.fill('#loginusername', 'username');
      await page.fill('#loginpassword', 'password');
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await page.keyboard.press("Enter");
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
      await delay(5000);
      const text = await page.innerText('id=nameofuser');
      await browser.close();
      if(text == "Welcome username")
      {
          console.log("Success")
      }
      else
      {
          console.log("Test Failed")
      }
    }
  })();