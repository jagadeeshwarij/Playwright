import { Page, Locator, expect } from '@playwright/test';

export class CommonActions {
  constructor(private page: Page) {}

  /**
   * Navigate to a URL with load state wait
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.waitForLoadState('load');
  }

  /**
   * Wait for element to be visible with timeout
   */
  async waitForElementVisibility(locator: Locator, timeout: number = 10000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Click on element
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Click element with force option to bypass overlays
   */
  async clickElementForce(locator: Locator): Promise<void> {
    await locator.click({ force: true });
  }

  /**
   * Fill input field
   */
  async fillInput(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  /**
   * Get locator by role and name
   */
  getElementByRole(role: string, name: string, exact: boolean = false): Locator {
    return this.page.getByRole(role as any, { name, exact });
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(locator: Locator, timeout: number = 2000): Promise<boolean> {
    try {
      await locator.waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Verify element is visible using assertion
   */
  async verifyElementIsVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  /**
   * Verify text content on page
   */
  async verifyTextContent(text: string): Promise<void> {
    await expect(this.page.locator('body')).toContainText(text);
  }

  /**
   * Click element with visibility check
   */
  async clickIfVisible(locator: Locator, timeout: number = 2000): Promise<boolean> {
    if (await this.isElementVisible(locator, timeout)) {
      await this.clickElement(locator);
      return true;
    }
    return false;
  }

  /**
   * Get page locator by CSS selector
   */
  getLocatorBySelector(selector: string): Locator {
    return this.page.locator(selector);
  }

  /**
   * Get locator by filter with text content
   */
  getLocatorByFilter(selector: string, text: string): Locator {
    return this.page.locator(selector).filter({ hasText: text });
  }
}
