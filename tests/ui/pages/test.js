async function sample() {
  console.log("3 - First line of the sample function");
}

async function callSample() {
  console.log("2 - calling sample function");
  await sample();
  console.log("4 - sample function has completed");
}

(async () => {
  console.log("1 - Before calling callSample");
  await callSample();
  console.log("5 - After calling callSample");
})().catch((error) => {
  console.error("An error occurred:", error);
});

// Exemplo de uso do Playwright com controle manual do browser

import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com");
  await browser.close();
})();
