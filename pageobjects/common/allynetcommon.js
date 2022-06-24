const { faker } = require('@faker-js/faker')
const EncounterData = require('../../pageobjects/testData/encounterdata')
const OPSEncounterPage = require('../../pageobjects/ops/create.encounter.page')
const CareDeckPage = require('../../pageobjects/ops/caredeck.page')
const EMTEncounterPage = require('../../pageobjects/emt/create.encounter.page')
const ProviderEncounterPage = require('../../pageobjects/provider/create.encounter.page')
const ProviderEncounterStatusPage = require('../../pageobjects/provider/encounterstatus.page')
const OPSEncounterStatusPage = require('../../pageobjects/ops/encounterstatus.page')
const EMTEncounterStatusPage = require('..//..//pageobjects/emt/encounterstatus.page')
const LoginPage = require('./login.page')
const LogoutPage = require('./logout.page')


class AllynetCommon {

    async login(username, password, opt = 'valid') {
        await LoginPage.open()
        await LoginPage.login(username, password)
        if (opt === 'valid') {
            await expect(LoginPage.validLoginText).toHaveText('ACTIVE ENCOUNTERS')
        }
        else {
            await expect(LoginPage.invalidLoginText).toHaveText('Invalid Email or password.')
        }
    }

    async logout() {
        await LogoutPage.logout()
        await expect(LogoutPage.validLogoutText).toHaveText('You need to sign in before continuing.')
    }

    async processLogin(username, password, invalid) {
        it('Should not login with invalid Credentials', async () => {
            await this.login(faker.internet.email(), invalid, 'invalid')
        })

        it('Should login with Valid Credentials', async () => {
            await this.login(username, password, 'valid')

        })

        it('Should logout if logged in', async () => {
            await this.logout()
        })

    }

    encounerParam(role = 'ops', service = EncounterData.service) {
        let parm
        if (role === 'emt') {
            parm = {
                service, incidentNumber: faker.random.alphaNumeric(10).toUpperCase(),
                firstName: faker.name.firstName(), lastName: faker.name.firstName(),
                gender: EncounterData.gender, dob: EncounterData.dob,
                contactNumber: EncounterData.contact_number,
                chiefCompliant: faker.name.jobDescriptor(), emsRecommendation: faker.name.jobDescriptor(),
                allergiesMedications: faker.name.jobDescriptor(), currentMedications: faker.name.jobDescriptor(),
            }
        }

        else {
            parm = {
                service, incidentNumber: faker.random.alphaNumeric(10).toUpperCase(),
                firstName: faker.name.firstName(), lastName: faker.name.firstName(),
                gender: EncounterData.gender, dob: EncounterData.dob,
                contactNumber: EncounterData.contact_number,
                chiefCompliant: faker.name.jobDescriptor()
            }

        }
        return parm
    }

    async setValues(page, obj, role) {
        await page.ClickCreateEncounter()
        await page.Service.selectByVisibleText(obj.service)
        await page.IncidentNumber.setValue(obj.incidentNumber)
        await page.FirstName.setValue(obj.firstName)
        await page.LastName.setValue(obj.lastName)
        await page.Gender.selectByVisibleText(obj.gender)
        await page.Dob.setValue(obj.dob)
        await page.ContactNumber.setValue(obj.contactNumber)
        await page.ChiefCompliant.setValue(obj.chiefCompliant)
        if (role === 'emt') {
            await page.EMSRecommendation.setValue(obj.emsRecommendation)
            await page.AllergiesMedications.setValue(obj.allergiesMedications)
            await page.CurrentMedications.setValue(obj.currentMedications)
        }
    }

    async CreateEncounter(obj, role) {
        if (role === 'emt') {
            await this.setValues(EMTEncounterPage, obj, role)
            await EMTEncounterPage.btnSubmitPlusJoin.click()
        }
        else if (role === 'provider') {
            await this.setValues(ProviderEncounterPage, obj, role)
            await ProviderEncounterPage.btnSubmit.click()
        }
        else if (role === 'ops') {
            await this.setValues(OPSEncounterPage, obj, role)
            await OPSEncounterPage.btnSubmitPlusJoin.click()
        }
    }

    async nevigate(page, incidentNumber) {
        await browser.pause(2000)
        await page.ClickEncounterMenuLink()
        await expect(page.leaveEncounterPopup).toHaveTextContaining('PUT ENCOUNTER ON HOLD?')
        await page.ClickOnNoRemainInCallButton()
        await page.ClickEncounterMenuLink()
        await expect(page.leaveEncounterPopup).toHaveTextContaining('PUT ENCOUNTER ON HOLD?')
        await page.ClickOnPutOnHoldButton()
        await browser.pause(2000)
        await expect(page.getNewCreateEncounterJoinButton(incidentNumber)).toHaveText('Rejoin')
        await page.ClickOnNewCreatedEncounterJoinButton(incidentNumber)
    }

    async userNavigatesAway(role, incidentNumber) {
        if (role === 'emt') {
            await this.nevigate(EMTEncounterStatusPage, incidentNumber)
        }
        else if (role === 'provider') {
            await this.nevigate(ProviderEncounterStatusPage, incidentNumber)
        }
        else if (role === 'ops') {
            await this.nevigate(OPSEncounterStatusPage, incidentNumber)
        }
    }

    async doDeleteTextAreaValue(textarea) {
        const txtarea = await textarea
        for (let i = 0; i < txtarea.length; i++) {
            await (txtarea[i]).click()
            await (txtarea[i]).keys(['Control', 'a'])
            await (txtarea[i]).keys("Delete")
            await browser.pause(2000)
        }
    }

    async doTextareaCheckedNotReview(testdata, txtarea, chekbox) {
        await browser.pause(2000)
        const textarea = await txtarea
        const checkbox = await chekbox
        for (let i = 0; i < checkbox.length; i++) {
            const attr = await (checkbox[i]).isSelected()
            if (attr === false) {
                await browser.pause(2000)
                await (textarea[i].addValue(testdata))
            }
            else {
                await browser.pause(2000)
                await (checkbox[i]).click()
                await browser.pause(2000)
                await (textarea[i].addValue(testdata))
            }
        }
    }
}
module.exports = new AllynetCommon()