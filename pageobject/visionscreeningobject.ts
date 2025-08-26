import { Page, Locator } from '@playwright/test';

export class VisionScreeningSelectors {
  readonly page: Page;
  readonly vspagenav: Locator;
  readonly vscheckbox: Locator;
  readonly vsdiagnosistextarea: Locator;
  readonly vsrecomendationtextarea: Locator;
  readonly vsinputfields: Locator;
  readonly vssaveform: Locator;
  readonly vssuccessPrompt: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.vspagenav = page.locator('#tab_vision_screening');
    this.vscheckbox = page.locator('input[type=checkbox]');
    this.vsdiagnosistextarea = page.locator('#diagnosis_textfield');
    this.vsrecomendationtextarea = page.locator('#recommendation_textfield');
    this.vsinputfields = page.locator('input[type="text"]');
    this.vssaveform = page.locator('#submit-fab-button');
     this.vssuccessPrompt = page.locator('[class="go3958317564"]');
 

  } 
}
