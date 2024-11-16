module.exports = {
  emptyCredentials: [
    {
      username: "",
      password: "",
      expectedErrorMessage: "Username is required",
    },
  ],

  incorrectCredentials: [
    {
      username: "Name",
      password: "wrongpass",
      expectedErrorMessage: "Password is required",
    },
    {
      username: "user",
      password: "pass-wrong",
      expectedErrorMessage: "Password is required",
    },
  ],

  validCredentials: [
    {
      username: "standard_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      username: "error_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      username: "visual_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      username: "problem_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
    {
      username: "performance_glitch_user",
      password: "secret_sauce",
      expectedTitle: "Swag Labs",
    },
  ],

  lockedCredentials: [
    {
      username: "locked_out_user",
      password: "secret_sauce",
      expectedErrorMessage: "Sorry, this user has been locked out",
    },
  ],
};
