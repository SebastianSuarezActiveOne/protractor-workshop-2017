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

  public fillEmail(): promise.Promise<void> {
    return this.emailInput.sendKeys('aperdomobo@gmail.com');
  }

  public fillPassword(): promise.Promise<void> {
    return this.passwordInput.sendKeys('WorkshopProtractor');
  }

  public signIn(): promise.Promise<void> {
    return this.signInButton.click();
  }
}