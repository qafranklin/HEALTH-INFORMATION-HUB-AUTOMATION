import { Locator, Page } from '@playwright/test';

export class WomensHealthSelectors {
  page: Page;
  btnHealthHistory: Locator;
  btnWomensHealth: Locator;
  btnCheckBox: Locator;
  inputFields: Locator;
  inputManagement: Locator;
  inputExamination: Locator;
  saveformBtn: Locator;
  saveSucc: Locator;


  constructor(page: Page) {
    this.page = page;
    this.btnHealthHistory = page.locator('[id="nav-item-visits-health-program"]');
    this.btnWomensHealth = page.locator('[id="tab_womens_health"]');
    this.btnCheckBox = page.locator('[class="PrivateSwitchBase-input css-j8yymo"]');
    this.saveformBtn = page.locator('[id="submit-fab-button"]');
    this.inputFields = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1xuam64"]');
    this.saveSucc = page.locator('[class="go3958317564"]');
    this.inputManagement = page.locator('[id="management"]');
    this.inputExamination = page.locator('[id="retro-vaginal-examination"]');
}


}
