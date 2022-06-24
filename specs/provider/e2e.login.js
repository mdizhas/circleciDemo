const { faker } = require('@faker-js/faker')
const LoginPage = require('../../pageobjects/common/login.page')
const LogoutPage = require('../../pageobjects/common/logout.page')
const LoginCredentialsData = require('../../pageobjects/testData/logincredentials.data')
const AllynetCommon = require('../../pageobjects/common/allynetcommon')

describe('Provider Login / Logout', async() => {
    await AllynetCommon.processLogin(process.env.PROVIDER_USERNAME,process.env.PROVIDER_PASSWORD,'invalidProviderpassword')
})
