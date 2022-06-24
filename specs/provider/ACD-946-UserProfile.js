const ProfilePage = require('../../pageobjects/provider/userprofile.page')
const LoginPage = require('../../pageobjects/common/login.page')
const ProfileData = require('../../pageobjects/testData/ProfileData')
const CreateEncounterPage = require('../../pageobjects/provider/create.encounter.page')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("ACD-946 Verify User Profile Page", function () {

    const users = [{
        "username": process.env.PROVIDER_USERNAME,
        "password": process.env.PROVIDER_PASSWORD,
    },
    {
        "username": process.env.EMT_USERNAME,
        "password": process.env.EMT_PASSWORD,
    },
    {
        "username": process.env.OPS_USERNAME,
        "password": process.env.OPS_PASSWORD
    }]

    users.forEach((user) => {

        it('Verify the login', async () => {
            await AllynetCommon.login(user.username, user.password)
        })

        it("Verify there are 6 input fields and 2 buttons UPDATE and BACK present", async function () {
            await ProfilePage.clickProfileLink()
            await ProfilePage.clickProfileBtn()
            await expect(ProfilePage.firstName).toExist()
            await expect(ProfilePage.lastName).toExist()
            await expect(ProfilePage.email).toExist()
            await expect(ProfilePage.newPassword).toExist()
            await expect(ProfilePage.confirmPassword).toExist()
            await expect(ProfilePage.currentPassword).toExist()
            await expect(ProfilePage.btnProfile).toExist()
            await expect(ProfilePage.btnBack).toExist()
        })

        it('Verify BACK button user is taken to Encounter Status Page', async function () {

            await ProfilePage.clickBackBtn()
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
            await expect(CreateEncounterPage.CreateNewEncounterElem).toExist()
        })

        it("Verify updated profile with updated account name and password", async function () {
            await ProfilePage.clickProfileLink()
            await ProfilePage.clickProfileBtn()
            await ProfilePage.updateProfile(ProfileData.first_name, ProfileData.last_name)
            await expect(ProfilePage.userProfileLink).toHaveTextContaining(ProfileData.first_name)
            await browser.pause(2000)
            await ProfilePage.verifyEmailErrorValidation(ProfileData.first_name, ProfileData.last_name, ProfileData.email)
            await expect(ProfilePage.emailErrorMessage).toHaveTextContaining('1 error prohibited')
            await ProfilePage.changeProfilePassword(ProfileData.new_password, ProfileData.confirm_password, ProfileData.current_password)
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
            await AllynetCommon.logout()
            await LoginPage.login(user.username, 'invalidPassword')
            await expect(LoginPage.invalidLoginText).toHaveText('Invalid Email or password.')
            await browser.pause(2000)
            await LoginPage.login(user.username, ProfileData.new_password)
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
            await AllynetCommon.logout()
        })
    })
})
