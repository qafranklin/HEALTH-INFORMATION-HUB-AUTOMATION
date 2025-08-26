// managers/PageManager.ts
import type { Page } from '@playwright/test';
import { PatientProfilePage } from '../pageobject/patientprofilesObject';

export class PageManager {
  constructor(private readonly page: Page) {}

  // Lazy memoized pages
  private _patientProfile?: PatientProfilePage;

  get patientProfile(): PatientProfilePage {
    if (!this._patientProfile) {
      this._patientProfile = new PatientProfilePage(this.page);
    }
    return this._patientProfile;
  }
}
