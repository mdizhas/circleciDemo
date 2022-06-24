class Utils {
    async doClick(element) {
        await element.waitForDisplayed()
        await element.click()
    }

    async doSetValue(element, value) {
        await element.waitForDisplayed()
        await element.setValue(value)
    }

    async doGetText(element) {
        await element.waitForDisplayed()
        return await element.getText()
    }

    async doIsDisplayed(element) {
        await element.waitForDisplayed()
        return element.isDisplayed()
    }

    async doGetTitle() {
        return browser.getTitle()
    }

    async doGetAutoSuggestionSearchValue(element, element1, value) {
        await element.waitForDisplayed()
        await element.setValue(value)
        await browser.pause(2000)
        if ((await (await element1).getText()) === "No matches found.") {
            await browser.pause(2000)
            console.log("Search value not found", value)
            await element.keys(['Control', 'a'])
            await browser.pause(2000)
            await element.keys("Delete")
        } else {
            await browser.pause(2000)
            await element.keys("ArrowDown")
            await browser.pause(2000)
            await element.keys("Enter")
            await browser.pause(2000)
        }
    }
}
module.exports = new Utils()