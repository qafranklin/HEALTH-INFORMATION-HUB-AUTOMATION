import { Page, Locator } from '@playwright/test';

export class MaternalHealthSelectors {
  readonly page: Page;
  readonly mhpagenav: Locator;
  readonly cvdcheckbox: Locator;
  readonly vsdiagnosistextarea: Locator;
  readonly vsrecomendationtextarea: Locator;
  readonly vsinputfields: Locator;
  readonly vssaveform: Locator;
  readonly vssuccessPrompt: Locator;
  readonly cvdinput: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.mhpagenav = page.locator('#tab_maternal_health');
    this.cvdcheckbox = page.locator('input[type=checkbox]');
    this.cvdinput = page.locator('input[type="text"]:enabled:not(#delivery-date-time-picker):not(#discharge-date-time-picker)') ;
    this.vsdiagnosistextarea = page.locator('#diagnosis_textfield');
    this.vsrecomendationtextarea = page.locator('#recommendation_textfield');
    this.vsinputfields = page.locator('input[type="text"]');
    this.vssaveform = page.locator('#submit-fab-button');
    this.vssuccessPrompt = page.locator('[class="go3958317564"]');
 

  } 
}
