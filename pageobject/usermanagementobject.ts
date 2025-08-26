import { Page, Locator } from '@playwright/test';

export class UserPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly navigatepage: string;
  readonly userManagementPage: Locator;
  readonly navigateUserPage: string;
  

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.navigatepage = 'https://beacon-accountweb-dev.azurewebsites.net/login?callback=https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/callback&aud=3AOw&origin=/';
    this.userManagementPage = page.locator('#nav-item-users');
    this.navigateUserPage = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/users';

  } 

  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
