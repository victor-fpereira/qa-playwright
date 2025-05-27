import { test, Page, expect } from "@playwright/test";
import WikipediaIndexPage from "../../pages/wikipedia-index";

let wikipedia: WikipediaIndexPage;

// Manually create a shared context: If you specifically need to reuse a page across multiple tests (though this can lead to test interdependencies), follow the pattern described in the Playwright documentation linked in the error message:

// test.beforeAll(async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   wikipedia = new WikipediaIndexPage(page);
//   await wikipedia.navigateToIndexPage();
//   // Store these for later use in tests
// });

test.beforeEach(async ({ page }) => {
  wikipedia = new WikipediaIndexPage(page);
  await wikipedia.navigateToIndexPage();
});

test.describe("Assert the articles values", () => {
  test("Assert the number of english articles are higher than one milion", async () => {
    expect(
      (await wikipedia.getArticlesNumber()) > 100000000,
      "The number of articles are not superior to one milion"
    );
  });
});
