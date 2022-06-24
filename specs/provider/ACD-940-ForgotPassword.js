
const LoginPage = require('../../pageobjects/common/login.page')
const ForgotPasswordPage = require('../../pageobjects/provider/forgotpassword.page')
const LogoutPage = require('../../pageobjects/common/logout.page')

describe("ACD-940 Forgot Password/", function () {

    const users = [{
        "email": "qa+provider@mdally.com",
        "password": "TEMP@ssw0rd",
        "invalidpassword": "TEMP@ssw0rd123"
    },
    {
        "email": "qa+agency@mdally.com",
        "password": "TEMP@ssw0rd",
        "invalidpassword": "TEMP@ssw0rd123"
    },
    {
        "email": "qa+psap@mdally.com",
        "password": "TEMP@ssw0rd",
        "invalidpassword": "TEMP@ssw0rd123"
    },
    {
        "email": "qa+ops@mdally.com",
        "password": "TEMP@ssw0rd",
        "invalidpassword": "TEMP@ssw0rd123"
    }]
    users.forEach((user) => {

        it(`Verify forgot password by user ${user.email}`, async function () {

            await LoginPage.open()
            await LoginPage.login(user.email, user.invalidpassword)
            await expect(LoginPage.invalidLoginText).toHaveText('Invalid Email or password.')
            await browser.pause(2000)
            await ForgotPasswordPage.clickForgotPassword()
            await expect(ForgotPasswordPage.resetHeaderText).toHaveText('Reset Your Password')
            await browser.pause(2000)
            await ForgotPasswordPage.reset(user.email)
            await browser.pause(2000)
            await expect(ForgotPasswordPage.resetEmailReceiveText).toHaveText('You will receive an email with instructions on how to reset your password in a few minutes.')
            await LoginPage.login(user.email, user.password)
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
            await browser.pause(2000)
            await LogoutPage.logout()
            await expect(LogoutPage.validLogoutText).toHaveText('You need to sign in before continuing.')
        })
    })
})