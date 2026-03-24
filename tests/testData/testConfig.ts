/**
 * Test configuration and settings
 * Contains global test data like timeouts, retry counts, etc.
 */

export const testConfig = {
  // Test execution settings
  execution: {
    retryCount: 0,
    headlessMode: false,
    slowMoMs: 0
  },

  // Test environment
  environment: {
    baseUrl: 'https://www.amazon.com',
    timeout: 45000,
    navigationTimeout: 30000
  },

  // Browser settings
  browser: {
    type: 'chromium',
    args: ['--disable-blink-features=AutomationControlled']
  },

  // Reporting settings
  reporting: {
    screenshotOnFailure: true,
    videoOnFailure: true,
    traceOnFailure: true
  }
};

/**
 * Get test configuration
 */
export const getTestConfig = () => testConfig;

/**
 * Get timeout configuration
 */
export const getTimeoutConfig = () => testConfig.environment;
