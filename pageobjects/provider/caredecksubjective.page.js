class CareDeckEDSbjectivePage {

    get EncounterDocumentationHeader() {
        return $("//div[contains(text(),'ENCOUNTER DOCUMENTATION')]")
    }

    //HISTORY OF PRESENT ILLNESS
    get SubjectiveHeader() {
        return $("//div[normalize-space()='HISTORY']")
    }
    get MinimizeSubjectiveBtn() {
        return $("#encounter-doc-root > div > div:nth-child(1) > div > div > button")
    }
    get ExpandSubjectiveBtn() {
        return $("#encounter-doc-root > div > div:nth-child(1) > div > div > button")
    }
    get HistoryOfPresentIllnessTxt() {
        return $("//div[text()='HISTORY OF PRESENT ILLNESS']")
    }
    get ReviewOfSystemsTxt() {
        return $("//div[text()='REVIEW OF SYSTEMS']")
    }
    get PastMedicalHistoryTxt() {
        return $("//div[text()='PAST MEDICAL HISTORY']")
    }
    get AllergiesTxt() {
        return $("//div[text()='Allergies']")
    }
    get DrugsLabel() {
        return $(".encounter-sec-head.mb-2")
    }
    get DrugsTxtArea() {
        return $("//textarea[@id='drugs']")
    }
    get HistoryComposeBtn() {
        return $("//div[@class='ml-4 mr-2 my-4']//div[1]//div[1]//button[1]")
    }
    get ReviewComposeBtn() {
        return $("//div[@class='ml-4 mr-2 my-4']//div[2]//div[1]//button[1]")
    }
    get PastMedicalComposeBtn() {
        return $("//div[@class='ml-4 mr-2 my-4']//div[3]//div[1]//button[1]")
    }
    get HistoryOfPresentIllnessDialog() {
        return $("body > div.fade.modal.show > div > div")
    }
    get HistoryOfPresentIllnessaHeader() {
        return $(".modal-title.h4")
    }
    get NoteLabel() {
        return $("label[for='note']")
    }
    get OnSetLabel() {
        return $("label[for='onset']")
    }
    get LocationLabel() {
        return $("label[for='location']")
    }
    get DurationLabel() {
        return $("label[for='duration']")
    }
    get CharacterLabel() {
        return $("label[for='character']")
    }
    get FactorsLabel() {
        return $("label[for='factors']")
    }
    get RadiationLabel() {
        return $("label[for='radiation']")
    }
    get TamporalLabel() {
        return $("label[for='temporal']")
    }
    get SeverityLabel() {
        return $("label[for='severity']")
    }
    get NoteTxtArea() {
        return $("#note")
    }
    get OnSetInput() {
        return $("#onset")
    }
    get LocationInput() {
        return $("#location")
    }
    get DurationInput() {
        return $("#duration")
    }
    get CharacterInput() {
        return $("#character")
    }
    get FactorsInput() {
        return $("#factors")
    }
    get RadiationInput() {
        return $("#radiation")
    }
    get TemporalInput() {
        return $("#temporal")
    }
    get SeverityInput() {
        return $("#severity")
    }
    get HistoryDialogCloseButton() {
        return $("span[aria-hidden='true']")
    }
    get NoteTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(1)")
    }
    get OnSetTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(2)")
    }
    get LocationTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(3)")
    }
    get DurationTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(4)")
    }
    get CharacterTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(5)")
    }
    get FactorsTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(6)")
    }
    get RadiationTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(7)")
    }
    get TemporalTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(8)")
    }
    get SeverityTxt() {
        return $("div[class='mt-2 mb-4 col-sm-12 border-left'] div:nth-child(9)")
    }

    //REVIEW OF SYSTEMS
    get ReviewOfSytemDialog() {
        return $("body > div.fade.modal.show > div > div")
    }
    get ReviewOfSytemHeader() {
        return $(".modal-title.h4")
    }
    get ConstitutionalLabel() {
        return $("label[for='constitutional']")
    }
    get EyesLabel() {
        return $("label[for='eyes']")
    }
    get ENTLabel() {
        return $("label[for='ears-nose-mouth-throat']")
    }
    get CardioLabel() {
        return $("label[for='cardio-vascular']")
    }
    get RespiratoryLabel() {
        return $("label[for='respiratory']")
    }
    get GastrointestinalLabel() {
        return $("label[for='gastrointestinal']")
    }
    get GenitourinaryLabel() {
        return $("label[for='genitourinary']")
    }
    get MusculoskeletalLabel() {
        return $("label[for='musculoskeletal']")
    }
    get DermatologicLabel() {
        return $("label[for='dermatologic']")
    }
    get NeurologicalLabel() {
        return $("label[for='neurological']")
    }
    get PsychiatricLabel() {
        return $("label[for='psychiatric']")
    }
    get EndocrinologicLabel() {
        return $("label[for='endocrinologic']")
    }
    get HematologicLabel() {
        return $("label[for='hematologic']")
    }
    get AllergicLabel() {
        return $("label[for='allergic-immunological']")
    }

    //Review Of System For Verify
    get ConstitutionalTxt() {
        return $("//div[contains(text(),'CONSTITUTIONAL')]")
    }
    get EyesTxt() {
        return $("//div[contains(text(),'EYES')]")
    }
    get ENTTxt() {
        return $("//div[contains(text(),'EARS')]")
    }
    get CardioTxt() {
        return $("//div[contains(text(),'CARDIO')]")
    }
    get RespiratoryTxt() {
        return $("//div[contains(text(),'RESPIRATORY')]")
    }
    get GastrointestinalTxt() {
        return $("//div[contains(text(),'GASTROINTESTINAL')]")
    }
    get GenitourinaryTxt() {
        return $("//div[contains(text(),'GENITOURINARY')]")
    }
    get MusculoskeletalTxt() {
        return $("//div[contains(text(),'MUSCULOSKELETAL')]")
    }
    get DermatologicTxt() {
        return $("//div[contains(text(),'DERMATOLOGIC')]")
    }
    get NeurologicalTxt() {
        return $("//div[contains(text(),'NEUROLOGICAL')]")
    }
    get PsychiatricTxt() {
        return $("//div[contains(text(),'PSYCHIATRIC')]")
    }
    get EndocrinologicTxt() {
        return $("//div[contains(text(),'ENDOCRINOLOGIC')]")
    }
    get HematologicTxt() {
        return $("//div[contains(text(),'HEMATOLOGIC')]")
    }
    get AllergicTxt() {
        return $("//div[contains(text(),'ALLERGIC')]")
    }

    get ReviewOfSystemPlusBtn() {
        return $$("//button[@class='review-btn p-0']")
    }
    get ReviewOfSystemMinusBtn() {
        return $$("//button[@class='review-btn ml-1 p-0']")
    }
    get NotReviewedCheckBox() {
        return $$("//input[@class='ml-1']")
    }
    get ReviewOfSystemTxtArea() {
        return $$("//textarea[@class='form-control encounter-datum-input']")
    }
    get ReviewOfSystemCloseButton() {
        return $("span[aria-hidden='true']")
    }

    //PastMedicalHistory
    get PastMedicalHistoryHeader() {
        return $(".modal-title.h4")
    }
    get MedicalTxtArea() {
        return $("#medical")
    }
    get MedicationTxtArea() {
        return $("#medication")
    }
    get SurgicalTxtArea() {
        return $("#surgical")
    }
    get FamilyTxtArea() {
        return $("#family")
    }
    get SocialTxtArea() {
        return $("#social")
    }
    get PastMedicalHistoryDialogCloseButton() {
        return $("span[aria-hidden='true']")
    }
    get DrugsTxtArea() {
        return $("#drugs")
    }
    get MedicalTxt() {
        return $("//div[contains(text(),'MEDICAL -')]")
    }
    get MedicationTxt() {
        return $("//div[contains(text(),'MEDICATION')]")
    }
    get SurgicalTxt() {
        return $("//div[contains(text(),'SURGICAL')]")
    }
    get FamilyTxt() {
        return $("//div[contains(text(),'FAMILY')]")
    }
    get SocialTxt() {
        return $("//div[contains(text(),'SOCIAL -')]")
    }

    async clickOnPastMedicalComposeBtn() {
        await this.PastMedicalComposeBtn.click()
    }
    async clickOnPastMedicalCloseBtn() {
        await this.PastMedicalHistoryDialogCloseButton.click()
    }

    async clickOnReviewComposeBtn() {
        await this.ReviewComposeBtn.click()
    }
    async clickOnReviewOfSystemCloseBtn() {
        await this.ReviewOfSystemCloseButton.click()
    }

    async clickOnSubjectiveExpandBtn() {
        await this.ExpandSubjectiveBtn.click()
    }
    async clickOnSubjetiveMinimizeBtn() {
        await this.MinimizeSubjectiveBtn.click()
    }
    async clickOnHistoryComposeBtn() {
        await this.HistoryComposeBtn.click()
    }
    async clickOnHistoryCloseBtn() {
        await this.HistoryDialogCloseButton.click()
    }

    async composeHistoryOfPresentIllness(note, onset, location, duration, character, factors, radiation, temporal, severity) {
        await this.clickOnHistoryComposeBtn()
        await browser.pause(2000)
        await this.NoteTxtArea.clearValue()
        await browser.pause(2000)
        await this.NoteTxtArea.addValue(note)
        await browser.pause(2000)
        await this.OnSetInput.clearValue()
        await browser.pause(2000)
        await this.OnSetInput.setValue(onset)
        await browser.pause(2000)
        await this.LocationInput.clearValue()
        await browser.pause(2000)
        await this.LocationInput.setValue(location)
        await browser.pause(2000)
        await this.DurationInput.clearValue()
        await browser.pause(2000)
        await this.DurationInput.setValue(duration)
        await browser.pause(2000)
        await this.CharacterInput.clearValue()
        await browser.pause(2000)
        await this.CharacterInput.setValue(character)
        await browser.pause(2000)
        await this.FactorsInput.clearValue()
        await browser.pause(2000)
        await this.FactorsInput.setValue(factors)
        await browser.pause(2000)
        await this.RadiationInput.clearValue()
        await browser.pause(2000)
        await this.RadiationInput.setValue(radiation)
        await browser.pause(2000)
        await this.TemporalInput.clearValue()
        await browser.pause(2000)
        await this.TemporalInput.setValue(temporal)
        await browser.pause(2000)
        await this.SeverityInput.clearValue()
        await browser.pause(2000)
        await this.SeverityInput.setValue(severity)
        await browser.pause(2000)

        await this.clickOnHistoryCloseBtn()
    }

    async deleteComposeHistoryOfPresentIllness() {
        await this.clickOnHistoryComposeBtn()
        await this.NoteTxtArea.click()
        await this.NoteTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.NoteTxtArea.keys("Delete")
        await this.OnSetInput.click()
        await this.OnSetInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.OnSetInput.keys("Delete")
        await this.LocationInput.click()
        await this.LocationInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.LocationInput.keys("Delete")
        await this.DurationInput.click()
        await this.DurationInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.DurationInput.keys("Delete")
        await this.CharacterInput.click()
        await this.CharacterInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.CharacterInput.keys("Delete")
        await this.FactorsInput.click()
        await this.FactorsInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.FactorsInput.keys("Delete")
        await this.RadiationInput.click()
        await this.RadiationInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.RadiationInput.keys("Delete")
        await this.TemporalInput.click()
        await this.TemporalInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.TemporalInput.keys("Delete")
        await this.SeverityInput.click()
        await this.SeverityInput.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.SeverityInput.keys("Delete")
        await browser.pause(2000)

        await this.clickOnHistoryCloseBtn()
        await browser.pause(2000)
    }

    async doCheckedNotReview(testdata) {
        const txtarea = await this.ReviewOfSystemTxtArea
        const chek = await this.NotReviewedCheckBox
        for (let i = 0; i < chek.length; i++) {
            const attr = await (chek[i]).isSelected()
            if (attr === false) {
                await (chek[i]).click()
                await browser.pause(2000)
                await (chek[i]).click()
                await browser.pause(2000)
                await (txtarea[i].addValue(testdata))
            }
            else {
                await browser.pause(2000)
                await (chek[i]).click()
                await browser.pause(2000)
                await (chek[i]).click()
                await browser.pause(2000)
                await (txtarea[i].addValue(testdata))
            }
        }
    }

    async doDeleteCheckedNotReview(testdata) {
        await this.clickOnReviewComposeBtn()
        const txtarea = await this.ReviewOfSystemTxtArea
        for (let i = 0; i < txtarea.length; i++) {
            await (txtarea[i]).click()
            await browser.pause(2000)
            await (txtarea[i]).keys(['Control', 'a'])
            await browser.pause(2000)
            await (txtarea[i]).keys("Delete")
        }

        await this.clickOnReviewOfSystemCloseBtn()
        await browser.pause(2000)
    }

    async doReviewOfSystemByPluseButton() {
        await this.clickOnReviewComposeBtn()
        const pluseBtn = await this.ReviewOfSystemPlusBtn
        for (let i = 0; i < pluseBtn.length; i++) {
            await (pluseBtn[i]).click()
            await browser.pause(2000)
        }
        await this.clickOnReviewOfSystemCloseBtn()
        await browser.pause(2000)
    }

    async doReviewOfSystemByMinusButton() {
        await this.clickOnReviewComposeBtn()
        const minusBtn = await this.ReviewOfSystemMinusBtn
        for (let i = 0; i < minusBtn.length; i++) {
            await (minusBtn[i]).click()
            await browser.pause(2000)
        }
        await this.clickOnReviewOfSystemCloseBtn()
        await browser.pause(2000)
    }

    async composePastMedicalHistory(medical, medication, surgical, family, social) {
        await this.clickOnPastMedicalComposeBtn()
        await browser.pause(2000)
        await this.MedicalTxtArea.clearValue()
        await browser.pause(2000)
        await this.MedicalTxtArea.addValue(medical)
        await browser.pause(2000)
        await this.MedicationTxtArea.clearValue()
        await browser.pause(2000)
        await this.MedicationTxtArea.setValue(medication)
        await browser.pause(2000)
        await this.SurgicalTxtArea.clearValue()
        await browser.pause(2000)
        await this.SurgicalTxtArea.setValue(surgical)
        await browser.pause(2000)
        await this.FamilyTxtArea.clearValue()
        await browser.pause(2000)
        await this.FamilyTxtArea.setValue(family)
        await browser.pause(2000)
        await this.SocialTxtArea.clearValue()
        await browser.pause(2000)
        await this.SocialTxtArea.setValue(social)
        await browser.pause(2000)

        await this.clickOnPastMedicalCloseBtn()
    }

    async deleteComposePastMedicalHistory() {
        await this.clickOnPastMedicalComposeBtn()
        await this.MedicalTxtArea.click()
        await this.MedicalTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.MedicalTxtArea.keys("Delete")
        await this.MedicationTxtArea.click()
        await this.MedicationTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.MedicationTxtArea.keys("Delete")
        await this.SurgicalTxtArea.click()
        await this.SurgicalTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.SurgicalTxtArea.keys("Delete")
        await this.FamilyTxtArea.click()
        await this.FamilyTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.FamilyTxtArea.keys("Delete")
        await this.SocialTxtArea.click()
        await this.SocialTxtArea.keys(['Control', 'a'])
        await browser.pause(2000)
        await this.SocialTxtArea.keys("Delete")
        await this.clickOnPastMedicalCloseBtn()
        await browser.pause(2000)
    }
}
module.exports = new CareDeckEDSbjectivePage()