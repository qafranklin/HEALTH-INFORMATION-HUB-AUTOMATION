import { Locator, Page } from '@playwright/test';

export class AboutUsPage {
  page: Page;
  aboutUsURL: string;
  btnAboutUs: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.aboutUsURL = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/about';
    this.btnAboutUs = page.locator('#nav-item-about');
  }


}
