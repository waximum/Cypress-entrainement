const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: "https://rahulshettyacademy.com/blog/index.php/2020/11/13/locators-in-selenium/"
  }
});