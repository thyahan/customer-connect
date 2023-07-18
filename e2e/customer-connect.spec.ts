import { expect, test } from "@playwright/test";

const mockUser = {
  username: "yutthana",
  password: "yutthana12345678",
};

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("Login", () => {
  test("Should login success", async ({ page }) => {
    const usernameInput = page.getByPlaceholder("username");
    const passwordInput = page.getByPlaceholder("password");
    const loginButton = page.getByText("Login");

    await usernameInput.fill(mockUser.username);
    await passwordInput.fill(mockUser.password);

    await loginButton.click();

    const logoutButton = page.getByText("Logout");
    const greetingMessage = page.getByText(`hello ${mockUser.username}`);

    await expect(logoutButton).toBeAttached();
    await expect(greetingMessage).toBeAttached();
  });
});
