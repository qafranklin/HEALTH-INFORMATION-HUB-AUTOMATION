import { Page, Locator, expect } from '@playwright/test';

export class PatientProfilesSelectors {
  readonly page: Page;
  readonly patientprofileNav: Locator;
  readonly addnewprofileBtn: Locator;
  readonly searchBy: Locator;
  readonly searchbyName: Locator;
  readonly lastnameInput: Locator;
  readonly firstnameInput: Locator;
  readonly birthdayInput: Locator;
  readonly searchparofileBtn: Locator;
  readonly genderSelection: Locator;
  readonly addpatientcontinueBtn: Locator;
  readonly regionSelection: Locator;
  readonly provinceSelection: Locator;
  readonly citymunicipalitySelection: Locator;
  readonly barangaySelection: Locator;
  readonly addpatientBtn: Locator;
  readonly geninfomiddlenameInput: Locator;
  readonly geninfosaveBtn: Locator;
  readonly searchprofileInput: Locator;
  readonly editprofileBtn: Locator;
  readonly patientprofileUrl: string;
  readonly malegenderOption: Locator;
  readonly regionOption: string;
  readonly provinceOption: Locator;
  readonly citymunicipalityOption: Locator;
  readonly barangayOption: Locator;
  readonly patienttable: Locator;
  readonly viewBtn: Locator;



  constructor(page: Page) {
    this.page = page;
    this.patientprofileNav = page.locator('#nav-item-patient-profiles');
    this.addnewprofileBtn = page.locator('#add-new-user-button');
    this.searchbyName = page.locator('#item-search-by-name');
    this.lastnameInput= page.locator('#last-name');
    this.firstnameInput = page.locator('#first-name');
    this.birthdayInput = page.locator('#birthDate');
    this.searchparofileBtn = page.locator('#search-profile-info-btn');
    this.genderSelection = page.locator('#gender');
    this.searchBy = page.locator('#searchBy');
    this.addpatientcontinueBtn = page.locator('#add-patient-continue-btn');
    this.regionSelection = page.locator('#region');
    this.provinceSelection = page.locator('#province');
    this.citymunicipalitySelection = page.locator('#cityMunicipality');
    this.barangaySelection = page.locator('#barangay');
    this.addpatientBtn = page.locator('#add-patient-continue-btn');
    this.geninfomiddlenameInput = page.locator('#middle_name');
    this.geninfosaveBtn = page.locator('#submit-fab-button');
    this.searchprofileInput = page.locator('#profile-search-textfield');
    this.editprofileBtn = page.getByTestId('EditIcon');
    this.malegenderOption = page.locator("//li[normalize-space()='Male']");
    this.regionOption = "Region VII (Central Visayas)";
    this.provinceOption = page.locator("//li[normalize-space()='Bohol']");
    this.citymunicipalityOption = page.locator('[data-value="Batuan"]');
    this.barangayOption = page.locator('[data-value="Poblacion Norte"]');
    this.patientprofileUrl = 'https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/profiling/patient-profiles';
    this.patienttable = page.locator('.css-sk1lv2');
    this.viewBtn = page.getByTestId('VisibilityIcon');
  }

  async navigatepatietnProfile() {
    await expect(this.patientprofileNav).toBeVisible();
    await this.patientprofileNav.click();
  }
}
