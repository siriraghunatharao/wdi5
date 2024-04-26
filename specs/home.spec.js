const HomePage = require('../pageobjects/home');
const LoginPage = require('../pageobjects/login');
const wait = require('../utils/baseWait')
const _ui5Service = require('wdio-ui5-service').default;
const wdioUI5Service = new _ui5Service();

describe('Home Dashboard', function () {
    it('Launch S4M and login with S-User', async () => {
        await LoginPage.iShouldOpenTheApp('#/');
        await wdioUI5Service.injectUI5();
        await LoginPage.acceptBrowserCookies();
        wait.medium();
        await HomePage.iShouldLandOnHomePage();
    });
    it("Get started with UI5", async () => {
        await HomePage.clickOnGetStartedWithUi5();
        await HomePage.iShouldSeeUi5StartPage();
    });
});