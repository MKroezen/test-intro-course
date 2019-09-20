import {Config} from 'protractor';

export let config: Config = {
    framework: 'mocha',
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    specs: ['specs/add-heroes.js'],
    chromeOnly: true,
    directConnect: true,
    baseUrl: 'http://localhost:4200',
    mochaOpts: {
        reporter: 'spec',
        timeout: 5000
    }
};
