import { $, ElementFinder, promise } from 'protractor';

export class SummaryPage {

  private get toCheckoutButton(): ElementFinder {
    return $('.cart_navigation span');
  }

  public goToCheckout(): promise.Promise<void> {
    return this.toCheckoutButton.click();
  }
}