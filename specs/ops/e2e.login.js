const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('OPS Login / Logout',async () => {
  await AllynetCommon.processLogin(process.env.OPS_USERNAME,process.env.OPS_PASSWORD,'invalidOPSpassword')
  // it('Should not login with invalid Credentials', async () => {
  //   await AllynetCommon.invalidLogin(faker.internet.email(), 'OPSinvalidpassword')
  // })

  // it('Should login with Valid Credentials', async () => {
  //    await AllynetCommon.login(process.env.OPS_USERNAME, process.env.OPS_PASSWORD)
  // })

  // it('Should logout if logged in', async () => {
  //   await AllynetCommon.logout()
  // })
})