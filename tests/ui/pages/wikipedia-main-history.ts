import { Page, Locator } from "@playwright/test";

export default class WikipediaMainHistoryPage {
  readonly page: Page;
  readonly lastReviewerUserName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastReviewerUserName = this.page
      .locator("span.history-user")
      .first()
      .locator("bdi");
  }

  async getLastReviewerUser() {
    return await this.lastReviewerUserName.innerText();
  }

  async clickLastReviewerUser() {
    return await this.lastReviewerUserName.click();
  }
}
