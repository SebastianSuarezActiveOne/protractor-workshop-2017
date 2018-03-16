import { browser, Config } from "protractor";

import { reporter } from "./helpers/reporter";

export const config: Config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true,
    specs: ['../test/Google.spec.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        reporter();
    }
}