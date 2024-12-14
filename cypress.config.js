const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      
    },
    experimentalStudio: true,
    baseUrl:"https://rahulshettyacademy.com/blog/index.php/2020/11/13/locators-in-selenium/"
    
  },
  
});
