
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ForgotPasswordPage {
    /**
     * define selectors using getter methods
     */
   
    get forgotpasswordLink() {
        return $("form[id='new_user'] a[class='forgot-text']")
    }

    get resetHeaderText() {
        return $(".auth-main-title")
    }

    get inputEmail() {
        return $('#user_email')
    }

    get btnResetSubmit() {
        return $("input[value='Submit']")
    }

    get resetEmailReceiveText() {
        return $(".font-weight-bold.text-success")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async clickForgotPassword() {
        await this.forgotpasswordLink.click()
      }

      async reset(email) {
        await this.inputEmail.setValue(email)
        await this.btnResetSubmit.click()
      }
}
module.exports = new ForgotPasswordPage()
