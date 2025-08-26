import { Page, Locator } from '@playwright/test';

export class SocioeconomicClassificationPage {
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
  readonly viewVisit442: Locator;
  readonly socioeconomicmodule: Locator;
  readonly socioeconomicUrl: string;
  readonly disabledForms: Locator;
  readonly enabledForms: Locator;
  readonly socioElementvisibility: Locator;

  // Locator for Elements
  readonly dropdown: Locator;
  readonly dropdownValue: Locator;
  // readonly checkboxes: Locator;

  // For Attributes
  readonly allElements: Locator;
  readonly allElements2: Locator;
  readonly placeholders: Locator;
  readonly clcheckbox: Locator;
  readonly clPWD: Locator;
  // Others
  readonly otherBtn: Locator;
  readonly othersElement: Locator;
  readonly actualCharge: Locator;
  // Add Family Member Locators
  readonly addFamBtn: Locator;
  readonly nameRandom: Locator;
  readonly bdate1: Locator;
  readonly addFamSearch: Locator;
  readonly addFamDropdowns:Locator;
  readonly addFamJob: Locator;
  readonly addFamIncome: Locator;
  readonly savenclose: Locator;
  // Saving
  readonly sociosaveButton: Locator;
  // Locator
  readonly ValinputFields: Locator;
  readonly sectorCheckbox: Locator;
  readonly sectorCheckbox2: Locator;
    
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

    // Elements for Socioeconomic Page
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    this.socioeconomicmodule = page.locator('[class="MuiBox-root css-1xo8tnh"] ul li [id="nav-item-visits-socioeconomic-classification"]');
    this.socioeconomicUrl = 'https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/profiling/visits/68/socioeconomic-classification';
    this.socioElementvisibility = page.locator('[id="actualChargeHCIFees"]');
    this.disabledForms = page.locator('#socioeconomic-classification-form button[disabled], #socioeconomic-classification-form input[disabled]');
    this.enabledForms = page.locator(' button:not([disabled]), #socioeconomic-classification-form input:not([disabled])');

    // Elements for Socioeconomic Page
    this.allElements = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1xuam64"]');
    this.placeholders = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedEnd css-cfhpco"]');
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    this.viewVisit442 = page.locator('[class="MuiStack-root css-1j1frzf"] [type="button"]');
    this.dropdown = page.locator('#socioeconomic-classification-form [role="combobox"]');
    this.dropdownValue = page.locator('[role="option"]');
    this.allElements2 = page.locator('#socioeconomic-classification-form input');
    this.clPWD = page.locator('[id="is-pwd-checkbox"]');
    this.clcheckbox = page.locator('[class="PrivateSwitchBase-input css-j8yymo"]');
    // Others
    this.otherBtn = page.locator('[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1bue42d"]');
    this.actualCharge = page.locator('[id="actualCharge"]');
    this.othersElement = page.locator('[class*="MuiDialog-paper"] input');
    // Add Family Member Elements
    this.addFamBtn = page.locator('[id="add-family-member"]');
    this.nameRandom = page.locator('[class*="MuiDialog-paper"] [class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1xuam64"]');
    this.bdate1 = page.locator('[id="birthDate"]');
    this.addFamSearch = page.locator('[id="search-profile-info-btn"]');
    this.addFamDropdowns = page.locator('[class*="MuiDialog-paper"] [role="combobox"]');
    this.addFamJob = page.locator('[id="job"]');
    this.addFamIncome = page.locator('[id="monthlyIncome"]');
    this.savenclose = page.locator('[id="submit-user-button"]');
    // Save Button
    this.sociosaveButton = page.locator('[id="submit-fab-button"]');
    // Validate All Elements 
    this.ValinputFields = page.locator('#socioeconomic-classification-form input');
    // Update Selector
    this.sectorCheckbox = page.locator('[id="is-senior-citizen-checkbox"]');
    this.sectorCheckbox2 = page.locator('[id="is-solo-parent-checkbox"]');
  
    // // Save Form
    // this.saveButton = page.locator('[id="submit-fab-button"]');

    // // Validates all Elements if they have been loaded
    // this.inputValues = page.locator('#health-history-form input:not([disabled]), #health-history-form textarea:not([disabled])');
    // // validation for table content
    // this.tableValue = page.locator('tbody tr td');
    
    // // Edit Module Elements
    // this.uncheckforupdate = page.locator('[id="comorbidity-checkbox-1"]');
  }

  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
