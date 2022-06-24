const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const CareDeckEDSbjectivePage = require('../../pageobjects/provider/caredecksubjective.page')
const EDSubjectiveData = require('../../pageobjects/testData/edsubjective.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("ACD-989 Verify Subjective Submodule", function () {

    it('Verify the login', async () => {
        await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
    })

    it("Verify and Click Completed Encounter VIEW button", async function () {
        await EncounterStatusPage.clickAndVerifyViewButton()
    })

    it("Verify the ED Subjective module has History Of Present Illness, Review Of Systems, Past Medical History, Allergies and Drugs", async function () {
        await expect(CareDeckEDSbjectivePage.SubjectiveHeader).toHaveText('HISTORY')
        await expect(CareDeckEDSbjectivePage.ExpandSubjectiveBtn).toHaveText('EXPAND')
        await CareDeckEDSbjectivePage.clickOnSubjectiveExpandBtn()
        await expect(CareDeckEDSbjectivePage.HistoryOfPresentIllnessTxt).toHaveText('HISTORY OF PRESENT ILLNESS')
        await expect(CareDeckEDSbjectivePage.ReviewOfSystemsTxt).toHaveText('REVIEW OF SYSTEMS')
        await expect(CareDeckEDSbjectivePage.PastMedicalHistoryTxt).toHaveText('PAST MEDICAL HISTORY')
        //await expect(CareDeckEDSbjectivePage.AllergiesTxt).toHaveText('ALLERGIES')
        await expect(CareDeckEDSbjectivePage.DrugsLabel).toHaveText('DRUG ALLERGIES')
        await expect(CareDeckEDSbjectivePage.DrugsTxtArea).toBeDisplayed()
    })

    it("Verify COMPOSE 'History of Present Illness'", async function () {
        await expect(CareDeckEDSbjectivePage.HistoryComposeBtn).toHaveText('COMPOSE')
        await browser.pause(2000)

        await CareDeckEDSbjectivePage.composeHistoryOfPresentIllness(
            EDSubjectiveData.note,
            EDSubjectiveData.onset,
            EDSubjectiveData.location,
            EDSubjectiveData.duration,
            EDSubjectiveData.character,
            EDSubjectiveData.factors,
            EDSubjectiveData.radiation,
            EDSubjectiveData.temporal,
            EDSubjectiveData.severity
        )
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.NoteTxt.scrollIntoView()
        await browser.pause(3000)
        await expect(CareDeckEDSbjectivePage.NoteTxt).toHaveTextContaining(EDSubjectiveData.note)
        await expect(CareDeckEDSbjectivePage.OnSetTxt).toHaveTextContaining(EDSubjectiveData.onset)
        await expect(CareDeckEDSbjectivePage.LocationTxt).toHaveTextContaining(EDSubjectiveData.location)
        await expect(CareDeckEDSbjectivePage.DurationTxt).toHaveTextContaining(EDSubjectiveData.duration)
        await expect(CareDeckEDSbjectivePage.CharacterTxt).toHaveTextContaining(EDSubjectiveData.character)
        await expect(CareDeckEDSbjectivePage.FactorsTxt).toHaveTextContaining(EDSubjectiveData.factors)
        await expect(CareDeckEDSbjectivePage.RadiationTxt).toHaveTextContaining(EDSubjectiveData.radiation)
        await expect(CareDeckEDSbjectivePage.TemporalTxt).toHaveTextContaining(EDSubjectiveData.temporal)
        await expect(CareDeckEDSbjectivePage.SeverityTxt).toHaveTextContaining(EDSubjectiveData.severity)

        await CareDeckEDSbjectivePage.deleteComposeHistoryOfPresentIllness()
        await CareDeckEDSbjectivePage.clickOnSubjetiveMinimizeBtn()
        await browser.pause(2000)
        await CareDeckEDSbjectivePage.clickOnSubjectiveExpandBtn()
        await browser.pause(5000)
    })
})