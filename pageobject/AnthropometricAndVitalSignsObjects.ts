import { Locator, Page } from '@playwright/test';

export class AnthropometricSelectors {
  readonly page: Page;
  readonly anthroURL: string;
  readonly btnAnthro: Locator;
  readonly inputSelector: Locator;
  readonly saveformBtn: Locator;
  readonly height: Locator;
  readonly weight: Locator;
  readonly bmi: Locator;
  readonly waist: Locator;
  readonly head: Locator;
  readonly chest: Locator;
  readonly abdominal: Locator;
  readonly temp: Locator;
  readonly heartrate: Locator;  
  readonly respiratoryrate: Locator;
  readonly oxygen: Locator;
  readonly bloodpressure: Locator;
  readonly saveSucc: Locator;
  readonly headerBTN: Locator;
  readonly blood: Locator;
  readonly heightDisplay: Locator;
  readonly weightDisplay: Locator;
  readonly bmiDisplay: Locator;
  readonly heartrateDisplay:Locator;
  readonly tempDisplay: Locator;
  readonly respiratoryDisplay: Locator;
  readonly oxygenDisplay: Locator;


  constructor(page: Page) {
    this.page = page;
    this.anthroURL = 'https://bps-dev-web-cjhdeqb4chg7fvdp.australiaeast-01.azurewebsites.net/about';
    this.btnAnthro = page.locator('[id="nav-item-visits-anthropometric-and-vital-signs"]');
    this.inputSelector =  page.locator('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1xuam64"]');
    this.height = page.locator('[id="height"]');
    this.weight = page.locator('[id="weight"]');
    this.bmi = page.locator('[id="bmi"]');
    this.waist = page.locator('[id="waistcircumference"]');
    this.head = page.locator('[id="headcircumference"]');
    this.chest = page.locator('[id="chestcircumference"]');
    this.abdominal = page.locator('[id="abdominalcircumference"]');
    this.temp = page.locator('[id="temperature"]');
    this.heartrate = page.locator('[id="heartrate"]');
    this.respiratoryrate = page.locator('[id="respiratoryrate"]');
    this.oxygen = page.locator('[id="oxygensaturation"]');
    this.bloodpressure = page.locator('[id="bloodPressure"]');
    this.saveformBtn = page.locator('#submit-fab-button')
    this.saveSucc = page.locator('[class="go3958317564"]');
    this.headerBTN = page.locator('[data-testid="ExpandOutlinedIcon"]');
    this.blood = page.locator('[id="blood-pressure"]');
    this.heightDisplay = page.locator('p#height');
    this.weightDisplay = page.locator('p#patient-weight');
    this.bmiDisplay = page.locator('p#bmi');
    this.heartrateDisplay = page.locator('p#heart-rate');
    this.tempDisplay = page.locator('p#temperature');
    this.respiratoryDisplay = page.locator('p#respiratory-rate');
    this.oxygenDisplay = page.locator('p#oxygen-saturation');


  }

}
