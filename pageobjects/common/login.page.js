

const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#user_email')
    }

    get inputPassword() {
        return $('#user_password')
    }

    get btnSubmit() {
        return $('#login')
    }

    get invalidLoginText() {
        return $('#new_user > div:nth-child(3) > p')
    }

    get validLoginText() {
        return $('.active-encounters-title')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        browser.maximizeWindow()
        return super.open('login')
    }
}

module.exports = new LoginPage()
