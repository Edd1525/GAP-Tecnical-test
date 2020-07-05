import { Then } from 'cucumber'
import { HomePage } from '../../pages/Home.page'
import { UserPage } from '../../pages/User.page'
import { DataTest as dataTest } from '../../enums/enum'

let t: TestController;
let homePage: HomePage
let userPage: UserPage

Then(/^the user see available information from home$/, async function () {
  t = await this.waitForTestController();
  homePage = new HomePage(t)
  userPage = new UserPage(t)

  await t
    .expect(await homePage.getVacationsLogo()).ok();  // validate vacations logo exist

  await t
    .expect(await homePage.getMessageUserLogin()).eql(dataTest.MESSAGES_SUCCESS);  // validate banner logo 

  await t
    .expect(await homePage.getMessageWelcomeGap()).eql('Welcome gap, Logout');  // validate Message Welcome GAP 
    
  await userPage.logout()
})

