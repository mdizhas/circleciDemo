username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
browserstackLocal = process.env.BROWSERSTACK_LOCAL
browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

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