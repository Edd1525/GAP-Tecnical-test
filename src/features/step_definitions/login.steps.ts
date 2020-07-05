import { Given, When, Then } from 'cucumber'
import { LoginPage } from '../../pages/login.page'
import { DataTest as dataTest } from '../../enums/enum'

let t: TestController;
let loginPage: LoginPage

Given(/^an application$/, async function () {
  t = await this.waitForTestController();
  loginPage = new LoginPage(t)

  await loginPage.gotoApplication()
})

When(/^the user logs in with valid credentials$/, async () => {

  await loginPage.login("gap-automation-test@mailinator.com", "12345678")
})
