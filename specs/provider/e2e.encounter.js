const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const EncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const CareDeckPage = require('../../pageobjects/provider/caredeck.page')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('Create and Close Encounter', () => {
  const p = AllynetCommon.encounerParam('provider')
  const incidentNumber = p.incidentNumber
  it('Should login with Valid Credentials', async () => {
    await AllynetCommon.login(process.env.PROVIDER_USERNAME, process.env.PROVIDER_PASSWORD)
  })

  it('Should create a New Encounter', async () => {
    await browser.pause(2000)
    await AllynetCommon.CreateEncounter(p, 'provider')
    await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
    await expect(EncounterStatusPage.getNewCreateEncounterJoinButton(incidentNumber)).toExist()
  })

  it('Close Encounter', async () => {
    await browser.pause(2000)
    await EncounterStatusPage.ClickOnNewCreatedEncounterJoinButton(incidentNumber)
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
    let elem = await (CareDeckPage.BtnDropAudioCall)
    let isEnabled = await elem.isEnabled();
    if (isEnabled === false) {
      await CareDeckPage.ClickCallButton()
    }
    await browser.pause(2000)
    await CareDeckPage.ClickDropAudioCall()
    await expect(CareDeckPage.EndCallForEveryOne).toHaveText('END CALL FOR EVERYONE')
    await CareDeckPage.ClickEndCallForEveryOne()
    await EncounterStatusPage.ClickEncounterMenuLink()
    await expect(EncounterStatusPage.getNewCreateEncounterViewButton(incidentNumber)).toExist()
    await EncounterStatusPage.ClickOnNewCreatedEncounterViewButton(incidentNumber)
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})