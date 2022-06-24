const { faker } = require('@faker-js/faker')
const CreateEncounterPage = require('../../pageobjects/emt/create.encounter.page')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const CareDeckPage = require('../../pageobjects/emt/caredeck.page')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-987-Create New Encounter Form', () => {
  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.EMT_USERNAME, process.env.EMT_PASSWORD)
  })
  const edata = [{
    "service": "Select Service",
    "firstname": faker.name.firstName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": "",
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": "",
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": "Select Gender",
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": "",
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": "",
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment": faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": "",
    "eMSAssessment":faker.name.jobDescriptor(),
  },
  {
    "service": EncounterData.service,
    "firstname": faker.name.lastName(),
    "lastname": faker.name.lastName(),
    "gender": EncounterData.gender,
    "dob": EncounterData.dob,
    "contact": EncounterData.contact_number,
    "chiefComplaint": faker.name.jobDescriptor(),
    "eMSAssessment":"",
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
        data.chiefComplaint,
        data.eMSAssessment,
        faker.name.jobDescriptor(),
        faker.name.jobDescriptor()

      )
      await expect(CreateEncounterPage.errorValidationMessage).toHaveText('This value is required.')
      await browser.pause(2000)
    })
  })

  it('Verify Clicking on Submit+Join should take the user to the encounter care deck page. Blue waves is seen in the video box.', async () => {
    await browser.pause(2000)
    await AllynetCommon.CreateEncounter(AllynetCommon.encounerParam('emt'),'emt')
    await browser.pause(2000)
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
    await expect(CareDeckPage.PublicSafetyDataHeader).toHaveText('PUBLIC SAFETY DATA')
    await expect(CareDeckPage.EncounterDocumentationHeader).toHaveText('ENCOUNTER DOCUMENTATION')
   })
})