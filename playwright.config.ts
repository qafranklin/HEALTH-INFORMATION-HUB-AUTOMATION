import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 🌱 Load environment variables from env/dev.env or fallback to .env
const envName = process.env.ENVIRONMENT || 'test';
dotenv.config({ path: path.resolve(__dirname, `./env/${envName}.env`) });

export default defineConfig({
  timeout: 90000, // Max test time: 80s
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1, // ✅ One worker (you requested this)

    reporter: [
    ['html'],
    // ['allure-playwright', { outputFolder: 'allure-results' }] 
    // ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_APP_URL, // ✅ Use env-based base URL
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // You can re-enable others if needed
  ],

  // Optional: Dev server for local testing
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
