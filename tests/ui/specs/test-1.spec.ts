import { test, expect } from "@playwright/test";

require("dotenv").config();

async function goToUrl(page) {
  await page.goto("/");
}

async function clickCheckboxesLink(page) {
  await page.getByRole("link", { name: "Checkboxes" }).click();
}

async function checkFirstCheckbox(page) {
  await page.getByRole("checkbox").first().check();
}

async function uncheckSecondCheckbox(page) {
  await page.getByRole("checkbox").nth(1).uncheck();
}

async function checkSecondCheckbox(page) {
  await page.getByRole("checkbox").nth(1).check();
}

test("test", async ({ page }) => {
  await goToUrl(page);
  await clickCheckboxesLink(page);
  await checkFirstCheckbox(page);
  await uncheckSecondCheckbox(page);
  await checkSecondCheckbox(page);
});
