
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const EncounterStatusPage = require('..//..//pageobjects/provider/encounterstatus.page')

describe("ACD-938 Sign_In to AllyNet/", function () {

    const users = [{
        "email": "qa+provider@mdally.com",
        "password": "TEMP@ssw0rd",
        "username": "Michael Danvers"
    },
    {
        "email": "qa+agency@mdally.com",
        "password": "TEMP@ssw0rd",
        "username": "QA agency-testing"
    },
    // {
    //     "email": "qa+psap@mdally.com",
    //     "password": "TEMP@ssw0rd",
    //     "username":"Michael Danvers"

    // },
    {
        "email": "qa+ops@mdally.com",
        "password": "TEMP@ssw0rd",
        "username": "Annet Waters"
    }]
    users.forEach((user) => {

        it(`Verify login by '${user.email}`, async function () {

            await LoginPage.open()
            await LoginPage.login(user.email, user.password)
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
            await browser.pause(2000)
            await expect(EncounterStatusPage.CreateNewEncounterElem).toHaveText('CREATE NEW ENCOUNTER')
            await expect(EncounterStatusPage.activeEncountersText).toHaveText('ACTIVE ENCOUNTERS')
            await expect(EncounterStatusPage.completedEncountersText).toHaveText('COMPLETED ENCOUNTERS')

            if (user.email === 'qa+agency@mdally.com') {
                await expect(EncounterStatusPage.dropDownBtn).toHaveText(user.username)
                await expect(EncounterStatusPage.encountersMenuEMSLink).toBeDisplayed()
                await expect(EncounterStatusPage.mdAllyLogo).toBeDisplayed()
            } else if (user.email === 'qa+ops@mdally.com') {
                await expect(EncounterStatusPage.mdAllyLogo).toBeDisplayed()
                await expect(EncounterStatusPage.encountersMenuOPSLink).toBeDisplayed()
                await expect(EncounterStatusPage.dropDownBtn).toHaveText(user.username)
            } else {
                await expect(EncounterStatusPage.userImage).toBeDisplayed()
                await expect(EncounterStatusPage.mdAllyLogo).toBeDisplayed()
                await expect(EncounterStatusPage.encountersMenuLink).toBeDisplayed()
                await expect(EncounterStatusPage.dropDownBtn).toHaveText(user.username)
            }
            await LogoutPage.logout()
            await expect(LogoutPage.validLogoutText).toHaveText('You need to sign in before continuing.')
        })
    })
})