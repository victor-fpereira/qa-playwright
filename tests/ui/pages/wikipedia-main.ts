import { Page, Locator } from "@playwright/test";

export default class WikipediaMainPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly viewHistoryLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.getByRole("link", { name: "Log in" });
    this.usernameInput = this.page.getByRole("textbox", { name: "Username" });
    this.passwordInput = this.page.getByRole("textbox", { name: "Password" });
    this.loginButton = this.page.getByRole("button", { name: "Log in" });
    this.viewHistoryLink = this.page.getByRole("link", {
      name: "View history",
    });
  }

  async navigateToMainPage(page) {
    await page.goto("/wiki/Main_Page");
  }

  async login(username: string, password: string) {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickChangeColor(color: string) {
    await this.page.getByRole("radio", { name: `${color}` }).check();
  }

  async clickChangeTextSize(textSize: string) {
    await this.page
      .getByRole("radio", { name: `${textSize}` })
      .first()
      .check();
  }

  async clickViewHistory() {
    await this.viewHistoryLink.click();
  }
}
