const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const PhysicalExamPage = require('../../pageobjects/provider/physicalexam.page')
const EDSubjectiveData = require('../../pageobjects/testData/edsubjective.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe("ACD-1144 Verify Encounter Documentation- Physical Exam module", function () {

    it('Verify the login', async () => {
        await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
    })

    it("Verify and Click Completed Encounter VIEW button", async function () {
        await EncounterStatusPage.clickAndVerifyViewButton()
    })

    it("Verify the Physical Exam module has TEMP, HR, RR, BP, WEIGHT, and SPO2", async function () {
        await PhysicalExamPage.verifyTitleOfPhysicalExamModule()
    })

    it("Set the Physical Exam values in their respected input fields", async function () {
        await PhysicalExamPage.doPhysicalExam(EDSubjectiveData.temp_f, EDSubjectiveData.temp_hr,
            EDSubjectiveData.temp_rr, EDSubjectiveData.temp_bp1,
            EDSubjectiveData.temp_bp2, EDSubjectiveData.weight_lbs,
            EDSubjectiveData.weight_kg, EDSubjectiveData.spo2)
    })

    it(`Verify Physical Exam Review input by Clicking on Checkbox 'Not Reviewed' `, async () => {
        await browser.pause(2000)
        await PhysicalExamPage.clickOnPhysicalExamComposeBtn()
        await AllynetCommon.doTextareaCheckedNotReview("PHYSICAL EXAM", PhysicalExamPage.PhysicalExamTextarea, PhysicalExamPage.PhysicalExamNotReviewedCheckBox)
        await PhysicalExamPage.clickOnPhysicalExamCloseBtn()
        await PhysicalExamPage.ConstitutionalTxt.scrollIntoView()
        await browser.pause(3000)
        await expect(PhysicalExamPage.ConstitutionalTxt).toHaveTextContaining("CONSTITUTIONAL")
        await expect(PhysicalExamPage.HeadTxt).toHaveTextContaining("HEAD")
        await expect(PhysicalExamPage.EyesTxt).toHaveTextContaining("EYES")
        await expect(PhysicalExamPage.ENTTxt).toHaveTextContaining("EARS")
        await expect(PhysicalExamPage.NeckTxt).toHaveTextContaining("NECK")
        await expect(PhysicalExamPage.CardioTxt).toHaveTextContaining("CARDIO")
        await expect(PhysicalExamPage.RespiratoryTxt).toHaveTextContaining("RESPIRATORY")
        await expect(PhysicalExamPage.GastrointestinalTxt).toHaveTextContaining("GASTROINTESTINAL")
        await expect(PhysicalExamPage.MusculoskeletalTxt).toHaveTextContaining("MUSCULOSKELETAL")
        await expect(PhysicalExamPage.DermatologicTxt).toHaveTextContaining("DERMATOLOGIC")
        await expect(PhysicalExamPage.NeurologicalTxt).toHaveTextContaining("NEUROLOGICAL")
        await expect(PhysicalExamPage.PsychiatricTxt).toHaveTextContaining("PSYCHIATRIC")
    })

    it('Verify deleted Physical Exam Reviews', async () => {
        await PhysicalExamPage.clickOnPhysicalExamComposeBtn()
        await AllynetCommon.doDeleteTextAreaValue(PhysicalExamPage.PhysicalExamTextarea)
        await PhysicalExamPage.clickOnPhysicalExamCloseBtn()
        await browser.pause(2000)
        await expect(PhysicalExamPage.ConstitutionalTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.HeadTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.EyesTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.ENTTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.NeckTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.CardioTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.RespiratoryTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.GastrointestinalTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.MusculoskeletalTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.DermatologicTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.NeurologicalTxt).not.toBeDisplayed()
        await expect(PhysicalExamPage.PsychiatricTxt).not.toBeDisplayed()

        await PhysicalExamPage.clickOnPhysicalExamMinimizeBtn()
        await browser.pause(2000)
        await PhysicalExamPage.clickOnPhysicalExamExpandBtn()
        await browser.pause(5000)
    })

    it('Should logout if logged in', async () => {
        await AllynetCommon.logout()
    })

})
