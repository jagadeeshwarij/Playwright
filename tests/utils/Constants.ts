/**
 * Application URLs
 */
export const URLS = {
  AMAZON_HOME: 'https://www.amazon.com/',
  AMAZON_ELECTRONICS: 'https://www.amazon.com/s?k=electronics&crid=2N7W8XFCY61OT&sprefix=Electr%2Caps%2C398&ref=nb_sb_ss_p13n-expert-pd-ops-ranker_6_6'
};

/**
 * Element Selectors
 */
export const SELECTORS = {
  AMAZON_LOGO: '#nav-logo-sprites',
  SEARCH_BOX: 'input[placeholder*="Search"]',
  CART_BUTTON: '#a-autoid-1-announce',
  CLEAR_BUTTON: '#claim-input-clear-button',
  ELECTRONICS_LINK: 'a',
  SIGN_IN_BUTTON: '#nav-link-accountList',
  MENU_BACKGROUND: '#hmenu-canvas-background'
};

/**
 * Element Names for Role-based selectors
 */
export const ELEMENT_NAMES = {
  SEARCH_AMAZON: 'Search Amazon',
  ELECTRONICS_BUTTON: 'electronics',
  SUBMIT_BUTTON: 'Submit',
  DELIVER_TO_INDIA: 'Deliver to India',
  SIGN_IN_ADDRESSES: 'Sign in to see your addresses',
  CONTINUE_BUTTON: 'Continue',
  CHANGE_LINK: 'Change',
  DELETE_SNAP_CIRCUITS: 'Delete Snap Circuits Jr. SC-',
  ALL_CATEGORIES_MENU: 'Open All Categories Menu'
};

/**
 * Timeouts (in milliseconds)
 */
export const TIMEOUTS = {
  SHORT: 2000,
  MEDIUM: 10000,
  LONG: 15000,
  PAGE_LOAD: 30000
};

/**
 * Import test data from testData folder
 */
import { amazonTestData, getTestUser, getSearchData, getProductData } from '../testData';

/**
 * Test Data - consolidated from testData folder
 */
export const TEST_DATA = amazonTestData;
