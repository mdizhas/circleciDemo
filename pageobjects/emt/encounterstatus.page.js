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
    return $("ul[id='provider-links'] li a")
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
    return this.completedEncounterTable.$("tbody tr:nth-child(1) td:nth-child(6) a:nth-child(1)")
  }

  get activeEncounterTable() {
    return $('#active-encounters')
  }

  get completedEncounterTable() {
    return $('#completed-encounters')
  }

  async ClickOnPutOnHoldButton() {
    await this.btnPutOnHold.click()
  }

  async ClickOnNoRemainInCallButton() {
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
    return this.activeEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)
    await browser.pause(2000)
  }

  async getNewCreateEncounterViewButton(incedentNum) {
    return this.completedEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterJoinButton(incedentNum) {
    await (await this.activeEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)).click()
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterViewButton(incedentNum) {
    await (await this.completedEncounterTable.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)).click()
    await browser.pause(2000)
  }
}
module.exports = new EncounterStatusPage()