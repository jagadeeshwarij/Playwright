import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Configure test retries
  retries: 2,

  // Configure the browsers to run tests on
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Configure HTML reporting
  reporter: [['html', { outputFolder: 'artifacts/html-report' }]],

  // Take screenshots on failure
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});