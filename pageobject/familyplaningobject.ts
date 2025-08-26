import { Page, Locator } from '@playwright/test';

export class FamilyPlanningPage{
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
  // Health Program to Family Planning Module
  readonly modules: Locator;
  readonly healthProgModules: Locator;
  readonly valInputRequired: Locator;
  readonly uploadImage: Locator;
  //Dropdown and Value Locator
  readonly dropdown: Locator;
  readonly dropdownValue: Locator;
  // Validate Forms
  readonly disabledForms: Locator;
  readonly enabledForms: Locator;
  // Save Modal
  readonly saveModal: Locator;

  // View, Edit and Delete Locator
  readonly ViewEditDeleteImage: Locator;
  // Edit Form
  readonly editinputFieldDes: Locator;
  // Delete Image
  readonly deleteImage: Locator;
  //All Elements
  readonly allElements:Locator;
  //Uploading Btn
  readonly uploadingbtn:Locator;
  //Save Form
  readonly SaveForm: Locator;   
  // Upload Form Enabled
  readonly uploadingImageEn: Locator;   
  // Type of Client
  readonly typeofClient: Locator;
  

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
    this.disabledForms = page.locator('[class="MuiStack-root css-1b667in"] button[disabled], [class="MuiStack-root css-1b667in"] input[disabled]');
    this.enabledForms = page.locator('#health-history-form input:not([disabled]), #health-history-form button:not([disabled])');

    // Elements for Family Planning
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    this.modules = page.locator('[id="nav-item-visits-health-program"]');
    this.healthProgModules = page.locator('[id="tab_family_planning"]');
    this.valInputRequired = page.locator('[class="MuiBox-root css-vhcyka"]');
    this.uploadImage = page.locator('[class="css-1bigxrc"]');
    this.allElements = page.locator('[id="family-planning-form"] input');
    // Dropdown and Value
    this.dropdown = page.locator('[class="MuiStack-root css-1b667in"] [role="combobox"]');
    this.dropdownValue = page.locator('[role="option"]');

    // View Button
    this.ViewEditDeleteImage = page.locator('[class="MuiGrid2-root MuiGrid2-direction-xs-row css-1n5khr6"]');
    // Save Modal Form
    this.saveModal = page.locator('[id="diagnostic-record-modal"] [id="submit-button"]');

    // Edit Modal Form
    this.editinputFieldDes = page.locator('[id="diagnostic-procedure-text-field"]');
    // Delete Save Prompt
    this.deleteImage = page.locator('[id="submit-btn"]');
    // Uploading Btn
    this.uploadingbtn = page.locator('[class="MuiStack-root css-1b667in"] button');
    // Form Save Button
    this.SaveForm = page.locator('[id="submit-fab-button"]');
    // Uploading Enabled
    this.uploadingImageEn = page.locator('[id="files-input"]');

    this.viewVisit442 = page.locator('[class="MuiStack-root css-1j1frzf"] [type="button"]');
    this.typeofClient = page.locator('[id="typeOfClient"]');
}   

  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
