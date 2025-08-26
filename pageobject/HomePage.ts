import { Locator, Page } from '@playwright/test';

export class HomePageSelectors {
  readonly page: Page;
  readonly BPS: Locator;
  readonly btnHomepage: Locator;
  readonly learnmorebtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.BPS = page.locator('[class="MuiTypography-root MuiTypography-body1 css-ko6b9v"]');
    this.btnHomepage = page.locator('[id="nav-item-home"]');
    this.learnmorebtn = page.locator('#learn-more-button')

  }
}
