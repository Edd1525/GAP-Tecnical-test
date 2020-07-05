
import { selector } from '../utils/selector-factory';

export class LoginPage {
  private t: any;
  private inputLoginUser: any;
  private inputLoginPass: any;
  private btnSignIn: any;

  constructor(t: any) {
    this.t = t;
    this.inputLoginUser = selector('#user_email')
    this.inputLoginPass = selector('#user_password')
    this.btnSignIn = selector('.submit')
  }

  async gotoApplication() {
    await this.t.navigateTo('https://vacations-management.herokuapp.com/users/sign_in').maximizeWindow()
  }

  async login(user: string, password: string) {
    await this.t
      .typeText(this.inputLoginUser, user)
      .typeText(this.inputLoginPass, password)
      .click(this.btnSignIn)
  }
}
