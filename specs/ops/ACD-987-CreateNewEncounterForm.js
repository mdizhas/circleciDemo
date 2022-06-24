const { faker } = require('@faker-js/faker')
const { default: BrowserstackService } = require('@wdio/browserstack-service')
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const CreateEncounterPage = require('../../pageobjects/ops/create.encounter.page')
const EncounterStatusPage = require('../../pageobjects/ops/encounterstatus.page')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const CareDeckPage = require('../../pageobjects/ops/caredeck.page')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-987-Create New Encounter Form', () => {
  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.OPS_USERNAME, process.env.OPS_PASSWORD)
  })
  const edata = [{
    "service": "Select Service",
    "firstname": faker.name.firstName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,

  },
  {
    "service": EncounterData.service,
    "firstname": "",
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": "",
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": "Select Gender",
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": "",
    "contact": EncounterData.contact_number,
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": "",
  }]
  edata.forEach((data) => {
    it('Verify All the fields with * are required', async () => {
      await CreateEncounterPage.ClickCreateEncounter()
      await CreateEncounterPage.CreateEncounter(
        data.service,
        incedentNumber = faker.random.alphaNumeric(10).toUpperCase(),
        data.firstname,
        data.lastname,
        data.gender,
        data.dob,
        data.contact,
      )
      await expect(CreateEncounterPage.errorValidationMessage).toHaveText('This value is required.')
      await browser.pause(2000)
    })
  })

  it('Should create and validate a New Encounter', async () => {
    await AllynetCommon.CreateEncounter(AllynetCommon.encounerParam(), 'ops')
    // await browser.pause(2000)
    // await CreateEncounterPage.CreateEncounter(
    //   EncounterData.service,
    //   incedentNumber = faker.random.alphaNumeric(10).toUpperCase(),
    //   faker.name.firstName(),
    //   faker.name.lastName(),
    //   EncounterData.gender,
    //   EncounterData.dob,
    //   EncounterData.contact_number,
    //   faker.name.jobDescriptor()
    // )
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
    //await expect(EncounterStatusPage.getNewCreateEncounterJoinButton(incedentNumber)).toBeDisplayed()
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})