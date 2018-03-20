import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedPage {
  private get addButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  private get toCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public addProduct(): promise.Promise<void> {
    return this​.addButton.click();
  }

  public goToCheckout(): promise.Promise<void> {
    return this.toCheckoutButton.click();
  }
}