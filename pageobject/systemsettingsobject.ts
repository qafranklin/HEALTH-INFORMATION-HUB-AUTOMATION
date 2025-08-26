import { Locator, Page } from '@playwright/test';

export class systemsetiingsselectors {
  page: Page;
  systemsettingsURL: string;
  systemsettingsNav: Locator;


  constructor(page: Page) {
    this.page = page;
    this.systemsettingsURL = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/system-settings';
    this.systemsettingsNav = page.locator('#nav-item-sys-settings');


  }


}
