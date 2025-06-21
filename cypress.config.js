const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true,
  screenshotOnRunFailure: true,

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  env: {
    URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  },

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  }
});