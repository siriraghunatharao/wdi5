module.exports = {
    // Actions
    iShouldOpenTheApp: async (sTarget) => {
        await browser.goTo(sTarget);
    },
    acceptBrowserCookies: async () => {
        var acceptCookie = await browser.asControl({
            selector: {
                controlType: "sap.m.Button",
                viewName: "sap.ui.documentation.sdk.view.App",
                viewId: "sdk---app",
                i18NText: {
                        propertyName: "text",
                        key: "COOKIE_SETTINGS_DIALOG_FUNCTIONAL_COOKIES_ACCEPT_ALL"
                },
                searchOpenDialogs: true,
                interaction: {
                        idSuffix: "BDI-content"
                }
        }});
        await (await acceptCookie.getWebElement()).click();
    }
}