// import { Page, Locator } from '@playwright/test';

// export class ClientPage {
//   readonly page: Page;
//   readonly usernameInput: Locator;
//   readonly passwordInput: Locator;
//   readonly loginButton: Locator;
//   readonly navigatepage: string;
//   readonly landingPage: Locator;
//   readonly clientManagementPage: Locator;
//   readonly navigateUserPage: string

//   constructor(page: Page) {
//     this.page = page;
//     this.usernameInput = page.locator('#email');
//     this.passwordInput = page.locator('#password');
//     this.loginButton = page.locator('button[type="submit"]');
//     this.navigatepage = 'https://beacon-accountweb-dev.azurewebsites.net/login?callback=https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/callback&aud=3AOw&origin=/';
//     this.landingPage = page.locator('[class="MuiBox-root css-15fqq6y"]');
//     this.clientManagementPage = page.locator('#nav-item-clients');
//     this.navigateUserPage = 'https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/clients';
 
//   } 

//   async login(username: string, password: string) {
//     await this.page.goto(this.navigatepage);
//     await this.usernameInput.fill(username);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }
