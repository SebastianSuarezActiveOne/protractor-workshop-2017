import { $, ElementFinder, promise, browser, ProtractorExpectedConditions } from 'protractor';

const EC: ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export class ProductDetailPage {
  private get productImage(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }
  public goToProductDetail(): promise.Promise<void> {
    browser.wait(EC.elementToBeClickable(this.productImage));
    return this​.productImage.click();
  }
}