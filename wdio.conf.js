const path = require('path');
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    runner: 'local',
    specs: [
        './specs/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // './specs/mobile*.js',
        ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-dev-shm-usage', 
                '--disable-gpu',
                '--disable-extensions',
                '--disable-gpu-sandbox',
                '--window-size=2560,1440'
            ]
        }
    }],

    wdi5: {
        screenshotPath: path.join('wdio-ui5-service', 'test', 'report', 'screenshots'),
        logLevel: 'verbose', // error | verbose | silent
        platform: 'browser', // electron, browser, android, ios
        url: '',
        deviceType: 'web',
        skipInjectUI5OnStart: true, // default
        waitForUI5Timeout: 90000
    },
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    logLevels: {
        webdriver: 'warn'
    },
    bail: 0,
    baseUrl: 'https://sapui5.hana.ondemand.com/',
    waitforTimeout: 90000, // Default timeout for all waitFor* commands.
   
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    
    services: ['chromedriver','ui5', [TimelineService]],
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 90000
    },
    reporters: ['spec',
    ['junit', {
        outputDir: './target/',
        outputFileFormat: function(options) { // optional
            return `results-${options.cid}.${options.capabilities.browserName}.xml`
        }
    }],
    ['timeline', {
        outputDir: './target/',
        fileName: 'timeline-desktop.html',
        embedImages: true,
        images: {
            quality: 100,
            resize: true,
            reductionRatio: 2
        },
        screenshotStrategy: 'on:error'
    }]
    ],
}