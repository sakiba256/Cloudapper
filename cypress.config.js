const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 're9fmb',
  defaultCommandTimeout: 100000000,
  viewportWidth: 1800,
  viewportHeight: 1200,
  requestTimeout: 50000,
  pageLoadTimeout: 600000,
  execTimeout: 600000,
  experimentalStudio: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
