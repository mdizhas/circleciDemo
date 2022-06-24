const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const CreateEncounterPage = require('../../pageobjects/provider/create.encounter.page')
const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-987-Create New Encounter Form', () => {
  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
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
        faker.name.jobDescriptor()
      )
      await expect(CreateEncounterPage.errorValidationMessage).toHaveText('This value is required.')
      await browser.pause(2000)
    })
  })

  it('Should create and validate a New Encounter', async () => {
    await browser.pause(2000)
    const p = AllynetCommon.encounerParam('provider')
    const incidentNumber = p.incidentNumber
    await AllynetCommon.CreateEncounter(p, 'provider')

    await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
    await expect(EncounterStatusPage.getNewCreateEncounterJoinButton(incidentNumber)).toExist()
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})