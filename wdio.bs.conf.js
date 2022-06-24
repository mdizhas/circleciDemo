const config = require('./libs/config')

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
        'bstack:options' : {
            "os" : "Windows",
            "osVersion" : "11",
            "local" : "false",
            "seleniumVersion" : "3.14.0",
            },
        "browserName" : "Chrome",
    },
    // {
    //     maxInstances: 1,
    //     acceptInsecureCerts: true,
    //     'bstack:options' : {
    //         "os" : "OS X",
    //         "osVersion" : "Monterey",
    //         "local" : "false",
    //         "seleniumVersion" : "3.14.0",
    //         },
    //     "browserName" : "Safari",
    //     "browserVersion" : "15.0", 
    // },
    // {
    //     maxInstances: 1,
    //     acceptInsecureCerts: true,
    //     'bstack:options' : {
    //             "osVersion" : "14",
    //             "deviceName" : "iPhone 12",
    //             "realMobile" : "true",
    //             "local" : "false",
    //         },
    //     "browserName" : "Chrome",
    // },
    // {
    //     maxInstances: 1,
    //     acceptInsecureCerts: true,
    //     'bstack:options' : {
    //         "osVersion" : "10.0",
    //         "deviceName" : "Samsung Galaxy S20",
    //         "realMobile" : "true",
    //         "local" : "false",
    //         },
    //     "browserName" : "Chrome",
    // },
    // {
    //     maxInstances: 1,
    //     acceptInsecureCerts: true,
    //     'bstack:options' : {
    //         "osVersion" : "14",
    //         "deviceName" : "iPad Pro 12.9 2020",
    //         "realMobile" : "true",
    //         "local" : "false",
    //         },
    //     "browserName" : "Safari",
    // }
    ],
    // Test Configurations
    logLevel: 'info',
    bail: 0,
    baseUrl: config.base_url,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['browserstack'],
    user: process.env.BROSWERSTACK_USERNAME,
    key: process.env.BROSWERSTACK_KEY,
    browserstackLocal: true,
    framework: 'mocha',
    reporters: ['spec'],
    port: 443,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },
}
