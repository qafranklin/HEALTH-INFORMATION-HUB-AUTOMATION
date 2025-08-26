import { test, expect } from '@playwright/test';
import { PageManager } from "../../Common/PageManager";
import { getConfig } from '../../utils/config';
import fs from 'fs';

const config = getConfig();

test('TC491786 - User can Search patient using search profile', async ({ page }) => {
  const pageManager = new PageManager(page);
  const loginPage = pageManager.LoginSelectors();
  const patientProfileSelectors = pageManager.PatientProfilesSelectors();

  // Declare variables in outer scope
  let firstName: string;
  let lastName: string;

  // 🟩 LOGIN
  await test.step("Login User Account", async () => {
    await loginPage.login();
    await page.waitForLoadState('networkidle'); // Consider replacing with proper wait
  });

  // 🟩 NAVIGATE TO PATIENT PROFILES
  await test.step("Navigate to Patient Profiles Module", async () => {
    await patientProfileSelectors.navigatepatietnProfile();
    await expect(page).toHaveURL(/\/patient-profiles$/);

    // Read patient data
    const patientData = JSON.parse(fs.readFileSync('patientData.json', 'utf-8'));
    firstName = patientData.firstName;
    lastName = patientData.lastName;
  });

  // 🟩 SEARCH AND EDIT PATIENT
  await test.step('Search Patient Profile and validate fields', async () => {
    await patientProfileSelectors.searchprofileInput.fill(`${lastName} ${firstName}`);
    await patientProfileSelectors.editprofileBtn.first().click();
    await page.locator('#birth_place').fill('Birth Place Update');
    await patientProfileSelectors.geninfosaveBtn.click();
    await expect(page.getByText('Record updated successfully')).toBeVisible();
  });
});
