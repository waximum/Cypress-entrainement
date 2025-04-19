const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalStudio: true,
    baseUrl: "https://rahulshettyacademy.com/blog/index.php/2020/11/13/locators-in-selenium/"
  },
});
