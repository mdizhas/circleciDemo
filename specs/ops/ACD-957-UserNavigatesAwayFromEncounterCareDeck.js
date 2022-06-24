const { faker } = require('@faker-js/faker')
const OPSCareDeckPage = require('../../pageobjects/ops/caredeck.page')
const serviceData = require('../../pageobjects/testData/encounterservice.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('ACD-957 User navigates away from encounter care deck', () => {

  serviceData.forEach((opsService) => {
    const p = AllynetCommon.encounerParam('ops', opsService.service)
    const incidentNumber = p.incidentNumber

    it('Should login with Valid Credentials', async () => {
      await AllynetCommon.login(process.env.OPS_USERNAME, process.env.OPS_PASSWORD)
    })

    it('Should create a New Encounter', async () => {
      await AllynetCommon.CreateEncounter(p, 'ops')
      await expect(OPSCareDeckPage.CommunicationsHeader).toHaveText('COMMUNICATIONS')
    })

    it('Verify User Navigates Away From Encounter Care Deck page and click the Rejoin button and back to care deack page.', async () => {
      await AllynetCommon.userNavigatesAway('ops', incidentNumber)
    })

    it('Should logout if logged in', async () => {
      await AllynetCommon.logout()
    })
  })
})