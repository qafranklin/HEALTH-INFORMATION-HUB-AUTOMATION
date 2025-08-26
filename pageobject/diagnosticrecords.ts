import { Page, Locator } from '@playwright/test';

export class DiagnosticRecordsPage {
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
  // Back Button
  readonly backToVisits: Locator;
  // Edit View Module Button
  readonly editVisit442: Locator;
  readonly viewVisit442: Locator;
  // Diagnostic Records Module elements locator
  readonly diagnosticmodule: Locator;
  readonly addDiagnostic: Locator;
  readonly savenclose: Locator;
  readonly inputFieldname: Locator;
  readonly inputFieldDes: Locator;
  readonly inputFieldDisable: Locator;
  readonly inputDate: Locator;
  readonly valInputRequired: Locator;
  readonly uploadImage: Locator;
  // Validate Forms
  readonly disabledbtn: Locator;
  readonly enabledForms: Locator;
  // Save Modal
  readonly saveModal: Locator;

  // View, Edit and Delete Locator
  readonly ViewEditDeleteImage: Locator;
  // Edit Form
  readonly editinputFieldDes: Locator;
  // Delete Image
  readonly deleteImage: Locator;
    
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

    // enabled diabled
    this.disabledbtn = page.locator('[class="MuiTableContainer-root css-1542qfa"] [id="add-button"]');
    this.enabledForms = page.locator('#health-history-form input:not([disabled]), #health-history-form button:not([disabled])');

    // Elements for Socioeconomic Page
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    this.diagnosticmodule = page.locator('[id="nav-item-visits-diagnostic-records"]');
    this.addDiagnostic = page.locator('[id="add-button"]');
    this.savenclose = page.locator('[id="save-close-btn"]');
    this.inputFieldname = page.locator('[id="name-text-field"]');
    this.inputFieldDes = page.locator('[id="procedure-text-field"]');
    this.inputDate = page.locator('[id="record-date-picker"]');
    this.valInputRequired = page.locator('[class="MuiBox-root css-vhcyka"]');
    this.uploadImage = page.locator('[class="css-1bigxrc"]');
    
    // View Button
    this.ViewEditDeleteImage = page.locator('[class="MuiGrid2-root MuiGrid2-direction-xs-row css-1n5khr6"]');
    
    // Save Modal Form
    this.saveModal = page.locator('[id="diagnostic-record-modal"] [id="submit-button"]');

    // Edit Modal Form
    this.editinputFieldDes = page.locator('[id="diagnostic-procedure-text-field"]');
    // Delete Save Prompt
    this.deleteImage = page.locator('[id="submit-btn"]');

    
}   

  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
