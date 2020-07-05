
import { Browser, Util } from '../utils';
import { selector } from '../utils/selector-factory';
import { expect } from 'chai';
import { ClientFunction } from 'testcafe';

export class UserPage {
  private t: any;
  private browser: Browser;
  private util: Util;
  private linkCreateNewEmployee: any;
  private inputFirstNameCreated: any;
  private inputFirstName: any;
  private inputLastName: any;
  private inputLastNameCreated: any;
  private inputEmail: any;
  private inputEmailCreated: any;
  private deleteUserFromTable: any;
  private inputIdentification: any;
  private inputIdentificationCreated: any;
  private inputLeaderName: any;
  private inputLeaderNameCreated: any;
  private selectOptionYear: any;
  private selectOptionMonth: any;
  private selectOptionDay: any;
  private btnSubmit: any;
  private linkLogout: any;

  constructor(t: any) {
    this.t = t;
    this.browser = new Browser(this.t);
    this.linkLogout = selector('#user_information > span > a');
    this.util = new Util(t);
    this.linkCreateNewEmployee = selector('#content > p > a');
    this.inputFirstName = selector('#employee_first_name')
    this.inputFirstNameCreated = selector('#content > p:nth-child(2)')
    this.inputLastName = selector('#employee_last_name')
    this.inputLastNameCreated = selector('#content > p:nth-child(3)')
    this.inputEmail = selector('#employee_email')
    this.inputEmailCreated = selector('#content > p:nth-child(4)')
    this.inputIdentification = selector('#employee_identification')
    this.inputIdentificationCreated = selector('#content > p:nth-child(5)')
    this.inputLeaderName = selector('#employee_leader_name')
    this.inputLeaderNameCreated = selector('#content > p:nth-child(6)')
    this.btnSubmit = selector('.actions input[type=submit]')
    this.selectOptionYear = selector('#employee_start_working_on_1i')
    this.selectOptionMonth = selector('#employee_start_working_on_2i')
    this.selectOptionDay = selector('#employee_start_working_on_3i')
  }

  async createEmployee(name: string, lastName: string, id: string, fullDate: string, email: string, leader: string) {

    const date = this.util.selectDates(fullDate)

    await this.t
      .click(this.linkCreateNewEmployee)
      .typeText(this.inputFirstName, name)
      .typeText(this.inputLastName, lastName)
      .typeText(this.inputIdentification, id)
      .typeText(this.inputEmail, email)
      .typeText(this.inputLeaderName, leader)

    const yearOption = this.selectOptionYear.find('option')

    await this.t
      .click(this.selectOptionYear)
      .click(yearOption.withText(date.year))
      .expect(yearOption.value).eql(date.year)

    const monthOption = this.selectOptionMonth.find('option')

    await this.t
      .click(this.selectOptionMonth)
      .click(monthOption.withText(date.nameMonth))
      .expect(monthOption.innerText).eql(date.nameMonth)

    const dayOption = this.selectOptionDay.find('option')

    await this.t
      .click(this.selectOptionDay)
      .click(dayOption.withText(date.day))

    await this.t
      .click(this.btnSubmit)
  }

  async getFirstName() {
    return this.inputFirstNameCreated.innerText
  }

  async getLastName() {
    return this.inputLastNameCreated.innerText
  }

  async getEmail() {
    return this.inputEmailCreated.innerText
  }

  async getId() {
    return this.inputIdentificationCreated.innerText
  }

  async logout() {
    await this.t
      .click(this.linkLogout)
  }

  async getLeaderName() {
    return this.inputLeaderNameCreated.innerText
  }

  async getTheUserRow(user: string) {
    await this.t.navigateTo('https://vacations-management.herokuapp.com/employees').maximizeWindow()

    return this.util.getUserRow(user)
  }

  async deleteUser(user: string) {
    await this.t.navigateTo('https://vacations-management.herokuapp.com/employees').maximizeWindow()

    const row = await this.util.getUserRow(user)
    const selectorDeleteUser = `#content > table > tbody > tr:nth-child(${row}) > td:nth-child(9) > a`

    this.deleteUserFromTable = selectorDeleteUser

    await this.t
      .setNativeDialogHandler(() => true)
      .click(this.deleteUserFromTable, { speed: 0.4 })

    await this.t.click('#buttonConfirm');

  }
}
