import { Page, Locator, expect } from '@playwright/test';

export class PatientProfilePage {
  // core
  readonly page: Page;
  readonly url = 'https://bps-test-web-g6becgb0c3ejc0h0.eastasia-01.azurewebsites.net/profiling/patient-profiles';

  // navigation
  readonly navPatientProfile: Locator;

  // actions
  readonly addNewProfileBtn: Locator;
  readonly searchByDropdown: Locator;
  readonly searchByName: Locator;
  readonly searchProfileBtn: Locator;
  readonly searchProfileInput: Locator;

  // patient form
  readonly lastNameInput: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly birthdayInput: Locator;
  readonly genderSelection: Locator;
  readonly maleGenderOption: Locator;

  // address selectors
  readonly regionSelection: Locator;
  readonly provinceSelection: Locator;
  readonly cityMunicipalitySelection: Locator;
  readonly barangaySelection: Locator;
  readonly regionOption: Locator;
  readonly provinceOption: Locator;
  readonly cityMunicipalityOption: Locator;
  readonly barangayOption: Locator;

  // buttons
  readonly continueBtn: Locator;
  readonly saveBtn: Locator;
  readonly addPatientBtn: Locator;

  // table / actions
  readonly patientTable: Locator;
  readonly viewBtn: Locator;
  readonly editProfileBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // navigation
    this.navPatientProfile = page.locator('#nav-item-patient-profiles');

    // actions
    this.addNewProfileBtn = page.locator('#add-new-user-button');
    this.searchByDropdown = page.locator('#searchBy');
    this.searchByName = page.locator('#item-search-by-name');
    this.searchProfileBtn = page.locator('#search-profile-info-btn');
    this.searchProfileInput = page.locator('#profile-search-textfield');

    // patient form
    this.lastNameInput = page.locator('#last-name');
    this.firstNameInput = page.locator('#first-name');
    this.middleNameInput = page.locator('#middle_name');
    this.birthdayInput = page.locator('#birthDate');
    this.genderSelection = page.locator('#gender');
    this.maleGenderOption = page.locator("//li[normalize-space()='Male']");

    // address
    this.regionSelection = page.locator('#region');
    this.provinceSelection = page.locator('#province');
    this.cityMunicipalitySelection = page.locator('#cityMunicipality');
    this.barangaySelection = page.locator('#barangay');

    this.regionOption = page.locator("//li[normalize-space()='Region VII (Central Visayas)']");
    this.provinceOption = page.locator("//li[normalize-space()='Bohol']");
    this.cityMunicipalityOption = page.locator('[data-value="Batuan"]');
    this.barangayOption = page.locator('[data-value="Poblacion Norte"]');

    // buttons
    this.continueBtn = page.locator('#add-patient-continue-btn');
    this.saveBtn = page.locator('#submit-fab-button');
    this.addPatientBtn = this.continueBtn; // avoid duplicate

    // table
    this.patientTable = page.locator('.css-sk1lv2');
    this.viewBtn = page.getByTestId('VisibilityIcon');
    this.editProfileBtn = page.getByTestId('EditIcon');
  }

  /** Navigate to the Patient Profile page */
  async goto(): Promise<void> {
    await this.page.goto(this.url);
    await expect(this.navPatientProfile).toBeVisible();
  }

  /** Open patient profile via nav */
  async openFromNav(): Promise<void> {
    await this.navPatientProfile.click();
    await expect(this.page).toHaveURL(/patient-profiles/);
  }

  /** Fill out search form */
  async searchByNameInput(lastName: string, firstName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
    await this.firstNameInput.fill(firstName);
    await this.searchProfileBtn.click();
  }

  /** Add a new patient */
  async addNewPatient(last: string, first: string, middle: string, birthday: string): Promise<void> {
    await this.addNewProfileBtn.click();
    await this.lastNameInput.fill(last);
    await this.firstNameInput.fill(first);
    await this.middleNameInput.fill(middle);
    await this.birthdayInput.fill(birthday);
    await this.genderSelection.click();
    await this.maleGenderOption.click();

    await this.regionSelection.click();
    await this.regionOption.click();

    await this.provinceSelection.click();
    await this.provinceOption.click();

    await this.cityMunicipalitySelection.click();
    await this.cityMunicipalityOption.click();

    await this.barangaySelection.click();
    await this.barangayOption.click();

    await this.addPatientBtn.click();
  }
}
