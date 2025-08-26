import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { PageManager } from "../../Common/PageManager";
import fs from 'fs';


test("@Smoke TC490440 - User can log in, create a patient profile with random name, and verify creation", async ({ page }) => {
  const pageManager = new PageManager(page);
  const loginPage = pageManager.LoginSelectors();
  const patientProfileSelectors = pageManager.PatientProfilesSelectors();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // 🟩 LOGIN
  await test.step("Login User Account", async () => {
    await loginPage.login();
    await page.waitForLoadState('networkidle');
 // better than fixed timeout
  });

  // 🟩 NAVIGATE TO PATIENT PROFILES
  await test.step("Navigate to Patient Profiles Module", async () => {
    await patientProfileSelectors.navigatepatietnProfile();
    await expect(page).toHaveURL(patientProfileSelectors.patientprofileUrl);
  });

  // 🟩 OPEN ADD NEW PROFILE
  await test.step("Open Add New Profile and Select Search by Name", async () => {
    await patientProfileSelectors.addnewprofileBtn.click();
    await expect(patientProfileSelectors.searchBy).toBeVisible();
    await patientProfileSelectors.searchBy.click();
    await patientProfileSelectors.searchbyName.click();
  });

  // 🟩 FILL IN PATIENT DETAILS
  await test.step("Fill in Patient Details", async () => {
    await patientProfileSelectors.lastnameInput.fill(lastName);
    await patientProfileSelectors.firstnameInput.fill(firstName);
    await patientProfileSelectors.birthdayInput.fill("02/05/1998");
    await patientProfileSelectors.searchparofileBtn.click();
    console.log('Patient Name:',lastName,firstName);
    fs.writeFileSync('patientData.json', JSON.stringify({ lastName, firstName }));
  });

  // 🟩 SELECT GENDER
  await test.step("Add Gender and Continue", async () => {
    await patientProfileSelectors.genderSelection.click();
    await patientProfileSelectors.malegenderOption.click();
    await patientProfileSelectors.addpatientcontinueBtn.click();
  });

  // 🟩 FILL IN ADDRESS & SUBMIT
  await test.step("Fill in Address and Submit", async () => {
    await patientProfileSelectors.regionSelection.click();
    await page.getByText(patientProfileSelectors.regionOption).click();

    await patientProfileSelectors.provinceSelection.click();
    await patientProfileSelectors.provinceOption.click();

    await patientProfileSelectors.citymunicipalitySelection.click();
    await patientProfileSelectors.citymunicipalityOption.click();

    await patientProfileSelectors.barangaySelection.click();
    await patientProfileSelectors.barangayOption.click();

    await patientProfileSelectors.addpatientBtn.click();

    await expect(page.locator("div[class='go4109123758']"))
      .toHaveText("Profile created successfully", { timeout: 5000 });
  });

  // 🟩 VERIFY PATIENT WAS ADDED
  await test.step("Verify the Patient Was Added", async () => {
    const searchField = page.locator("#profile-search-textfield");
    const fullName = `${lastName}, ${firstName}`;
    const nameEntry = page.getByText(fullName, { exact: false });

    await searchField.fill(fullName);
    await expect(nameEntry).toBeVisible({ timeout: 5000 });
  });
});
