const createTestCafe = require('testcafe');
import { When, Then } from 'cucumber'
import { UserPage } from '../../pages/user.page'

let t: TestController
let userPage: UserPage

When(/^the user try to create a new employee$/, async function () {
  t = await this.waitForTestController();

  userPage = new UserPage(t)

  await userPage.createEmployee('James', 'Smith', '1234567890', '21-01-2015', 'ebustamante@gap.com', 'Edward Bustamante A')
})

Then(/^User should be create$/, async function () {

  await t
    .expect(await userPage.getFirstName()).contains('James')

  await t
    .expect(await userPage.getEmail()).contains('ebustamante@gap.com')

  await t
    .expect(await userPage.getLastName()).contains('Smith')

  await t
    .expect(await userPage.getId()).contains('1234567890')

  await t
    .expect(await userPage.getLeaderName()).contains('Edward Bustamante A')
})

Then(/^the user want to see where is your user register$/, async function () {

  console.log('the row is: ', await userPage.getTheUserRow('Edward Bustamante A'));
  await userPage.logout()
})

When(/^the user delete the user created previously$/, async function () {
  t = await this.waitForTestController();
  userPage = new UserPage(t)

  await userPage.deleteUser('Edward Bustamante A')

})

When(/^the user should not exist$/, async function () {

  await this.t.
    expect(await userPage.getTheUserRow('Edward Bustamante A')
    ).eql('asdas')
})
