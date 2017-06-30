import { browser, element, by } from 'protractor';
import { error } from 'util';
import * as webdriver from 'selenium-webdriver';
import Promise = webdriver.promise.Promise;

export class TestprojectPage {
  navigateTo() {
    return browser.get('/');
  }

  setNumbersInFields(value1: number, value2: number) {
    element(by.id('value1')).clear();
    element(by.id('value2')).clear();
    element(by.id('value1')).sendKeys(value1.toString());
    element(by.id('value2')).sendKeys(value2.toString());
  }

  createRandomNum = function (min, max) {
    return parseInt(Math.random() * (max - min) + min);
  };


  getRandomResult(fromFirst: number, toFirst: number, fromSec: number, toSec: number) {

    let firstNumb: number = this.createRandomNum(fromFirst, toFirst);
    let secNumb: number = this.createRandomNum(fromSec, toSec);
    this.setNumbersInFields(firstNumb, secNumb);
    let sign = this.changeSignRand();

    return this.calculat(firstNumb, secNumb, sign);
  }

  calculat(firstNumb: Number, secNumb: Number, sign: string) {
    let result;
    if (sign == '+') {
      element(by.id('+')).click();
      result = Number(firstNumb) + Number(secNumb);
    }
    if (sign == '-') {
      element(by.id('-')).click();
      result = Number(firstNumb) - Number(secNumb);
    }
    if (sign == '*') {
      element(by.id('*')).click();
      result = Number(firstNumb) * Number(secNumb);
    }
    if (sign == '/') {
      element(by.id('/')).click();
      result = Number(firstNumb) / Number(secNumb);
    }
    element(by.id('calc')).click();
    return result;
  }

  changeSignRand(): string {
    let rand = this.createRandomNum(1, 5);
    let sign;
    if (rand == 1) {
      element(by.id('+')).click();
      sign = '+';
    } else if (rand == 2) {
      element(by.id('-')).click();
      sign = '-';
    } else if (rand == 3) {
      element(by.id('*')).click();
      sign = '*';
    } else if (rand == 4) {
      element(by.id('/')).click();
      sign = '/';
    } else {
      error('mist');
    }
    return sign;
  }

  getLastListEntry() {

   return element(by.css('#list > div:last-child')).getWebElement().getAttribute("innerHTML");

  }

  getListEntryOfPosition(num: Number): Promise<string> {

    return element(by.css('#list div:nth-child(' + num.toString() + ')')).getWebElement().getAttribute("innerHTML");
    
  }

  getPlusOperatorsButtons(): Promise<boolean> | boolean {
    return element(by.id('+')).isDisplayed();
  }

  getMinusOperatorsButtons(): Promise<boolean> | boolean {
    return element(by.id('-')).isDisplayed();
  }

  getMultiplierOperatorsButtons(): Promise<boolean> | boolean {
    return element(by.id('*')).isDisplayed();
  }

  getDivisorOperatorsButtons(): Promise<boolean> | boolean {
    return element(by.id('/')).isDisplayed();
  }

  getRechnenButtons(): Promise<boolean> | boolean {
    return element(by.id('calc')).isDisplayed();
  }

  getEntryField(): Promise<boolean> | boolean {
    return (element(by.id('value1')).isDisplayed(), element(by.id('value2')).isDisplayed());

  }

  compareResults(expectedResults: Number[], counter: number): Promise<boolean> | boolean {
    return this.getListEntryOfPosition(counter + 1).then(
      (num: string) => {
        if (num.substr(0, expectedResults[counter].toString().length) == expectedResults[counter].toString()) {
          return true;
        } else {
          return false;
        }
      }
    )
  }

}
