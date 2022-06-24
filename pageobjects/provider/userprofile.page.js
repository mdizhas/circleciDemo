
/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserProfilePage {
  /**
   * define selectors using getter methods
   */

  get userProfileLink() {
    return $('.dropdown-toggle.btn')
  }

  get btnProfile() {
    return $('.btn.btn-primary.btn-flat')
  }

  get btnLogout() {
    return $('.btn.btn-danger.btn-flat')
  }

  get firstName() {
    return $('#user_first_name')
  }

  get lastName() {
    return $('#user_last_name')
  }

  get email() {
    return $('#user_email')
  }

  get newPassword() {
    return $('#user_password')
  }

  get confirmPassword() {
    return $('#user_password_confirmation')
  }

  get currentPassword() {
    return $('#user_current_password')
  }

  get btnUpdate() {
    return $("input[value='Update']")
  }
  get btnBack() {
    return $('.btn.btn-dark')
  }

  get emailErrorMessage() {
    return $("div[id='error_explanation'] h2")
  }

  /**
 * a method to encapsule automation code to interact with the page
 * e.g. to login using username and password
 */
  async clickProfileLink() {
    await this.userProfileLink.click()
  }

  async clickProfileBtn() {
    await this.btnProfile.click()
  }

  async clickUpdateBtn() {
    await this.btnUpdate.click()
  }

  async clickBackBtn() {
    await this.btnBack.click()
  }

  async updateProfile(fname, lname, email) {
    await this.firstName.setValue(fname)
    await this.lastName.setValue(lname)
    await this.email.setValue(email)
    await this.btnUpdate.click()
  }

  async verifyEmailErrorValidation(fname, lname, email) {
    await this.firstName.setValue(fname)
    await this.lastName.setValue(lname)
    await this.email.click()
    await this.email.clearValue(email)
    await this.btnUpdate.click()
  }

  async getLoggedInAccountName() {
    return this.userProfileLink.getText()
  }

  async changeProfilePassword(newpassword, confirmpassword, currentpassword) {
    await this.clickProfileLink()
    await this.clickProfileBtn()
    await this.newPassword.setValue(newpassword)
    await this.confirmPassword.setValue(confirmpassword)
    await this.currentPassword.setValue(currentpassword)
    await this.clickUpdateBtn()
  }
}
module.exports = new UserProfilePage()