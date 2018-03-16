import { browser, Config } from "protractor";

export const config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    specs: ['../test/Google.spec.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
}