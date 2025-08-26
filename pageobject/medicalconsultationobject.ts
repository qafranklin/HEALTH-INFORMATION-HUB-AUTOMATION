import { Page, Locator } from '@playwright/test';

export class MedicalConsultationPage {
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
  // Medical Consultation Module elements locator
  readonly medicalConsultation: Locator;
  // Validate Forms
  readonly disabledbtn: Locator;
  readonly enabledForms: Locator;
  readonly saveModal: Locator;
  readonly formElements: Locator;
  readonly dropdownVal: Locator;
  readonly chiefComplaint: Locator;
  readonly cldropdown: Locator;
  readonly textArea: Locator;
  readonly addDiagnosisbtn: Locator;
  readonly diagnosisCheckbox: Locator;
  readonly modalButton: Locator;
  readonly addSurgicalBtn: Locator;
  readonly rvsnicd: Locator;
  readonly repetitivebox: Locator;
  readonly surgicalModalDropdown: Locator;
  readonly dropdownOption: Locator;
  readonly surgicaldate: Locator;
  readonly surgicalDrop: Locator;
  readonly surgicalDrop2: Locator;
  readonly surSite:Locator;
  readonly addMedicineBtn: Locator;
  readonly modalMedckBox: Locator;
  readonly addmedSig: Locator;
  readonly addmedSigTab: Locator;
  readonly clMedSig: Locator;
  readonly clMedSigDetails: Locator;
  readonly clMedSigModalBtn: Locator;
  readonly saveMedForm: Locator;

  
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
    this.disabledbtn = page.locator('[class="MuiStack-root css-1b667in"] input[disabled]');
    this.enabledForms = page.locator('[class="MuiStack-root css-1b667in"] input:not([disabled])');

    // Elements for Socioeconomic Page
    this.backToVisits = page.locator('[id="patient-profile-back-button"]');
    this.editVisit442 = page.locator('(//*[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1mi2qv0"])');
    // Access Module Medical Consultation
    this.medicalConsultation = page.locator('[id="nav-item-visits-medical-consultation"]');
    // Save Form
    this.saveModal = page.locator('[id="diagnostic-record-modal"] [id="submit-button"]');
    this.formElements = page.locator('[class="MuiStack-root css-1b667in"] input');
    // Role Option
    this.dropdownVal = page.locator('[class="MuiStack-root css-1b667in"] [aria-activedescendant=":r6i:-option-0"]');
    // Chief Complaint
    this.chiefComplaint = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall MuiAutocomplete-input MuiAutocomplete-inputFocused css-1xuam64"]');
    // Dropdown button
    this.cldropdown = page.locator('[class="MuiAccordion-heading css-wnfue5"]');
    // Text Areas
    this.textArea = page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiInputBase-inputSizeSmall css-11pgwmm"]');
    //Add Diabnosis Button
    this.addDiagnosisbtn = page.locator('[id="add-diagnosis-button"]');
    // Checkbox ICD10 Code
    this.diagnosisCheckbox = page.locator('[class="MuiDialogContent-root css-1nbx5hx"] [id="is-selected-diagnosis-checkbox-1"]');
    // save modal button
    this.modalButton = page.locator('[id="submit-user-button"]');
    // Add Surgical Procedure
    this.addSurgicalBtn = page.locator('[id="submit_rvs_button"]');
    // Select Rvs Code and ICD10 Code
    this.rvsnicd = page.locator('[id="surgical-procedure-dialog"] [role="combobox"]');
    // Repetitive Checkbox
    this.repetitivebox = page.locator('[id="is-repetitive-checkbox"]');
    // Surgical Procedure Modal Locator
    this.surgicalModalDropdown = page.locator('[class="MuiDialogContent-root css-1nbx5hx"] [class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1ku13v6"]');
    // Surgical Procedure Modal Dropdown Option 
    this.dropdownOption = page.locator('[role="option"]');
    // Surgical Date
    this.surgicaldate = page.locator('[id="dateOfProcedure_0"]');
    // Surgical Dropdown
    this.surgicalDrop = page.locator('[id="surgicalType_0"]');
    this.surgicalDrop2 = page.locator('[id="laterality_0"]');
    // Surgical Number of Site
    this.surSite = page.locator('[id="numberOfSite_0"]');
    // Add Medicine btn
    this.addMedicineBtn = page.locator('[id="add_medicine_dispensing_record_btn"]');
    // Medicine Modal Checkbox
    this.modalMedckBox = page.locator('[id="medicine-checkbox"]');
    // Add Med Sig
    this.clMedSig = page.locator('[class="MuiCardContent-root css-1b4xanl"]');
    this.addmedSig = page.locator('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-ongpmj"]');
    this.addmedSigTab = page.locator('[class="MuiTabs-flexContainer css-162tvoi"] [type="button"]');
    this.clMedSigDetails = page.locator('[class="MuiBox-root css-hrkquk"] [type="button"]');
    this.clMedSigModalBtn = page.locator('[class="MuiBox-root css-128wwwm"] [id="submit-user-button"]');
    // Save Medical Consultation Form
    this.saveMedForm = page.locator('[id="submit-fab-button"]');
    
  }   
  async login(username: string, password: string) {
    await this.page.goto(this.navigatepage);
    await this.page.goto('https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
