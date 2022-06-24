const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const CreateEncounterPage = require('../../pageobjects/provider/create.encounter.page')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('Create New Encounter', () => {
  it('Should not login with invalid Credentials', async () => {
    await AllynetCommon.invalidLogin(faker.internet.email(), 'invalidpassword')
  })

  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
  })

  it('Should create a New Encounter', async () => {
    await CreateEncounterPage.ClickCreateEncounter()
    await CreateEncounterPage.CreateEncounter(
      EncounterData.service,
      faker.random.alphaNumeric(10).toUpperCase(),
      faker.name.firstName(), 
      faker.name.lastName(), 
      EncounterData.gender,
      EncounterData.dob,
      faker.phone.phoneNumber(),
      faker.name.jobDescriptor()
    )
    await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
    await browser.pause(2000)
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})