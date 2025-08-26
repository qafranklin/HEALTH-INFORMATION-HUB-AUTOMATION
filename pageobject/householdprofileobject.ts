import { Locator, Page } from '@playwright/test';

export class HouseHoldProfile {
  page: Page;
  aboutUsURL: string;
  householdprofileNav: Locator;
  sourceofwater: Locator;
  waterlevel: Locator;
  checkboxfields: Locator;
  saveformBtn: Locator;
  radiobtnfields: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.aboutUsURL = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/about';
    this.householdprofileNav = page.locator('#nav-item-visits-household-profile');
    this.sourceofwater = page.locator('#source-of-water-select');
    this.waterlevel = page.locator('[data-value="Level2"]');
    this.checkboxfields = page.locator('.css-15x3tdz');
    this.saveformBtn = page.locator('#submit-fab-button')
    this.radiobtnfields = page.locator('[value="ConnectedToSewerSystem"]');
    

  }


}
