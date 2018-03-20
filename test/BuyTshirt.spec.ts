import { $, browser } from "protractor";

import {
  MenuContentPage, ProductDetailPage, ProductAddedPage, SummaryPage, SignInStep, AdressPage, ShippingPage, PaymentPage, OrderResumePage
} from '../src/page';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const summaryPage: SummaryPage = new SummaryPage();
  const signInStep: SignInStep = new SignInStep();
  const addressPage: AdressPage = new AdressPage();
  const shippingPage: ShippingPage = new ShippingPage();
  const paymentPage: PaymentPage = new PaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productDetailPage.goToProductDetail();
    await (browser.sleep(3000));
    await productAddedPage.addProduct();
    await (browser.sleep(3000));
    await productAddedPage.goToCheckout();
    await (browser.sleep(3000));
    await summaryPage.goToCheckout();
    await (browser.sleep(3000));
    await signInStep.signIn();
    await (browser.sleep(3000));
    await addressPage.goToCheckout();
    await (browser.sleep(3000));
    await shippingPage.checkToS();
    await (browser.sleep(3000));
    await shippingPage.goToCheckout();
    await (browser.sleep(3000));
    await paymentPage.goToPayment();
    await (browser.sleep(3000));
    await orderResumePage.goToConfirmOrder();
    await (browser.sleep(3000));
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});

