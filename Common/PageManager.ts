import { Page } from '@playwright/test';
import { AboutUsPage } from '../pageobject/AboutUsObjects';
import { LoginPage } from '../pageobject/LoginPage';
import { HomePageSelectors } from '../pageobject/HomePage';
import {HouseHoldProfile} from '../pageobject/householdprofileobject';
import {visitsselectors} from '../pageobject/visitobject';
import { systemsetiingsselectors} from '../pageobject/systemsettingsobject';
import { AnthropometricSelectors } from '../pageobject/AnthropometricAndVitalSignsObjects';
import { DashboardPage} from '../pageobject/dashobject';
import { HealthHistoryPage } from '../pageobject/healthhistoryobject';
import {PatientProfilesSelectors} from './../pageobject/patientprofilesobject';
import {WomensHealthSelectors} from '../pageobject//WomensHealthObjects';
import { SocioeconomicClassificationPage } from '../pageobject/socioeconomicclassficationobjecst';
import { DiagnosticRecordsPage } from '../pageobject/diagnosticrecords';
import { FamilyPlanningPage } from '../pageobject/familyplaningobject';
import { MedicalConsultationPage } from '../pageobject/medicalconsultationobject';
import {VisionScreeningSelectors} from './../pageobject/visionscreeningobject';
import {MentalHealthSelectors} from './../pageobject/mentalhealthobject';
import {SoilTransmittedSelectors} from './../pageobject/soiltransmittedobject';
import {MaternalHealthSelectors} from '../pageobject/maternalhealthobject'
import { HivAidsStiPage } from '../pageobject/hivaidsstiprofileobject';



export class PageManager {
  private page: Page;
  private aboutUsPage: AboutUsPage;
  private loginPage: LoginPage;
  private homePage: HomePageSelectors;
  private householdprofile: HouseHoldProfile;
  private visitsPage: visitsselectors;
  private systemsettingsPage: systemsetiingsselectors;
  private anthropometricandvitalsignsPage: AnthropometricSelectors;
  private dashboardpage: DashboardPage;
  private healthistorypage: HealthHistoryPage;
  private patientProfilePage: PatientProfilesSelectors;
  private womensHealthPage: WomensHealthSelectors;
  private socioeconomicclassificationpage: SocioeconomicClassificationPage;
  private diagnosticrecordspage: DiagnosticRecordsPage;
  private familyplannigpage: FamilyPlanningPage;
  private medicalconsultationpage: MedicalConsultationPage;
  private visionscreeningPage: VisionScreeningSelectors;
  private mentalhealthpage: MentalHealthSelectors;
  private soiltransmittedPage: SoilTransmittedSelectors;
  private cvdncdPage: MaternalHealthSelectors;
  private hivaidsstiPage:HivAidsStiPage;

  constructor(page: Page) {
    this.page = page;
    this.aboutUsPage = new AboutUsPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePageSelectors(this.page);
    this.householdprofile = new HouseHoldProfile(this.page);
    this.visitsPage = new visitsselectors(this.page);
    this.systemsettingsPage = new systemsetiingsselectors (this.page);
    this.anthropometricandvitalsignsPage = new AnthropometricSelectors(this.page);
    this.dashboardpage = new DashboardPage(this.page);
    this.healthistorypage = new HealthHistoryPage(this.page)
    this.patientProfilePage = new PatientProfilesSelectors(this.page);
    this.womensHealthPage = new WomensHealthSelectors(this.page);
    this.socioeconomicclassificationpage = new SocioeconomicClassificationPage(this.page);
    this.diagnosticrecordspage = new DiagnosticRecordsPage(this.page);
    this.familyplannigpage = new FamilyPlanningPage(this.page);
    this.medicalconsultationpage = new MedicalConsultationPage(this.page);
    this.visionscreeningPage = new VisionScreeningSelectors(this.page);
    this.mentalhealthpage = new MentalHealthSelectors(this.page);
    this.soiltransmittedPage = new SoilTransmittedSelectors(this.page);
    this.cvdncdPage = new MaternalHealthSelectors(this.page);
    this.hivaidsstiPage = new HivAidsStiPage(this.page);
  }

  AboutUsSelectors() {
    return this.aboutUsPage;
  }
  LoginSelectors() {
    return this.loginPage;
  }
  HomepageSelectors() {
    return this.homePage;
  }
  HouseholdProfileSelectors () {
    return this.householdprofile;
  }
  VisitsSelectors () {
    return this.visitsPage;
  }
  SysemsettingsSelectors(){
    return this.systemsettingsPage;
  }
 AnthroSelectors() {
    return this.anthropometricandvitalsignsPage;
  }
  DashSelectos() {
    return this.dashboardpage;
  }
  HealthHistorySelectors (){
    return this.healthistorypage;
  }
    PatientProfilesSelectors() {
    return this.patientProfilePage;
  }
  WomensHealthSelectors() {
  return this.womensHealthPage;
  }
  Socioeconomicclassification(){
    return this.socioeconomicclassificationpage;
  }
  DiagnosticRecordsLocators(){
    return this.diagnosticrecordspage;
  }
  FamilyPlanningLocators(){
    return this.familyplannigpage;
  }
  MedicalConsultationLocators(){
    return this.medicalconsultationpage;
  }
  
  VisionScreeningSelectors (){
    return this.visionscreeningPage;
  }  
  MentalHealthSelectors (){
    return this.mentalhealthpage;
  }
  SoilTransmittedSelectors (){
    return this.soiltransmittedPage;
  }
  MaternalHealthSelectors(){
    return this.cvdncdPage;
  }
  HivAidsStiLocator(){
    return this.hivaidsstiPage;
  }
}
