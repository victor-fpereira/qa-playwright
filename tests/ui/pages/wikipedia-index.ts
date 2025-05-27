import { Page, Locator } from "@playwright/test";

require("dotenv").config();

export default class WikipediaIndexPage {
  readonly page: Page;
  readonly articlesNumber: Locator;
  readonly englishLangLink: Locator;
  readonly url: string = process.env.HOME_PAGE_WIKIPEDIA!;

  constructor(page: Page) {
    this.page = page;

    // Why declare this locator here and not directly in the method?
    // - Declaring the locator here allows:
    // 1 - More organization, so all the locators are on the top of the file
    // 2 - Just write once. If any other method needs it for an assertion or any other situation,
    // it can use the same already declared locator
    // 3 - Use the locator in another class for any reason

    this.articlesNumber = this.page.locator("#js-link-box-en > small");
    this.englishLangLink = this.page.locator("#js-link-box-en > strong");
  }

  async navigateToIndexPage() {
    await this.page.goto(this.url);
  }

  async getArticlesNumber(): Promise<number> {
    const content = await this.articlesNumber.innerText();
    // Extract digits from the content, remove commas/spaces, and parse as number
    const numberString = content.replace(/[^\d]/g, "");
    return Number(numberString);
  }

  async clickOnLanguageLink(language: string) {
    // Switch to the specified language using switch case
    switch (language) {
      case "English":
        await this.englishLangLink.click();
        break;
      case "Spanish":
        // TODO
        break;
      case "French":
        // TODO
        break;
      case "German":
        // TODO
        break;
      default:
        throw new Error(`Language ${language} is not supported`);
    }
  }
}
