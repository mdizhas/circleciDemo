const CareDeckEDSbjectivePage = require('../../pageobjects/provider/caredecksubjective.page')

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
  get encountersMenuEMSLink() {
    return $("//ul[@id='ems-links']//li//a")
  }
  get encountersMenuOPSLink() {
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
    return $('#provider-active-encounters > div > table')
  }

  get completedEncounterTable() {
    return $('#provider-completed-encounters > div > table')
  }

  get activeEncounterTableEMS() {
    return $('#active-encounters')
  }

  get completedEncounterTableEMS() {
    return $('#completed-encounters')
  }

  get userImage() {
    return $('.user-image')
  }
  get dropDownBtn() {
    return $("span[class='hidden-sm'] b")
  }
  get mdAllyLogo() {
    return $(".brand-link.logo-switch")
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
    await this.btnView.waitForDisplayed()
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

  //FOR EMS ENCOUNTER STATUS TABLE

  async getNewCreateEncounterJoinButtonEMS(incedentNum) {
    return this.activeEncounterTableEMS.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)
    await browser.pause(2000)
  }

  async getNewCreateEncounterViewButtonEMS(incedentNum) {
    return this.completedEncounterTableEMS.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterJoinButtonEMS(incedentNum) {
    await (await this.activeEncounterTableEMS.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)).click()
    await browser.pause(2000)
  }

  async ClickOnNewCreatedEncounterViewButtonEMS(incedentNum) {
    //await (await $("//td[normalize-space()='" + incedentNum + "']//following-sibling::td[6]//a")).click()
    await (await this.completedEncounterTableEMS.$(`//td[normalize-space()='${incedentNum}']//following-sibling::td[5]//a`)).click()
    await browser.pause(2000)
  }

  async clickAndVerifyViewButton() {
    await browser.pause(5000)
    await expect(this.btnView).toBeDisplayed()
    await this.ClickViewButton()
    await browser.pause(2000)
    await expect(CareDeckEDSbjectivePage.EncounterDocumentationHeader).toHaveText('ENCOUNTER DOCUMENTATION')
  }
}
module.exports = new EncounterStatusPage()