import { $, browser, ProtractorExpectedConditions } from "protractor";

import {
  MenuContentPage, ProductDetailPage, ProductAddedPage, SummaryPage, SignInStep, AdressPage, ShippingPage, PaymentPage, OrderResumePage
} from '../src/page';

describe('Open the browser', () => {
  it('should open the browser', async () => {
    await browser.get('http://automationpractice.com/');
    await expect(browser.getTitle()).toEqual("My Store");
  });
});

describe('Buy a t-shirt', () => {

  const EC: ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const summaryPage: SummaryPage = new SummaryPage();


  it('then should be bought a t-shirt', async () => {
    await menuContentPage.goToTShirtMenu();
    await productDetailPage.goToProductDetail('Faded Short Sleeve T-shirts');
    await browser.wait(EC.elementToBeClickable($('#add_to_cart > button > span')));
    await productAddedPage.addProduct();
    await browser.wait(EC.elementToBeClickable($('[style*="display: block;"] .button-container > a')));
    await productAddedPage.goToCheckout();
    await summaryPage.goToCheckout();
    await expect($(".page-heading").getText()).toEqual("AUTHENTICATION");
  });
});

describe('Log in', () => {
  it('should sign in', async () => {
    const signInStep: SignInStep = new SignInStep();
    await signInStep.fillEmail();
    await signInStep.fillPassword();
    await signInStep.signIn();
    await expect($(".page-heading").getText()).toEqual("ADDRESSES");
  });
});

describe('Select default address', () => {
  it('should select default adresses', async () => {
    const addressPage: AdressPage = new AdressPage();
    await addressPage.goToCheckout();
    await expect($(".page-heading").getText()).toEqual("SHIPPING");
  });
});

describe('Payment', () => {
  it('should pay', async () => {

    const shippingPage: ShippingPage = new ShippingPage();
    const paymentPage: PaymentPage = new PaymentPage();
    const orderResumePage: OrderResumePage = new OrderResumePage();

    await shippingPage.checkToS();
    await shippingPage.goToCheckout();
    await paymentPage.goToPayment();
    await orderResumePage.goToConfirmOrder();
    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});