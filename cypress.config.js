const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'toc91u',
  e2e: {
    //specPattern: 'cypress\integration',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
