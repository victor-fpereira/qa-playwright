import { Page, Locator } from "@playwright/test";

require("dotenv").config();

export default class Home {
  readonly URL: string = process.env.HOME_PAGE!; // A exclamação no final indica que a variável não será nula
  readonly page: Page;
  readonly checkboxLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkboxLink = page.getByRole("link", { name: "Checkboxes" });
  }

  async clickOnCheckboxLink() {
    await this.checkboxLink.click();
  }

  async goToHomePage() {
    console.log(this.URL);
    // await this.page.goto(this.URL);

    // Using the base url from playwright.config.ts
    await this.page.goto("/");

    await this.page.waitForLoadState("domcontentloaded");
  }
}
