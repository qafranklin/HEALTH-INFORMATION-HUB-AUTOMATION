import { Locator, Page } from '@playwright/test';
import { getConfig } from "../utils/config";

const config = getConfig();


export class LoginPage {
  readonly page: Page;
  readonly profilingPageURL: string;
  readonly btnLogin: Locator;
  readonly inputEmail: Locator;
  readonly passwordInput: Locator;
  readonly validatePage: string;
  readonly enterEmail: Locator;
  readonly enterPassword: Locator;

 
  constructor(page: Page) {
    this.page = page;
    this.profilingPageURL = 'https://beacon-accountweb-dev.azurewebsites.net/login?callback=https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/callback&aud=3AOw&origin=/';
    this.btnLogin = page.locator('[id=":r5:"]'); 
    this.inputEmail = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.validatePage = 'https://bps-dev-api.azurewebsites.net/api/auth/validate';
    this.enterEmail = page.locator('[id="email"]');
    this.enterPassword = page.locator('[id="password"]');
  }
  async login() {
    await this.page.goto(config.baseappUrl);
    await this.inputEmail.fill(config.username);
    await this.passwordInput.fill(config.password);
    await this.btnLogin.click();
  }

}
