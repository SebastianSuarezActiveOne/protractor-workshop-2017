import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get productImage(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }
  public goToProductDetail(): promise.Promise<void> {
    return this​.productImage.click();
  }
}