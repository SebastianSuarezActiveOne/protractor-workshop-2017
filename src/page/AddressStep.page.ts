import { $, ElementFinder, promise } from 'protractor';

export class AdressPage {
  private get toCheckoutButton(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToCheckout(): promise.Promise<void> {
    return this.toCheckoutButton.click();
  }

}