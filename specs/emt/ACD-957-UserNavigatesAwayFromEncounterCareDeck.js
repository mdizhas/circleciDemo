const { faker } = require('@faker-js/faker')
const CareDeckPage = require('../../pageobjects/emt/caredeck.page')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-957 User navigates away from encounter care deck', () => {
  const param = AllynetCommon.encounerParam('emt')
  const incidentNumber = param.incidentNumber

  it('Should login with Valid Credentials and Create New Encounter', async () => {
    await AllynetCommon.login(process.env.EMT_USERNAME, process.env.EMT_PASSWORD)
    await AllynetCommon.CreateEncounter(param, 'emt')
    await browser.pause(2000)
    await expect(CareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
  })

  it('Verify User Navigates Away From Encounter Care Deck page and click the Rejoin button and back to care deack page.', async () => {
    await AllynetCommon.userNavigatesAway('emt', incidentNumber)
  })

  it('Should logout if logged in', async () => {
    await AllynetCommon.logout()
  })
})