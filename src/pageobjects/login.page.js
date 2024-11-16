const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }
  get errorContainer() {
    return $(".error-message-container > h3");
  }
  get titleLogo() {
    return $(".app_logo");
  }

  async login(username, password) {
    console.log("Set username and password fields.");
    await this.inputUsername.setValue(username);
    console.log(`Username set to: ${username}`);
    await this.inputPassword.setValue(password);
    console.log(`Password set to ${password}`);
  }

  async clickLoginBtn() {
    console.log("Attempting to click the login button.");
    await this.btnSubmit.click();
    console.log("Login button clicked.");
  }
  async clearPasswordField() {
    console.log("Clear the password field.");
    await this.inputPassword.click();
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
    console.log("Password field cleared.");
  }

  async getTitleLogoText() {
    console.log("Fetching title logo text.");
    const titleText = await this.titleLogo.getText();
    console.log(`Title logo text: ${titleText}`);
    return titleText;
  }

  open() {
    return super.open("/");
  }
  async getErrorText() {
    console.log("Fetching error text from the error container.");
    const errorText = await this.errorContainer.getText();
    console.log(`Error text: ${errorText}`);
    return errorText;
  }
}

module.exports = new LoginPage();
