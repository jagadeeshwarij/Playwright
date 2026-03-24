import { Page, expect } from '@playwright/test';
import { CommonActions } from '../utils/CommonActions';
import { URLS, SELECTORS, ELEMENT_NAMES, TIMEOUTS, TEST_DATA } from '../utils/Constants';

export default class AmazonPage {
  private commonActions: CommonActions;

  constructor(private page: Page) {
    this.commonActions = new CommonActions(page);
  }

  async gotoHome(): Promise<void> {
    await this.commonActions.navigateTo(URLS.AMAZON_HOME);
  }

  async verifyAmazonLink(): Promise<void> {
    const logoLocator = this.commonActions.getLocatorBySelector(SELECTORS.AMAZON_LOGO);
    await this.commonActions.waitForElementVisibility(logoLocator, TIMEOUTS.MEDIUM);
    await this.commonActions.verifyElementIsVisible(logoLocator);
  }

  async searchElectronics(): Promise<void> {
    const searchBox = this.commonActions.getElementByRole('searchbox', ELEMENT_NAMES.SEARCH_AMAZON);
    await this.commonActions.clickElement(searchBox);
    await this.commonActions.fillInput(searchBox, TEST_DATA.search.searchTerms[0]);
    
    const electronicsButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.ELECTRONICS_BUTTON, true);
    await this.commonActions.clickElement(electronicsButton);
    
    const submitButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.SUBMIT_BUTTON);
    await this.commonActions.clickElement(submitButton.first());
  }

  async setDeliveryToIndia(): Promise<void> {
    const deliveryButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.DELIVER_TO_INDIA);
    await this.commonActions.clickElement(deliveryButton);
  }

  async signIn(email: string): Promise<void> {
    const signInButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.SIGN_IN_ADDRESSES);
    await this.commonActions.clickElement(signInButton);
    
    try {
      const emailInput = this.commonActions.getLocatorBySelector('input[placeholder*="email"]');
      await this.commonActions.waitForElementVisibility(emailInput, TIMEOUTS.SHORT);
      await this.commonActions.fillInput(emailInput, email || TEST_DATA.users.testUser.email);
      
      const continueButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.CONTINUE_BUTTON);
      await this.commonActions.clickElement(continueButton);
    } catch (e) {
      // Sign in form not available, skipping
    }
  }

  async changeClaimInput(): Promise<void> {
    const changeLink = this.commonActions.getElementByRole('link', ELEMENT_NAMES.CHANGE_LINK);
    
    if (await this.commonActions.clickIfVisible(changeLink, TIMEOUTS.SHORT)) {
      const clearButton = this.commonActions.getLocatorBySelector(SELECTORS.CLEAR_BUTTON);
      await this.commonActions.clickIfVisible(clearButton, TIMEOUTS.SHORT);
    }
  }

  async gotoElectronicsResults(): Promise<void> {
    await this.commonActions.navigateTo(URLS.AMAZON_ELECTRONICS);
  }

  async deleteItem(): Promise<void> {
    const cartButton = this.commonActions.getLocatorBySelector(SELECTORS.CART_BUTTON);
    
    if (await this.commonActions.clickIfVisible(cartButton, TIMEOUTS.SHORT)) {
      const deleteButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.DELETE_SNAP_CIRCUITS);
      await this.commonActions.clickIfVisible(deleteButton, TIMEOUTS.SHORT);
    }
  }

  async verifyCategoriesMenu(): Promise<void> {
    const categoriesButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.ALL_CATEGORIES_MENU);
    await this.commonActions.verifyElementIsVisible(categoriesButton);
  }

  async openCategoriesMenu(): Promise<void> {
    const categoriesButton = this.commonActions.getElementByRole('button', ELEMENT_NAMES.ALL_CATEGORIES_MENU);
    await this.commonActions.clickElement(categoriesButton);
  }

  async selectElectronicsCategory(): Promise<void> {
    const electronicsLink = this.commonActions.getLocatorByFilter(SELECTORS.ELECTRONICS_LINK, TEST_DATA.navigation.categories[0]).first();
    await this.commonActions.waitForElementVisibility(electronicsLink, TIMEOUTS.LONG);
    
    // Use force click to bypass the menu overlay
    await this.commonActions.clickElementForce(electronicsLink);
  }

  async verifyElectronicsText(): Promise<void> {
    await this.commonActions.verifyTextContent(TEST_DATA.pageTexts.electronics);
  }
}