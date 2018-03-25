import { $$, ElementFinder, ElementArrayFinder, promise, browser, ProtractorExpectedConditions } from 'protractor';

const EC: ProtractorExpectedConditions = new ProtractorExpectedConditions(browser);

export class ProductDetailPage {

  // private get productImage(): ElementFinder {
  //   return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  // }

  private get productContainerList(): ElementArrayFinder {
    return $$('.product_list > li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.productContainerList.filter((product) => {
      return product.$('a.product_img_link').getAttribute('title').then((attribute) => {
        return attribute === name;
      });
    }).first();
  }

  public goToProductDetail(name: string): promise.Promise<void> {
    let product = this.findByProduct(name).$('img');
    browser.wait(EC.elementToBeClickable(product));
    return product.click();
  }
}