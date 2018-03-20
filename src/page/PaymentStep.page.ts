import { $, ElementFinder, promise } from 'protractor';

export class PaymentPage {
  private get payByBankWireButton(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToPayment(): promise.Promise<void> {
    return this.payByBankWireButton.click();
  }
}