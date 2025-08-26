import * as dotenv from 'dotenv'
import * as path from 'path';

export function getConfig() {
  return {
    baseappUrl: process.env.BASE_APP_URL || '',
    patientId: process.env.PATIENTA_ID || '',
    username: process.env.EMAILA || '',
    password: process.env.PASSWORD || '',
    visitsid: process.env.PATIENTA_VISIT_ID || '',
    visitId: process.env.VISITS_ID || '',
    lastname: process.env.PATIENT_LASTNAME || '',
    firstname: process.env.PATIENT_FIRSTNAME || '',
    UserName: process.env.EMAILD || '',
    PassWord: process.env.PASSWORDK || '',
    SearchPat: process.env.SEARCH_PATIENT || '',

  };
}



