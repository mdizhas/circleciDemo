class PhysicalExamPageCore {
    
    get PhysicalExamHeader() {
        return $("//div[normalize-space()='PHYSICAL EXAM']")
    }
    get MinimizePhysicalExamBtn() {
        return $("#encounter-doc-root > div > div:nth-child(2) > div > div > button")
    }
    get ExpandPhysicalExamBtn() {
        return $("#encounter-doc-root > div > div:nth-child(2) > div > div > button")
    }
    get TempFInput() {
        return $("#vitals-temp")
    }
    get TempHRInput() {
        return $("#vitals-hr")
    }
    get TempRRnput() {
        return $("#vitals-rr")
    }
    get TempBP1Input() {
        return $("//div[@id='vitals-high-bp']//input[1]")
    }
    get TempBP2Input() {
        return $("//div[@id='vitals-high-bp']//input[2]")
    }
    get WeightLBSInput() {
        return $("#vitals-weight-lbs")
    }
    get WeightKGInput() {
        return $("#vitals-weight-kg")
    }
    get SPO2Input() {
        return $("#vitals-sp02 > input")
    }
    get PhysicalExamTxt() {
        return $("//div[contains(text(),'PHYSICAL EXAM')]")
    }
    get TempTxt() {
        return $("label[for='vitals-temp']")
    }
    get HRTxt() {
        return $("label[for='vitals-hr']")
    }
    get RRTxt() {
        return $("label[for='vitals-rr']")
    }
    get BPTxt() {
        return $("label[for='vitals-high-bp']")
    }
    get WeightTxt() {
        return $("label[for='vitals-weight-lbs']")
    }
    get SPO2Txt() {
        return $("label[for='vitals-sp02']")
    }
    get PhysicalExamComposeBtn() {
        return $("div[class='d-flex justify-content-start text-center'] button[type='button']")
    }
    get PhysicalExamCloseButton() {
        return $("span[aria-hidden='true']")
    }
}

class PhysicalExamPage extends PhysicalExamPageCore {

    get PhysicalExamNotReviewedCheckBox() {
        return $$("//input[contains(@id, 'review') and @type='checkbox']")
    }
    get PhysicalExamTextarea() {
        return $$("//textarea[@class='flex-fill encounter-datum-input']")
    }
    get ConstitutionalTxt() {
        return $("//div[contains(text(),'CONSTITUTIONAL')]")
    }
    get HeadTxt() {
        return $("//div[contains(text(),'HEAD')]")
    }
    get EyesTxt() {
        return $("//div[contains(text(),'EYES')]")
    }
    get ENTTxt() {
        return $("//div[contains(text(),'EARS')]")
    }
    get NeckTxt() {
        return $("//div[contains(text(),'NECK')]")
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

    async clickOnPhysicalExamComposeBtn() {
        await this.PhysicalExamComposeBtn.click()
    }
    async clickOnPhysicalExamCloseBtn() {
        await this.PhysicalExamCloseButton.click()
    }
    async clickOnPhysicalExamExpandBtn() {
        await this.ExpandPhysicalExamBtn.click()
    }
    async clickOnPhysicalExamMinimizeBtn() {
        await this.MinimizePhysicalExamBtn.click()
    }

    async verifyTitleOfPhysicalExamModule() {
        await expect(this.PhysicalExamHeader).toHaveText('PHYSICAL EXAM')
        await expect(this.ExpandPhysicalExamBtn).toHaveText('EXPAND')
        await this.clickOnPhysicalExamExpandBtn()
        await expect(this.PhysicalExamTxt).toHaveText('PHYSICAL EXAM')
        await expect(this.TempTxt).toHaveTextContaining('TEMP')
        await expect(this.HRTxt).toHaveText('HR')
        await expect(this.RRTxt).toHaveText('RR')
        await expect(this.BPTxt).toHaveText('BP')
        await expect(this.WeightTxt).toHaveText('WEIGHT')
        await expect(this.SPO2Txt).toHaveText('SP02')
        await browser.pause(2000)
    }

    async doPhysicalExam(tempF, hr, rr, bp1, bp2, lbs, kg, spo2) {
        await this.TempFInput.clearValue()
        await this.TempFInput.setValue(tempF)
        await browser.pause(2000)
        await this.TempHRInput.clearValue()
        await this.TempHRInput.setValue(hr)
        await browser.pause(2000)
        await this.TempRRnput.clearValue()
        await this.TempRRnput.setValue(rr)
        await browser.pause(2000)
        await this.TempBP1Input.clearValue()
        await this.TempBP1Input.setValue(bp1)
        await browser.pause(2000)
        await this.TempBP2Input.clearValue()
        await this.TempBP2Input.setValue(bp2)
        await browser.pause(2000)
        await this.WeightLBSInput.clearValue()
        await this.WeightLBSInput.setValue(lbs)
        await browser.pause(2000)
        await this.WeightKGInput.clearValue()
        await this.WeightKGInput.setValue(kg)
        await browser.pause(2000)
        await this.SPO2Input.clearValue()
        await this.SPO2Input.setValue(spo2)
        await browser.pause(2000)
    }
}
module.exports = new PhysicalExamPage()