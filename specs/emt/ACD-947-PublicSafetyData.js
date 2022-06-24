
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const EncounterStatusPage = require('..//..//pageobjects/emt/encounterstatus.page')
const CareDeckPage = require('../../pageobjects/emt/caredeck.page')
const { default: faker } = require('@faker-js/faker')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("ACD-947 Verify Public Safety Data for EMS User", function () {

    it('Verify the login', async () => {
        await AllynetCommon.login(process.env.EMT_USERNAME, process.env.EMT_PASSWORD)
    })

    it("Verify the care deck page has Communication Public Safety Data and Encounter Documentation module", async function () {
        await browser.pause(5000)
        await EncounterStatusPage.ClickViewButton()
        await browser.pause(2000)
        await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
        await expect(CareDeckPage.PublicSafetyDataHeader).toHaveText('PUBLIC SAFETY DATA')
        await expect(CareDeckPage.EncounterDocumentationHeader).toHaveText('ENCOUNTER DOCUMENTATION')
    })

    it("Verify PSD has sections 'Patient Information' 'Encounter Information' and 'Location Information'", async function () {
        await CareDeckPage.ClickPSDArrowButton()
        await expect(CareDeckPage.PatientInformationLabel).toHaveTextContaining('PATIENT INFORMATION')
        await expect(CareDeckPage.EncounterInformationLabel).toHaveTextContaining('ENCOUNTER INFORMATION')
        await expect(CareDeckPage.LocationInformationLabel).toHaveTextContaining('INCIDENT LOCATION INFORMATION')
        await expect(CareDeckPage.SourceLabel).toHaveTextContaining('SOURCE')
        await expect(CareDeckPage.ImagesAndDocumentsLabel).toHaveTextContaining('IMAGES')
        await expect(CareDeckPage.InsuranceLabel).toHaveTextContaining('INSURANCE')
    })

    it("Verify all *fields of Patient Information", async function () {
        await CareDeckPage.ClickEditButtonPatientInfo()
        await expect(CareDeckPage.FirstName).toBeDisplayed()
        await expect(CareDeckPage.LastName).toBeDisplayed()
        await expect(CareDeckPage.Dob).toBeDisplayed()
        await expect(CareDeckPage.Gender).toBeDisplayed()
        await expect(CareDeckPage.ContactNumber).toBeDisplayed()
        await expect(CareDeckPage.Address1).toBeDisplayed()
        await expect(CareDeckPage.Address2).toBeDisplayed()
        await expect(CareDeckPage.City).toBeDisplayed()
        await expect(CareDeckPage.State).toBeDisplayed()
        await expect(CareDeckPage.Zip).toBeDisplayed()
        await expect(CareDeckPage.Email).toBeDisplayed()
    })

    it("Should Update the Patient Information", async function () {
        await browser.pause(2000)
        await CareDeckPage.updatePatientInformation(
            faker.name.firstName(),
            faker.name.lastName(),
            EncounterData.dob,
            EncounterData.gender,
            EncounterData.contact_number,
            faker.address.streetAddress(),
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            expected = faker.internet.email('test')
        )
        await browser.pause(2000)
        await expect(CareDeckPage.EmailSpan).toHaveText(expected)
    })

    it("Should update the Incident Location Information", async function () {

        await CareDeckPage.ClickEditButtonLocationInfo()
        await browser.pause(2000)
        await CareDeckPage.updateIncidentLocationInformation(
            expectedStreetAddress = faker.address.streetAddress(),
            faker.address.streetName(),
            faker.address.city(),
            faker.address.country(),
            faker.address.state(),
            faker.address.zipCode()
        )
        await browser.pause(2000)
        await expect(CareDeckPage.IncidentSuccessSaveText).toHaveText("SAVED!")
        await expect(CareDeckPage.IncidentAddressSpan).toHaveText(expectedStreetAddress)
    })

    it("Should update the Insurance Information", async function () {

        await CareDeckPage.ClickEditButtonInsurance()
        await browser.pause(2000)
        await CareDeckPage.updateInsuranceInformation(
            expectedInsurancePayer = faker.name.firstName(),
            faker.commerce.productName(),
            faker.random.alphaNumeric(5),
            faker.name.firstName(),
            faker.phone.phoneNumber(),
            faker.name.firstName(),
            faker.phone.phoneNumber(),
            faker.name.firstName(),
            faker.commerce.productName(),
            faker.phone.phoneNumber(),
            faker.internet.url()
        )
        await browser.pause(2000)
        await expect(CareDeckPage.InsuranceSuccessSaveText).toHaveText("SAVED!")
        await expect(CareDeckPage.InsurancePayerSpan).toHaveText(expectedInsurancePayer)
        await browser.pause(5000)
    })
})