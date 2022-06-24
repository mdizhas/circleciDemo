exports.config = {
  specs: [
    './specs/*/**.js'
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [{
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        'args': ["--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream"]
    },
      acceptInsecureCerts: true
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
      ui: 'bdd',
      timeout: 250000
  },
}
