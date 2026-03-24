/**
 * Amazon Test Data
 * Contains all test data for Amazon page tests
 */

export const amazonTestData = {
  // User credentials
  users: {
    testUser: {
      email: 'jagadeeshwarij6@gmail.com',
      name: 'Test User'
    }
  },

  // Search data
  search: {
    searchTerms: ['Electr', 'electronics'],
    productName: 'Snap Circuits Jr. SC-'
  },

  // Navigation data
  navigation: {
    categories: ['Electronics'],
    homePage: 'Amazon.com',
    region: 'India'
  },

  // Product data
  products: {
    electronics: {
      name: 'Snap Circuits Jr. SC-100',
      category: 'Electronics',
      searchTerm: 'Electr'
    }
  },

  // Page text assertions
  pageTexts: {
    electronics: 'Electronics',
    logoVisible: 'Amazon Logo'
  }
};

/**
 * Get test data for a specific user
 */
export const getTestUser = () => amazonTestData.users.testUser;

/**
 * Get search data
 */
export const getSearchData = () => amazonTestData.search;

/**
 * Get product data
 */
export const getProductData = (productName: string = 'electronics') => {
  return amazonTestData.products[productName as keyof typeof amazonTestData.products];
};
