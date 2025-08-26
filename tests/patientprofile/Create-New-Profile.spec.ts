import { test, expect } from '@playwright/test';
import { PageManager } from '../../pageobjectmanager/PageManager';
import { faker } from "@faker-js/faker";
import fs from 'fs';

test('Create Patient Profile', async ({ page }) => {
  const pageManager = new PageManager(page);

  // Generate random patient name
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  // 🟩 LOGIN
  await test.step('Navigate to Login and authenticate', async () => {
    const loginUrl = 'https://beacon-accountweb-dev.azurewebsites.net/login?callback=https%3A%2F%2Fbps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net%2F&aud=3AOw&origin=/';
    await page.goto(loginUrl);
    await page.locator('#email').fill('fortestautomate@mailinator.com');
    await page.locator('#password').fill('abcdE123!');
    await page.locator('button[type="submit"]').click();
  //   await expect(page.locator('#home-dashboard')).toBeVisible({ timeout: 10000 }); // Wait for main dashboard
  });

  // 🟩 NAVIGATE TO PATIENT PROFILE
  await test.step('Access Patient Profile module', async () => {
    await pageManager.patientProfile.navPatientProfile.click();
    await expect(page).toHaveURL(/\/patient-profiles$/);
  });

  // 🟩 OPEN ADD NEW PROFILE
  await test.step("Open Add New Profile and select 'Search by Name'", async () => {
    await pageManager.patientProfile.addNewProfileBtn.click();
    const profilePage = pageManager.patientProfile;
    await expect(profilePage.searchByDropdown).toBeVisible();
    await profilePage.searchByDropdown.click();
    await profilePage.searchByName.click();
  });

  await test.step("Fill in Patient Details", async () => {
    await pageManager.patientProfile.lastNameInput.fill(lastName);
    await pageManager.patientProfile.firstNameInput.fill(firstName);
    await pageManager.patientProfile.birthdayInput.fill("02/05/1998");
    await pageManager.patientProfile.searchProfileBtn.click();
    console.log('Patient Name:',lastName,firstName);
    fs.writeFileSync('patientData.json', JSON.stringify({ lastName, firstName }));
  });

  await test.step("Add Gender and Continue", async () => {
    await pageManager.patientProfile.genderSelection.click();
    await pageManager.patientProfile.maleGenderOption.click();
    await pageManager.patientProfile.continueBtn.click();
  });

   // 🟩 FILL IN ADDRESS & SUBMIT
  await test.step("Fill in Address and Submit", async () => {
    await pageManager.patientProfile.regionSelection.click();
    await pageManager.patientProfile.regionOption.click();

    await pageManager.patientProfile.provinceSelection.click();
    await pageManager.patientProfile.provinceOption.click();

    await pageManager.patientProfile.cityMunicipalitySelection.click();
    await pageManager.patientProfile.cityMunicipalityOption.click();

    await pageManager.patientProfile.barangaySelection.click();
    await pageManager.patientProfile.barangayOption.click();

    await pageManager.patientProfile.addPatientBtn.click();

    await expect(page.locator("div[class='go4109123758']"))
      .toHaveText("Profile created successfully", { timeout: 10000 });
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
