class CareDeckPage {

  get CommunicationsHeader() {
    return $('.provider-header.communications-header.d-flex.align-items-center.header-btn.position-relative')
  }

  get PublicSafetyDataHeader() {
    return $("//div[contains(text(),'PUBLIC SAFETY DATA')]")
  }

  get EncounterDocumentationHeader() {
    return $("//div[contains(text(),'ENCOUNTER DOCUMENTATION')]")
  }

  get PatientInformationLabel() {
    return $("div[class='emt-datetime border-bottom-0 patient_info'] div[class='dispatch-head position-relative']")
  }

  get EncounterInformationLabel() {
    return $("div[id='edit_patient_info'] div[class='dispatch-head']")
  }

  get LocationInformationLabel() {
    return $("div[class='emt-datetime border-bottom-0 location-info position-relative'] div[class='dispatch-head position-relative']")
  }

  get SourceLabel() {
    return $("//div[normalize-space()='Source']")
  }

  get ImagesAndDocumentsLabel() {
    return $("//div[@class='dispatch-head image-header']")
  }

  get InsuranceLabel() {
    return $("div[class='emt-datetime border-bottom-0 insurance-info position-relative'] div[class='dispatch-head position-relative']")
  }

  //Patient Infomation
  get BtnEditPatientInformation() {
    return $('.edit-btn.edit3')
  }
  get BtnSavePatientInformation() {
    return $("//div[@class='emt-datetime border-bottom-0 patient_info']//button[@class='edit-btn done'][normalize-space()='SAVE']")
  }
  get FirstName() {
    return $('#encounter_first_name')
  }
  get LastName() {
    return $('#encounter_last_name')
  }
  get Dob() {
    return $('#enc_dob')
  }
  get Gender() {
    return $('#gender-select')
  }
  get ContactNumber() {
    return $('#phone')
  }
  get Address1() {
    return $('#address1')
  }
  get Address2() {
    return $('#address2')
  }
  get City() {
    return $('#city')
  }
  get State() {
    return $('#state')
  }
  get Zip() {
    return $('#zip_code')
  }
  get State() {
    return $('#state')
  }
  get Email() {
    return $('#email')
  }
  get EmailSpan() {
    return $('#edit_patient_info > div.emt-datetime.border-bottom-0.patient_info > div:nth-child(13) > span.dispatch-data')
  } get PatientNameSpan() {
    return $("div[class='emt-datetime border-bottom-0 patient_info'] div[class='data-wrapper']")
  }
  get ContactNumberSpan() {
    return $('#psd-patient-number')
  }

  //Incident Location Information
  get BtnEditLocationInformation() {
    return $('.edit-btn.edit2')
  }
  get BtnSaveLocationInformation() {
    return $("//div[@class='emt-datetime border-bottom-0 location-info position-relative']//button[@class='edit-btn done'][normalize-space()='SAVE']")
  }
  get IncidentAddress() {
    return $('#incident_address')
  }
  get IncidentClosestInteraction() {
    return $('#closest_intersection')
  }
  get IncidentCity() {
    return $('#incident_city')
  }
  get IncidentCountry() {
    return $('#incident_county')
  }
  get IncidentState() {
    return $('#incident_state')
  }
  get IncidentZip() {
    return $('#incident_zip')
  }
  get IncidentAddressSpan() {
    return $('#edit_location_info > div > div:nth-child(3) > div')
  }
  get IncidentSuccessSaveText() {
    return $(".success-meesage.location-saved")
  }

  //Insurance Informaton
  get BtnEditInsurance() {
    return $(".edit-btn.edit1")
  }
  get BtnSaveInsurance() {
    return $("div[class='emt-datetime border-bottom-0 insurance-info position-relative'] button[class='edit-btn done']")
  }
  get InsurancePayer() {
    return $("#insurance_payer")
  }
  get InsurancePlanName() {
    return $("#plan_name")
  }
  get InsuranceMemberId() {
    return $("#member_id")
  }
  get InsuranceStatus() {
    return $("#status")
  }
  get InsuranceBenefitsContact() {
    return $("#benefits_contact")
  }
  get InsurancePcpName() {
    return $("#pcp_name")
  }
  get InsurancePcpContact() {
    return $("#pcp_contact")
  }
  get InsurancePharmacy() {
    return $("#pharmacy")
  }
  get InsurancePharmacyPlan() {
    return $("#pharmacy_plan")
  }
  get InsurancePharmacyContact() {
    return $("#pharmacy_contact")
  }
  get InsuranceUrl() {
    return $("#url")
  }
  get InsurancePayerSpan() {
    return $("#edit_insurance_info > div > div:nth-child(3) > div > span")
  }
  get InsuranceSuccessSaveText() {
    return $(".success-meesage.insurance-saved")
  }

  get BtnCall() {
    return $('.psd-call-patient')
  }
  get BtnDropAudioCall() {
    return $('#btn_drop_audio_call')
  }
  get BtnDropAudioParticipantCall() {
    return $('#btn_drop_audio_call')
  }
  get EndCallForEveryOne() {
    return $('#end-conference')
  }
  get ErrorModelDialog() {
    return $('#error-modal > div > div > div')
  }
  get ErrorModelDialogCloseBtn() {
    return $('#error-modal > div > div > div > button > svg')
  }

  async ClickDropAudioCall() {
    await this.BtnDropAudioCall.click()
    await browser.pause(2000)
  }

  async ClickDropAudioParticipantCall() {
    await this.BtnDropAudioParticipantCall.click()
    await browser.pause(2000)
  }

  async ClickEndCallForEveryOne() {
    await this.EndCallForEveryOne.click()
    await browser.pause(2000)
  }

  async ClickCallButton() {
    await this.BtnCall.click()
    await browser.pause(2000)
    if(this.ErrorModelDialog.isDisplayed()){
      this.ErrorModelDialogCloseBtn.click()
    }
    
  }

  async ClickEditButtonPatientInfo() {
    await this.BtnEditPatientInformation.click()
  }

  async ClickEditButtonLocationInfo() {
    await this.BtnEditLocationInformation.click()
  }

  async ClickEditButtonInsurance() {
    await this.BtnEditInsurance.click()
  }

  async ClickSaveButtonPatientInfo() {
    await this.BtnSavePatientInformation.click()
  }

  async ClickSaveButtonLocationInfo() {
    await this.BtnSaveLocationInformation.click()
  }

  async ClickSaveButtonInsurance() {
    await this.BtnSaveInsurance.click()
  }

  async updatePatientInformation(firstName, lastName, dob, gender, contactNumber, address1, address2, city, state, zip, email) {
    await this.FirstName.setValue(firstName)
    await this.LastName.setValue(lastName)
    await this.Dob.setValue(dob)
    await this.Gender.selectByVisibleText(gender)
    await this.ContactNumber.setValue(contactNumber)
    await this.Address1.setValue(address1)
    await this.Address2.setValue(address2)
    await this.City.setValue(city)
    await this.State.setValue(state)
    await this.Zip.setValue(zip)
    // await this.Email.setValue(email)
    await this.BtnSavePatientInformation.click()
  }

  async updateIncidentLocationInformation(address, closestIntersection, city, country, state, zip) {
    await this.IncidentAddress.setValue(address)
    await this.IncidentClosestInteraction.setValue(closestIntersection)
    await this.IncidentCity.setValue(city)
    await this.IncidentCountry.setValue(country)
    await this.IncidentState.setValue(state)
    await this.IncidentZip.setValue(zip)
    await this.BtnSaveLocationInformation.click()
  }

  async updateInsuranceInformation(insurancePayer, planName, memberId, status, benefitsContact, pcpName, pcpContact, pharmacy, pharmacyPlan, pharmacyContact, pharmacyUrl) {
    await this.InsurancePayer.setValue(insurancePayer)
    await this.InsurancePlanName.setValue(planName)
    await this.InsuranceMemberId.setValue(memberId)
    await this.InsuranceStatus.setValue(status)
    await this.InsuranceBenefitsContact.setValue(benefitsContact)
    await this.InsurancePcpName.setValue(pcpName)
    await this.InsurancePcpContact.setValue(pcpContact)
    await this.InsurancePharmacy.setValue(pharmacy)
    await this.InsurancePharmacyPlan.setValue(pharmacyPlan)
    await this.InsurancePharmacyContact.setValue(pharmacyContact)
    await this.InsuranceUrl.setValue(pharmacyUrl)
    await browser.pause(3000)
    await this.BtnSaveInsurance.click()
  }
}
module.exports = new CareDeckPage()