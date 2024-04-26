module.exports = {
    // Actions
    clickOnGetStartedWithUi5: async (sBoolean,sPath) => {
        var startUi5 = await browser.asControl({
            selector: {
                controlType: "sap.m.Button",
                viewName: "sap.ui.documentation.sdk.view.Welcome",
                viewId: "sdk---welcome",
                i18NText: { propertyName: "text", key: "WELCOME_BLOCK_1_START_BTN" },
                interaction: { idSuffix: "BDI-content" }
            }
        });
        await (await startUi5.getWebElement()).click();
    },
    //Assertions
    iShouldLandOnHomePage: async () => {
        var title = await browser.asControl({
            controlType: "sap.m.Title",
            viewName: "sap.ui.documentation.sdk.view.App",
            viewId: "sdk---app",
            i18NText: { propertyName: "text", key: "APP_HEADER_TITLE" },
            interaction: { idSuffix: "inner" }
        });
        expect(await title).toBeTruthy();
    },
    iShouldSeeUi5StartPage: async () => {
        var startPage = await browser.asControl({
            selector: {
                controlType: "sap.m.Text",
                viewName: "sap.ui.documentation.sdk.view.TopicDetail",
                viewId: "sdk---topicDetail",
                bindingPath: {
                        path: "",
                        propertyPath: "/topictitle1"
                }
        }});
        expect(await startPage).toBeTruthy();
    }
}