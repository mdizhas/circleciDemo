const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const CareDeckPage = require('../../pageobjects/provider/caredeck.page')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-957 User navigates away from encounter care deck', () => {
  const p = AllynetCommon.encounerParam('provider')
  const incidentNumber = p.incidentNumber

  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
  })

  it('Should create a New Encounter', async () => {
    await AllynetCommon.CreateEncounter(p, 'provider')
    await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
    await expect(EncounterStatusPage.getNewCreateEncounterJoinButton(incidentNumber)).toExist()
    await browser.pause(2000)
    await EncounterStatusPage.ClickOnNewCreatedEncounterJoinButton(incidentNumber)
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
  })

  it('Verify User Navigates Away From Encounter Care Deck page and click the Rejoin button', async () => {
    await AllynetCommon.userNavigatesAway('provider',incidentNumber)
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})