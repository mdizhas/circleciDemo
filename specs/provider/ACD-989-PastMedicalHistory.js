const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const CareDeckEDSbjectivePage = require('../../pageobjects/provider/caredecksubjective.page')
const EDSubjectiveData = require('../../pageobjects/testData/edsubjective.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("ACD-989 Verify COMPOSE- Past Medical History", function () {

    it('Verify the login', async () => {
        await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
    })

    it("Verify and Click Completed Encounter VIEW button", async function () {
        await EncounterStatusPage.clickAndVerifyViewButton()
    })

    it(`Verify COMPOSE, UPDATE and DELETE Of Past Medical History`, async () => {
        await CareDeckEDSbjectivePage.clickOnSubjectiveExpandBtn()
        await CareDeckEDSbjectivePage.composePastMedicalHistory
            (EDSubjectiveData.medical,
                EDSubjectiveData.medication,
                EDSubjectiveData.surgical,
                EDSubjectiveData.family,
                EDSubjectiveData.social)
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.MedicalTxt.scrollIntoView()
        await browser.pause(3000)
        await expect(CareDeckEDSbjectivePage.MedicalTxt).toHaveTextContaining("MEDICAL")
        await expect(CareDeckEDSbjectivePage.MedicalTxt).toBeDisplayed()
        await expect(CareDeckEDSbjectivePage.MedicationTxt).toHaveTextContaining("MEDICATION")
        await expect(CareDeckEDSbjectivePage.SurgicalTxt).toHaveTextContaining("SURGICAL")
        await expect(CareDeckEDSbjectivePage.FamilyTxt).toHaveTextContaining("FAMILY")
        await expect(CareDeckEDSbjectivePage.SocialTxt).toHaveTextContaining("SOCIAL")

        await CareDeckEDSbjectivePage.deleteComposePastMedicalHistory()
        await browser.pause(2000)
        await expect(CareDeckEDSbjectivePage.MedicalTxt).not.toBeDisplayed()
        await expect(CareDeckEDSbjectivePage.MedicationTxt).not.toBeDisplayed()
        await expect(CareDeckEDSbjectivePage.SurgicalTxt).not.toBeDisplayed()
        await expect(CareDeckEDSbjectivePage.FamilyTxt).not.toBeDisplayed()
        await expect(CareDeckEDSbjectivePage.SocialTxt).not.toBeDisplayed()

        await CareDeckEDSbjectivePage.clickOnSubjetiveMinimizeBtn()
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.clickOnSubjectiveExpandBtn()
        await browser.pause(5000)
    })

    it(`Verify ADD, UPDATE and DELETE Of Allergies or Drugs`, async () => {
        await expect(CareDeckEDSbjectivePage.DrugsLabel).toHaveText("DRUG ALLERGIES")
        await expect(CareDeckEDSbjectivePage.DrugsTxtArea).toBeDisplayed()
        await CareDeckEDSbjectivePage.DrugsTxtArea.clearValue()
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.DrugsTxtArea.addValue(EDSubjectiveData.drugs)
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.DrugsTxtArea.click()
        await CareDeckEDSbjectivePage.DrugsTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.DrugsTxtArea.keys("Delete")
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.DrugsTxtArea.addValue(EDSubjectiveData.update_drugs)
        await browser.pause(3000)
        await CareDeckEDSbjectivePage.clickOnSubjetiveMinimizeBtn()
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.clickOnSubjectiveExpandBtn()
        await browser.pause(5000)
    })

    it('Should logout if logged in', async () => {
        await AllynetCommon.logout()
    })

})
