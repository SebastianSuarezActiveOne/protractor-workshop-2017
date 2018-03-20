import { $, ElementFinder, promise } from 'protractor';

export class SignInStep {

  private get emailInput(): ElementFinder {
    return $('#email');
  }

  private get passwordInput(): ElementFinder {
    return $('#passwd');
  }

  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public signIn(): promise.Promise<void> {
    this.emailInput.sendKeys('aperdomobo@gmail.com');
    this.passwordInput.sendKeys('WorkshopProtractor');
    return this.signInButton.click();
  }
}