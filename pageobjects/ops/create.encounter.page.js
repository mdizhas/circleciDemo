class CreateEncounterPage {
  get CreateNewEncounterElem() {
    return $('body > div.wrapper > div.content-wrapper > div > div > div.new-encounter-form.container > div > div.new-form-bar > div > div.col-11.new-form-bar-button > h1')
  }

  get Service() {
    return $('#encounter_service_id')
  }

  get IncidentNumber() {
    return $('#encounter_incident_number')
  }

  get FirstName() {
    return $('#encounter_encounter_request_attributes_first_name')
  }

  get LastName() {
    return $('#encounter_encounter_request_attributes_last_name')
  }

  get Gender() {
    return $('#encounter_encounter_request_attributes_gender')
  }

  get Dob() {
    return $('#dob')
  }

  get ContactNumber() {
    return $('#phone')
  }

  get ChiefCompliant() {
    return $('#encounter_encounter_request_attributes_dispatch_cc')
  }

  get btnSubmit() {
    return $("//button[@id='submit_only']")
  }

  get btnSubmitPlusJoin() {
    return $("//button[@id='submit_with_join_encounter']")
  }

  get badgeCounter() {
    return $('li > a > p > i')
  }

  get errorValidationMessage() {
    return $('.parsley-required')
  }

  async ClickCreateEncounter() {
    await this.CreateNewEncounterElem.click()
  }

  async CreateEncounter(service, incidentNumber, firstName, lastName, gender, dob, contactNumber, chiefCompliant) {
    await this.ClickCreateEncounter()
    await this.Service.selectByVisibleText(service)
    await this.IncidentNumber.setValue(incidentNumber)
    await this.FirstName.setValue(firstName)
    await this.LastName.setValue(lastName)
    await this.Gender.selectByVisibleText(gender)
    await this.Dob.setValue(dob)
    await this.ContactNumber.setValue(contactNumber)
    await this.ChiefCompliant.setValue(chiefCompliant)
  
    await this.btnSubmitPlusJoin.click()
    await browser.pause(2000)
  }

}

module.exports = new CreateEncounterPage