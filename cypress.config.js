const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  videoUploadOnPasses: false,
  videoCompression: false,
  watchForFileChanges: false,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200/'
  }
})
