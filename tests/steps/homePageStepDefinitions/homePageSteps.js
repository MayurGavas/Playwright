//import { Given, When, Then} from 'playwright-bdd/steps';
import { page, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();

Given('The user is navigated to selectors hub home page', async ({page}) => {
    await page.goto("https://selectorshub.com/");
    //await page.waitForLoadState("networkidle");
});

Then('The user verifies that {string} section is visible on homepage', async ({page}, sectionName) => {
    let actualSectionName = await page.locator("//div[@class='section-label']/span").textContent();
    console.log(actualSectionName)
    await expect(actualSectionName).toBe(sectionName);
});

Then('The user verifies that {string} tile is present under our tools section on homepage', async ({page}, tileName) => {
    await expect(page.locator("//div[@class='tool-info']/div[1]").first()).toContainText(tileName);
});