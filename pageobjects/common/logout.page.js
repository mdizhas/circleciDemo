/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage {
    /**
     * define selectors using getter methods
     */
    get btnLogout() {
        return $('body > div.wrapper > nav > ul.navbar-nav.ml-auto > li.dropdown.user.user-menu.custom-user-menu.show > ul > li.user-footer > div.pull-right > a')
    }

    get dropDownMenu() {
        return $('body > div.wrapper > nav > ul.navbar-nav.ml-auto > li.dropdown.user.user-menu.custom-user-menu > a')
    }

    get validLogoutText() {
      return $('#new_user > div:nth-child(3) > p')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await this.dropDownMenu.click()
        await this.btnLogout.click()
    }
}

module.exports = new LogoutPage()
