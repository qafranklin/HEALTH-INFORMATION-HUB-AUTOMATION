import { Page, Locator } from '@playwright/test';

export class SoilTransmittedSelectors {
  readonly page: Page;
  readonly stpagenav: Locator;
  readonly staddformbtn: Locator;
  readonly addsoilform: Locator;
  readonly stsavebtn: Locator;
  readonly vssaveform: Locator;
  readonly mssuccessPrompt: Locator;
  readonly othersinput: Locator;
  readonly mhfollowupdate: Locator;
  readonly stdate: Locator;
  readonly stmedicine: Locator;
  readonly stremarks: Locator;
  readonly stsaveformbtn: Locator;
  readonly remarksfields: Locator;
  readonly medicineselection: Locator;


  constructor(page: Page) {
    this.page = page;
    this.stpagenav = page.locator('#tab_soil-transmitted');
    this.staddformbtn = page.locator('#soil_transmitted_table_add_button');
    this.addsoilform = page.locator('#soil_transmitted_create_form');
    this.stsavebtn = page.locator('#submit_soil_transmitted_helminthiasis');
    this.stdate = page.locator('#soil_transmitted_date');
    this.stmedicine = page.locator('#soil_transmitted_medicines');
    this.stremarks = page.locator('#remarks');
    this.mssuccessPrompt = page.locator('[class="go3958317564"]');
    this.othersinput = page.locator('#others');
    this.mhfollowupdate = page.locator('#soil_transmitted_date');
    this.stsaveformbtn = page.locator('#submit-fab-button');
    this.remarksfields = page.locator('#soil_transmitted_remarks_box_0');
    this.medicineselection = page.locator('[data-value="Albendazole200mg"]');
 

  } 
}
