var webdriver = require('@browserstack/wdio-browserstack-service');
username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
browserstackLocal = process.env.BROWSERSTACK_LOCAL
browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
      ['@browserstack/wdio-browserstack-service', {
          browserstackLocal: false
      }]
  ],
};

var capabilities = {
 "os" : "Windows",
 "browser" : "chrome",
 "browserstack.local" : browserstackLocal,
 "browserstack.localIdentifier" : browserstackLocalIdentifier,
 "browserstack.user" : username,
 "browserstack.key" : accessKey
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();