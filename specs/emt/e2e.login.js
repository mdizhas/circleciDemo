const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('EMT Login / Logout', async () => {
await AllynetCommon.processLogin(process.env.EMT_USERNAME,process.env.EMT_PASSWORD,'invalidEMTpassword')
})