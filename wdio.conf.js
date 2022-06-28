const config = require('./libs/config')

// var webdriver = require('@browserstack/wdio-browserstack-service');
const webdriver = require('selenium-webdriver');
username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
browserstackLocal = process.env.BROWSERSTACK_LOCAL
browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

exports.config = {
  // Specify Test Files
  specs: [
    './specs/*/**.js'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  // Capabilities
  maxInstances: 5,
  capabilities: [{
    maxInstances: 5,
    acceptInsecureCerts: true,
    'bstack:options': {
      "os": "Windows",
      "osVersion": "11",
      "local": "false",
      "seleniumVersion": "3.14.0",
    },
    "browserName": "Chrome",
  },
  ],

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
    ['@browserstack/wdio-browserstack-service', {
      browserstackLocal: false
    }]
  ],
};

var capabilities = {
  "os": "Windows",
  "browser": "chrome",
  "browserstack.local": browserstackLocal,
  "browserstack.localIdentifier": browserstackLocalIdentifier,
  "browserstack.user": username,
  "browserstack.key": accessKey
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();