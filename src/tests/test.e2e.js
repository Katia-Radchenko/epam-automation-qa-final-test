const { expect } = require("@wdio/globals");
const loginPage = require("../pageobjects/login.page");
const loginTestData = require("../data/loginTestData");

describe("My Login application", () => {
  loginTestData.emptyCredentials.forEach(
    ({ username, password, expectedErrorMessage }) => {
      it("should fail to login with empty credentials", async () => {
        await loginPage.open();
        await loginPage.login(username, password);
        await loginPage.clickLoginBtn();
        const actualErrorMessage = await loginPage.getErrorText();
        await expect(actualErrorMessage).toContain(expectedErrorMessage);
      });
    }
  );

  loginTestData.incorrectCredentials.forEach(
    ({ username, password, expectedErrorMessage }) => {
      it("should fail to login with incorrect credentials", async () => {
        await loginPage.open();
        await loginPage.login(username, password);
        await loginPage.clearPasswordField();
        await loginPage.clickLoginBtn();
        const actualErrorMessage = await loginPage.getErrorText();
        await expect(actualErrorMessage).toContain(expectedErrorMessage);
      });
    }
  );

  loginTestData.validCredentials.forEach(
    ({ username, password, expectedTitle }) => {
      it(`should login with valid credentials username: ${username} password: ${password}`, async () => {
        await loginPage.open();
        await loginPage.login(username, password);
        await loginPage.clickLoginBtn();
        const logoTitle = await loginPage.getTitleLogoText();
        await expect(logoTitle).toContain(expectedTitle);
      });
    }
  );

    loginTestData.lockedCredentials.forEach(
      ({ username, password, expectedErrorMessage }) => {
        it(`should fail to login with valid credentials and locked user username: ${username} password: ${password}`, async () => {
          await loginPage.open();
          await loginPage.login(username, password);
          await loginPage.clickLoginBtn();
          const actualErrorMessage = await loginPage.getErrorText();
          await expect(actualErrorMessage).toContain(expectedErrorMessage);
        });
      }
    );
});
