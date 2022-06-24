class EncounterStatusPage {
  get CreateNewEncounterElem() {
    return $('body > div.wrapper > div.content-wrapper > div > div > div.new-encounter-form.container > div > div.new-form-bar > div > div.col-11.new-form-bar-button > h1')
  }

  get activeEncountersText() {
    return $('.active-encounters-title')
  }

  get completedEncountersText() {
    return $('.completed-encounters-title')
  }

  get encountersMenuLink() {
    return $("a[href='/operations/encounters']")
  }

  get leaveEncounterPopup() {
    return $("#leave-encounter-modal > div > div > div")
  }

  get btnPutOnHold() {
    return $("#leave-encounter")
  }

  get btnNoRemainInCall() {
    return $("#cancel-leave-encounter")
  }

  get labelDuty() {
    return $("label[for='customSwitch1']")
  }

  get btnView() {
    return this.completedEncounterTable.$("tbody tr:nth-child(1) td:nth-child(7) a:nth-child(1)")
  }

  get activeEncounterTable() {
    return $('body > div.wrapper > div.content-wrapper > div > div > div.data-error > div.active-encounters > div.d-flex.active-encounters-container > div > div > div > table')
  }

  get completedEncounterTable() {
    return $('body > div.wrapper > div.content-wrapper > div > div > div.data-error > div.completed-encounters > div > div:nth-child(2) > div.responsive-table.mt-1 > table')
  }

  async ClickOnPutOnHoldButton() {
    await this.btnPutOnHold.waitForDisplayed()
    await this.btnPutOnHold.click()
  }

  async ClickOnNoRemainInCallButton() {
    await this.btnNoRemainInCall.waitForDisplayed()
    await this.btnNoRemainInCall.click()
  }

  async ClickEncounterMenuLink() {
    await this.encountersMenuLink.click()
    await browser.pause(2000)
  }
  async ClickViewButton() {
    await this.btnView.click()
    await browser.pause(2000)
  }

  async getNewCreateEncounterJoinButton(incedentNum) {
    return this.activeEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[6]//a`)
    await browser.pause(2000)
  }

  async getNewCreateEncounterViewButton(incedentNum) {
    return this.completedEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[6]//a`)
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterJoinButton(incedentNum) {
    await (await this.activeEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[6]//a`)).click()
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterViewButton(incedentNum) {
    //await (await $("//td[normalize-space()='" + incedentNum + "']//following-sibling::td[6]//a")).click()
    await (await this.completedEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[6]//a`)).click()
    await browser.pause(2000)
  }
}
module.exports = new EncounterStatusPage()