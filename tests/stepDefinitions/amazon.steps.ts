import AmazonPage from '../pageObject/AmazonPage';

import { Given, When, Then } from '@cucumber/cucumber';
// Remove direct import of page; use World context in each step

let amazonPage: AmazonPage;

Given('I open the Amazon homepage', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.gotoHome();
});

Then('I should see the Amazon link', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.verifyAmazonLink();
});

When('I search for {string}', async function (searchTerm: string) {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.searchElectronics(); // searchTerm can be passed if needed
});

When('I click on the electronics button', async () => {
  // already included in searchElectronics
});

When('I submit the search', async () => {
  // already included in searchElectronics
});

When('I select delivery to India', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.setDeliveryToIndia();
});

When('I click sign in to see addresses', async () => {
  // handled in signIn
});

When('I enter email {string}', async function (email: string) {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.signIn(email);
});

When('I continue login', async () => {
  // included in signIn
});

When('I change the claim input', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.changeClaimInput();
});

When('I navigate to electronics search results', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.gotoElectronicsResults();
});

When('I delete Snap Circuits Jr item', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.deleteItem();
});

Then('I should see the All Categories menu', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.verifyCategoriesMenu();
});

When('I open the All Categories menu', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.openCategoriesMenu();
});

When('I select Electronics category', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.selectElectronicsCategory();
});

Then('I should see Electronics section text', async function () {
  amazonPage = new AmazonPage(this.page);
  await amazonPage.verifyElectronicsText();
});