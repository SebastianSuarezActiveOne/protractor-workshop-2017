import { browser, Config } from "protractor";

import { reporter } from "./helpers/reporter";

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  noGlobals: true,
  getPageTimeout: 1000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', 'disable-gpu', '--window-size=800,600']
    }
  },
  specs: ['../test/*.spec.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
}