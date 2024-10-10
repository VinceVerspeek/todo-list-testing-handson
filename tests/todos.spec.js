const { test, expect } = require("@playwright/test");

test.describe("Todos List API tests", () => {
  test("fetches and displays todos from real API", async ({ page }) => {
    // Navigate to the application page where TodosList component is rendered
    await page.goto("http://localhost:3000"); // Assuming the app runs locally

    // Wait for the todos to load and appear in the DOM
    await page.waitForSelector("ul li");

    // Check if the first todo from the API is displayed
    const firstTodo = await page.locator("ul li:first-child").textContent();
    expect(firstTodo).toContain("quis ut nam facilis et officia qui");
  });
});
