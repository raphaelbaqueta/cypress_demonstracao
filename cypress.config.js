const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r5ow15',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/report',
      reportFilename: "[name]_[status]_[datetime]--report",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "ddmmyyyy_HHMMss" }
  },
});

