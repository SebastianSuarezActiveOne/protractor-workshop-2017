import { $, ElementFinder, promise } from 'protractor';

export class ShippingPage {
  private get ToSCheckbox(): ElementFinder {
    return $('#cgv');
  }

  private get toCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }

  public checkToS(): promise.Promise<void> {
    return this.ToSCheckbox.click();
  }

  public goToCheckout(): promise.Promise<void> {
    return this.toCheckoutButton.click();
  }

}