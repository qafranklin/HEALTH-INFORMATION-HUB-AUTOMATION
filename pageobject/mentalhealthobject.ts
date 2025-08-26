import { Page, Locator } from '@playwright/test';

export class MentalHealthSelectors {
  readonly page: Page;
  readonly mhpagenav: Locator;
  readonly mhcheckbox: Locator;
  readonly mhmedicationtextarea: Locator;
  readonly vsinputfields: Locator;
  readonly vssaveform: Locator;
  readonly mssuccessPrompt: Locator;
  readonly othersinput: Locator;
  readonly mhfollowupdate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mhpagenav = page.locator('#tab_mental_health');
    this.mhcheckbox = page.locator('input[type=checkbox]');
    this.mhmedicationtextarea = page.locator('#medication');
    this.vssaveform = page.locator('#submit-fab-button');
    this.mssuccessPrompt = page.locator('[class="go3958317564"]');
    this.othersinput = page.locator('#others');
    this.mhfollowupdate = page.locator('#follow-up-check-up-date');
 

  } 
}
