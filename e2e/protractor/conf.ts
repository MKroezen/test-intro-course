import {Config} from 'protractor';

export let config: Config = {
    framework: 'mocha',
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    specs: [
        'specs/add-new-hero.spec.js',
        'specs/dashboard.spec.js',
        'specs/hero-detail-view.spec.js'
    ],
    chromeOnly: true,
    directConnect: true,
    baseUrl: 'http://localhost:4200',
    mochaOpts: {
        reporter: 'spec',
        timeout: 50000
    }
};
