
import { Browser } from '../utils';
import { selector } from '../utils/selector-factory';

export class HomePage {
  private t: any;
  private labelSuccessLogin: any;
  private imgVacationsLogo: any;
  private labelWelcomeGap: any;

  constructor(t: any) {
    this.t = t;
    this.labelSuccessLogin = selector('.flash_notice').innerText
    this.imgVacationsLogo = selector('img').withAttribute('src', '/assets/site_title-34b060c1996fa36129429fcfb794655a.png').exists;
    this.labelWelcomeGap = selector('#user_information').innerText
  }

  async getMessageUserLogin() {

    return this.labelSuccessLogin
  }

  async getVacationsLogo() {

    return this.imgVacationsLogo
  }

  async getMessageWelcomeGap() {

    return this.labelWelcomeGap
  }

}
