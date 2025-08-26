import { Page, Locator } from '@playwright/test';

export class HivAidsStiPage {
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
  readonly visitFilter: Locator;
  readonly ayearAgo: Locator;
  // Back Button
  readonly backToVisits: Locator;
  readonly randomElem: Locator;
  // Edit View Module Button
  readonly editVisit442: Locator;
  readonly viewVisit442: Locator;
  // Medical Consultation Module elements locator
  readonly accessModule: Locator;
  readonly accessHealthPModule: Locator;
  // Validate Forms
  readonly disabledForms: Locator;
  readonly enabledForms: Locator;
  readonly saveModal: Locator;
  // Save HIV form
  readonly hivSaveBtn: Locator;
  readonly toggleBtn: Locator;
  readonly singleCl: Locator;
  readonly inputisTex: Locator;
  readonly uic1: Locator;
  readonly uic2: Locator;
  readonly condom1: Locator;
  readonly condom2: Locator;
  readonly lubricant: Locator;
  readonly aog: Locator;
  readonly pills: Locator;
  // Annotation
  readonly annotate: Locator;
  // Draw Signature
  readonly drawAnnotation: Locator;
  // Save Annotation
  readonly saveAnnotate: Locator;
  // Save Form
  readonly saveForm: Locator;

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
    this.disabledForms = page.locator('[class="MuiStack-root css-1b667in"] input[disabled]');
    this.enabledForms = page.locator('[class="MuiStack-root css-1b667in"] input');

    // Elements for Socioeconomic Page
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    // Access Module Medical Consultation
    this.accessModule = page.locator('[id="nav-item-visits-health-program"]');
    this.accessHealthPModule = page.locator('[id="tab_hiv_aids"]');
    // Save Form
    this.saveModal = page.locator('[id="diagnostic-record-modal"] [id="submit-button"]');
    // Random Element
    this.randomElem = page.locator('[class="PrivateSwitchBase-input css-j8yymo"]');
    // Save HIV Form
    this.hivSaveBtn = page.locator('[form="hiv-aids-form"]');
    // toggleBtn
    this.toggleBtn = page.locator('[class="MuiStack-root css-1b667in"] [class="PrivateSwitchBase-input MuiSwitch-input css-j8yymo"]');
    // Single Click
    this.singleCl = page.locator('[id="already-diagnosed-yes"]');
    // Type Text
    this.inputisTex = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1xuam64"]');
    // UCI
    this.uic1 = page.locator('[id="uic3"]');
    this.uic2 = page.locator('[id="uic4"]');
    // Condom
    this.condom1 = page.locator('[id="condom-distributed-text"]');
    this.condom2 = page.locator('[id="condoms-distributed-text"]');
    // Lubricant Element
    this.lubricant = page.locator('[id="lubricant-distributed"]');
    this.aog = page.locator('[id="aog"]');
    // Pills Per Day
    this.pills = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-4ylz3e"]');
    // Save HIV Form
    this.saveForm = page.locator('[id="submit-fab-button"]');
    // Annotate 
    this.annotate = page.locator('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1swxqu2"]');
    // Draw in Annotation
    this.drawAnnotation = page.locator('[class="MuiBox-root css-11vnw39"]');
    // Save Annotation
    this.saveAnnotate = page.locator('[id="submit-user-button"]');
    // View Visit
    this.viewVisit442 = page.locator('[class="MuiStack-root css-1j1frzf"] [type="button"]');
    // Visits Filter
    this.visitFilter = page.locator('[id="filter-button"]');
    this.ayearAgo = page.locator('[role="menuitem"]');
  }   
  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
