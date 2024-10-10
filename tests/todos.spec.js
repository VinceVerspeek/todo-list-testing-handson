const { test, expect } = require("@playwright/test");

test.describe("Todos List API tests", () => {
  test("fetches and displays todos from real API", async ({ page }) => {
    // Navigate to the application page where TodosList component is rendered
    await page.goto("http://localhost:3000"); // Assuming the app runs locally

    // Wait for the todos to load and appear in the DOM
    await page.waitForSelector("ul li");

    // Check if the first todo from the API is displayed
    const firstTodo = await page.locator("ul li:first-child").textContent();
    expect(firstTodo).toContain("delectus aut autem");
  });
});

test.describe("Todos List mock server tests", () => {
  test("fetches and displays todos from mock server", async ({ page }) => {
    // Navigate to the application page where TodosList component is rendered
    await page.goto("http://localhost:3000"); // Assuming the app runs locally

    // Wait for the todos to load and appear in the DOM
    await page.waitForSelector("ul li");

    // Check if the first todo from the API is displayed
    const firstTodo = await page.locator("ul li:first-child").textContent();
    expect(firstTodo).toContain("mock todo 1");
  });

  test("should display todos from mock server", async ({ page }) => {
    await page.goto("http://localhost:3000");
    const todos = await page.locator(".todo");
    expect(await todos.count()).toBe(2); // Should now correctly count the todos
  });

  test("should display todos in the correct order with correct titles", async ({
    page,
  }) => {
    // Navigate to the app
    await page.goto("http://localhost:3000");

    // Locate the list of todo items
    const todoItems = await page.locator(".todo");

    // Assert that the correct number of todos are rendered
    expect(await todoItems.count()).toBe(2);

    // Verify that the todos contain the correct text and are in the correct order
    const firstTodo = await todoItems.nth(0).textContent();
    const secondTodo = await todoItems.nth(1).textContent();

    expect(firstTodo).toBe("mock todo 1");
    expect(secondTodo).toBe("mock todo 2");
  });
});
