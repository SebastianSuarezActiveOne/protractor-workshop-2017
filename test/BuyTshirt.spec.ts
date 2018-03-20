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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(5000));
    await productDetailPage.goToProductDetail();
    await (browser.sleep(5000));
    await productAddedPage.addProduct();
    await (browser.sleep(5000));
    await productAddedPage.goToCheckout();
    await (browser.sleep(5000));
    await summaryPage.goToCheckout();
    await (browser.sleep(5000));
    await signInStep.fillEmail();
    await signInStep.fillPassword();
    await signInStep.signIn();
    await (browser.sleep(5000));
    await addressPage.goToCheckout();
    await (browser.sleep(5000));
    await shippingPage.checkToS();
    await (browser.sleep(5000));
    await shippingPage.goToCheckout();
    await (browser.sleep(5000));
    await paymentPage.goToPayment();
    await (browser.sleep(5000));
    await orderResumePage.goToConfirmOrder();
    await (browser.sleep(5000));
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});

