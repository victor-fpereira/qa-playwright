import { Page, Locator } from "@playwright/test";

export default class Checkboxes {
  readonly firstCheckbox: Locator;
  readonly secondChecbox: Locator;
  readonly checkboxLink: Locator;

  constructor(page: Page) {
    this.firstCheckbox = page.getByRole("checkbox").first();
    this.secondChecbox = page.getByRole("checkbox").nth(1);
    this.checkboxLink = page.getByRole("link", { name: "Checkboxes" });
  }

  async clickFirstCheckBox() {
    if (!(await this.firstCheckbox.isChecked())) {
      await this.firstCheckbox.check();
    }
  }

  async clickSecondCheckBox() {
    if (!(await this.secondChecbox.isChecked())) {
      await this.secondChecbox.check();
    }
  }
}
