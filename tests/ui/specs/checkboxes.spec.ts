import { test, expect } from "@playwright/test";
import Checkboxes from "../pages/checkboxes";
import Home from "../pages/home";

test.describe("Verify checkboxes enable and disable behavior", () => {
  test("Click on checkbox", async ({ page }) => {
    const home = new Home(page);
    const checkbox = new Checkboxes(page);
    await home.goToHomePage();
    await home.clickOnCheckboxLink();
    await checkbox.clickFirstCheckBox();
    await checkbox.clickSecondCheckBox();
    expect(
      await checkbox.firstCheckbox.isChecked(),
      "First checkbox is not visible"
    );
    expect(
      await checkbox.secondChecbox.isChecked(),
      "Second checkbox is not visible"
    );
  });

  test("Click on checkbox with steps", async ({ page }) => {
    const home = new Home(page);
    const checkbox = new Checkboxes(page);

    await test.step("Act", async () => {
      await home.goToHomePage();
      await home.clickOnCheckboxLink();
      await checkbox.clickFirstCheckBox();
      await checkbox.clickSecondCheckBox();
    });

    await test.step("Assert", async () => {
      expect(
        await checkbox.firstCheckbox.isChecked(),
        "First checkbox is not visible"
      );
      expect(
        await checkbox.secondChecbox.isChecked(),
        "Second checkbox is not visible"
      );
    });
  });
});
