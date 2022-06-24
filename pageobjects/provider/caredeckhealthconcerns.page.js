const Utils = require('../common/utils')
class EncounterDocumentationPage {

  get EncounterDocumentationHeader() {
    return $("//div[contains(text(),'ENCOUNTER DOCUMENTATION')]")
  }

  get HelthConcernsCC() {
    return $(".m-2.encounter-doc-head")
  }

  get SearchChiefComplaint() {
    return $("input[placeholder='Search a chief complaint']")
  }

  get SearchChiefComplaintResult() {
    return $("#typeahead-chief-complaint")
  }

  get PatientComplainsOf() {
    return $("textarea[class='col-sm-12']")
  }

  get BtnSubmit() {
    return $(".btn.btn-secondary.btn-sm.primary-color")
  }

  async ClickSubmitButton() {
    await this.BtnSubmit.waitForDisplayed()
    await this.BtnSubmit.click()
  }

  async searchChiefComplaint(chiefComplaint) {
     await Utils.doGetAutoSuggestionSearchValue(await this.SearchChiefComplaint, await this.SearchChiefComplaintResult, chiefComplaint)
  }

  async deleteChiefComplaint() {
    await this.PatientComplainsOf.click()
    await this.PatientComplainsOf.keys(['Control', 'a'])
    await browser.pause(2000)
    await this.PatientComplainsOf.keys("Delete")
    await browser.pause(2000)
  }

  async writeChiefComplaintManually(line1, line2) {
    await this.PatientComplainsOf.addValue(line1)
    await browser.pause(2000)
    await this.PatientComplainsOf.keys("Enter")
    await browser.pause(2000)
    await this.PatientComplainsOf.addValue(line2)
    await browser.pause(2000)
    await this.PatientComplainsOf.keys("Enter")
  }
}
module.exports = new EncounterDocumentationPage()