import { BeforeAll, AfterAll, Before, After, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

class CustomWorld {
  browser!: Browser;
  page!: Page;
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(45000); // 45 seconds

let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ 
    headless: process.env.CI ? true : false,
    args: ['--disable-blink-features=AutomationControlled']
  });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function (this: CustomWorld) {
  this.page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
});

After(async function (this: CustomWorld) {
  await this.page.close();
});

export default { CustomWorld };