import { browser, Config } from "protractor";

import { reporter } from "./helpers/reporter";

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  noGlobals: true,
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },
  specs: ['../test/*.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(3000);
    reporter();
  }
}
