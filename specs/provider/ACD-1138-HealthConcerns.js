const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const CareDeckPage = require('../../pageobjects/provider/caredeck.page')
const CareDeckHealthConcernsPage = require('../../pageobjects/provider/caredeckhealthconcerns.page')
const { chiefcomplaint } = require('../../pageobjects/testData/healthconcerns.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("Search and Add Chief Complaint in to the textarea", function () {

    it('Verify the login', async () => {
        await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
    })

    it.skip("Verify the care deck page has Encounter Documentation and Health Concerns text headling with a Search Input field and TextArea", async function () {
        await EncounterStatusPage.ClickViewButton()
        await expect(CareDeckPage.EncounterDocumentationHeader).toHaveText('ENCOUNTER DOCUMENTATION')
        await expect(CareDeckHealthConcernsPage.HelthConcernsCC).toHaveTextContaining('HEALTH CONCERNS')
        await expect(CareDeckHealthConcernsPage.SearchChiefComplaint).toBeDisplayed()
        await expect(CareDeckHealthConcernsPage.PatientComplainsOf).toBeDisplayed()
        await CareDeckHealthConcernsPage.deleteChiefComplaint()
        await browser.refresh()
        await browser.pause(3000)
    })

    chiefcomplaint.forEach((searchData) => {

        it.skip(`Verify to Add Search Chief Complaint for ${searchData}`, async function () {
            await CareDeckHealthConcernsPage.searchChiefComplaint(searchData)
          //  await CareDeckHealthConcernsPage.ClickSubmitButton()
        })
    })

    it.skip('Verify Search Chief Complaint after Added to the textarea', async () => {
        await browser.pause(2000)
        await EncounterStatusPage.ClickEncounterMenuLink()
        await expect(EncounterStatusPage.CreateNewEncounterElem).toHaveText('CREATE NEW ENCOUNTER')
        await EncounterStatusPage.ClickViewButton()
        await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
        await CareDeckHealthConcernsPage.PatientComplainsOf.scrollIntoView()
        await browser.pause(5000)
        await expect(CareDeckHealthConcernsPage.PatientComplainsOf).toHaveTextContaining('ABDOMINAL PAIN')
    })

    it.skip('Verify Search Chief Complaint Input textarea field after Updated/Deleted Manually', async () => {
        await CareDeckHealthConcernsPage.deleteChiefComplaint()
        await CareDeckHealthConcernsPage.writeChiefComplaintManually("this is the first line of free text CC", "this is second line of free text CC")
        await CareDeckHealthConcernsPage.ClickSubmitButton()
        await browser.pause(2000)
        await EncounterStatusPage.ClickEncounterMenuLink()
        await expect(EncounterStatusPage.CreateNewEncounterElem).toHaveText('CREATE NEW ENCOUNTER')
        await EncounterStatusPage.ClickViewButton()
        await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
        await CareDeckHealthConcernsPage.PatientComplainsOf.scrollIntoView()
        await browser.pause(2000)
        await expect(CareDeckHealthConcernsPage.PatientComplainsOf).toHaveTextContaining('second line of free')
    })

    it('Should logout if logged in', async () => {
        await AllynetCommon.logout()
    })
})