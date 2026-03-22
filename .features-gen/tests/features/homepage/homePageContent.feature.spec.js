// Generated from: tests\features\homepage\homePageContent.feature
import { test } from "playwright-bdd";

test.describe('Playwright site', () => {

  test('Verify tiles present in our tools section on home page', async ({ Given, Then, And, page }) => { 
    await Given('The user is navigated to selectors hub home page', null, { page }); 
    await Then('The user verifies that \'Our Tools\' section is visible on homepage', null, { page }); 
    await And('The user verifies that \'SelectorsHub\' tile is present under our tools section on homepage', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\homepage\\homePageContent.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The user is navigated to selectors hub home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then The user verifies that 'Our Tools' section is visible on homepage","stepMatchArguments":[{"group":{"start":23,"value":"'Our Tools'","children":[{"children":[{"children":[]}]},{"start":24,"value":"Our Tools","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"And The user verifies that 'SelectorsHub' tile is present under our tools section on homepage","stepMatchArguments":[{"group":{"start":23,"value":"'SelectorsHub'","children":[{"children":[{"children":[]}]},{"start":24,"value":"SelectorsHub","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end