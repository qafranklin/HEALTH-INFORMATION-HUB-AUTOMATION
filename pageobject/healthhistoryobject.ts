import { Page, Locator } from '@playwright/test';

export class HealthHistoryPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly navigatepage: string;
  readonly visitPage: Locator;
  readonly navigateVisitPage: string;
  readonly addNewVisit: Locator;
  readonly SearchBy: Locator;
  readonly searchByPatientId: Locator;
  readonly searchPatientId: Locator;
  readonly search: Locator;
  readonly patientInfo: Locator;
  readonly addVisit: Locator;
  readonly successPrompt: Locator;
  
  readonly backToVisits: Locator;
  readonly editVisit442: Locator;
  readonly healthhistoryModule: Locator;
  readonly disabledForms: Locator;
  readonly enabledForms: Locator;
  readonly healthformElement: Locator;

  // Locator for checkboxes
  readonly checkboxes: Locator;
  readonly textInput: Locator;
  readonly dropdown: Locator;
  readonly dropdownValue: Locator;
  // Add Gravidity Elements
  readonly gravbutton: Locator;
  readonly gravidityInput: Locator;
  readonly gravdropdown: Locator;
  readonly gravdropdownValue: Locator;
  readonly gravsaveButton: Locator;
  readonly birthweightInput: Locator;
  readonly clgravform: Locator;
  // Save Form
  readonly saveButton: Locator;
  // Validate all Elements if they have been loaded
  readonly inputValues: Locator;
  // validation for table content
  readonly tableValue: Locator;

  // Edit Module Elements
  readonly uncheckforupdate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.navigatepage = 'https://beacon-accountweb-dev.azurewebsites.net/login?callback=https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/callback&aud=3AOw&origin=/';
    this.visitPage = page.locator('#nav-item-visits');
    this.navigateVisitPage = 'https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/profiling/visits';
    this.addNewVisit = page.locator('[id="add-new-user-button"]');
    this.SearchBy = page.locator('[id="searchBy"]');
    this.searchByPatientId = page.locator('[id="item-search-by-patient-id"]');
    this.searchPatientId = page.locator('[id="profile-id"]');
    this.search = page.locator('[id="search-profile-info-btn"]');
    this.patientInfo = page.locator('[class="MuiTableRow-root css-1xvol0l"]');
    this.addVisit = page.locator('[id="add_visit_id_442"]');
    this.successPrompt = page.locator('[class="go3958317564"]');

    // Elements for Health History Page
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    this.healthhistoryModule = page.locator('[id="nav-item-visits-health-history"]');
    this.disabledForms = page.locator('#health-history-form input[disabled], #health-history-form button[disabled]');
    this.enabledForms = page.locator('#health-history-form input:not([disabled]), #health-history-form button:not([disabled])');
    this.healthformElement = page.locator('[id="typeOfLastDelivery-label"]');
    this.checkboxes = page.locator('input[type=checkbox]');
    this.textInput = page.locator('input[type="text"]');
    this.dropdown = page.locator('#health-history-form [role="combobox"]');
    this.dropdownValue = page.locator('[role="option"]');

    // Add Gravidity Elements
    this.gravbutton = page.locator('[id="open-add-dialog-btn"]');
    this.gravidityInput = page.locator('[role="dialog"] [type="text"]');
    this.gravdropdown = page.locator('[role="dialog"] [role="combobox"]');
    this.gravdropdownValue = page.locator('[role="listbox"] [role="option"]');
    this.gravsaveButton = page.locator('[role="dialog"] [type=button]');
    this.birthweightInput = page.locator('[id="birth-weight-textfield-label"]');
    this.clgravform = page.locator('[role="dialog"]');

    // Save Form
    this.saveButton = page.locator('[id="submit-fab-button"]');

    // Validates all Elements if they have been loaded
    this.inputValues = page.locator('#health-history-form input:not([disabled]), #health-history-form textarea:not([disabled])');
    // validation for table content
    this.tableValue = page.locator('tbody tr td');
    
    // Edit Module Elements
    this.uncheckforupdate = page.locator('[id="comorbidity-checkbox-1"]');
  }

  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
