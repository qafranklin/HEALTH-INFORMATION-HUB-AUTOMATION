import { Locator, Page } from '@playwright/test';

export class visitsselectors {
  page: Page;
  aboutUsURL: string;
  visitsNav: Locator;
  addvisitsBtn: Locator;
  searchby: Locator;
  searchbypatientid: Locator;
  profileId: Locator;
  searchBtn: Locator;
  searchInput: Locator;
  readonly viewBtn: Locator;
  filterBtn: Locator;
  readonly visitsSucc: Locator;
  readonly searchPatientBar: Locator;
  readonly editBtn: Locator;
  backBtn: Locator;
  readonly searchrecordform: Locator;
  readonly searchbyname: Locator;
  readonly visitslastname: Locator;
  readonly visitsfirstname: Locator;
  readonly recordfound: Locator;
  readonly patientidinput: Locator;
  readonly visitgender: Locator;
  readonly visitsbirthdate: Locator;
  readonly visitscontinuebtn: Locator;
  readonly visitsdeletebtn: Locator;
  readonly visitsaddpatientbtn: Locator;
  readonly gendermaleopt: Locator;
  readonly visitstoaster: Locator;
  readonly visitsfilterbtn: Locator;
  readonly child1: Locator;
  readonly child2: Locator;
  readonly searchaddvisits: Locator;
  // Main Login Page
  readonly loginpageisVisible;

  constructor(page: Page) {
    this.page = page;
    this.aboutUsURL = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/about';
    this.visitsNav = page.locator('#nav-item-visits');
    this.addvisitsBtn = page.locator('#add-new-user-button');
    this.searchby = page.locator('#searchBy');
    this.searchbypatientid = page.locator('#item-search-by-patient-id');
    this.profileId = page.locator('#profile-id');
    this.searchBtn = page.locator("//button[@id='search-profile-info-btn']");
    this.searchInput = page.locator('#profile-search-textfield');
    this.filterBtn = page.locator('#filter-button');
    this.backBtn = page.locator('#patient-profile-back-button');
    this.editBtn = page.locator('[data-testid="EditIcon"]');
    this.visitsSucc = page.locator('[class="go3958317564"]');
    this.searchPatientBar = page.locator('[id="profile-search-textfield"]');
    this.viewBtn = page.locator('[data-testid="VisibilityIcon"]'); 
    this.searchrecordform = page.locator('#visit-search-form');
    this.searchbyname = page.locator('#item-search-by-name');
    this.visitslastname = page.locator('#last-name');
    this.visitsfirstname = page.locator('#first-name');
    this.recordfound = page.locator('.css-1xvol0l');
    this.patientidinput = page.locator('#profile-id');
    this.visitgender = page.locator('#gender');
    this.visitsbirthdate = page.locator('#birth-date');
    this.visitscontinuebtn = page.locator('#add-patient-continue-btn');
    this.visitsdeletebtn = page.locator('.css-1oh17lj');
    this. visitsaddpatientbtn = page.locator('#add-patient-continue-btn');
    this.gendermaleopt = page.locator("//li[normalize-space()='Male']");
    this.visitstoaster = page.locator("div[class='go4109123758']");
    this.visitsfilterbtn = page.locator('#filter-button');
    this.child1 = page.locator("tr[class='MuiTableRow-root css-1xvol0l'] td:nth-child(1)");
    this.child2 = page.locator("div[role='presentation'] button:nth-child(2)");
    this.searchaddvisits = page.locator("(//button[normalize-space()='Add Visit'])[1]");
    this.loginpageisVisible = page.locator('[id="root"]');
  }


}
