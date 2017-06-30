import { browser, element, by } from 'protractor';
import { TestprojectPage } from './app.po';
import { isNumber } from 'util';

describe('Taschenrecher', function () {
  let page: TestprojectPage;

  beforeEach(() => {
    page = new TestprojectPage();
    page.navigateTo();
  });

  it('should shown the operator buttons', () => {
    expect(page.getPlusOperatorsButtons()).toBe(true);
    expect(page.getMinusOperatorsButtons()).toBe(true);
    expect(page.getMultiplierOperatorsButtons()).toBe(true);
    expect(page.getDivisorOperatorsButtons()).toBe(true);

  });

  it('should shown the "Rechnen" button', () => {
    expect(page.getRechnenButtons()).toBe(true);
  });

  it('should shown the 2 entry fields', () => {
    expect(page.getEntryField()).toBe(true);
  });

  it('should display all results async in the console', () => {

    for (let i = 0; i <= 30; i++) {
      let result;
      result = page.getRandomResult(0, 100, 0, 100);
      console.log(result + '---------');
      page.getLastListEntry().then(txt => console.log(txt.substr(0, result.toString().length)));
    }

  });


  
  
  it('should be reckoned correctly', () => {

    let firstNumber: Number[] = [3, 30, 5, 9];
    let secNumber: Number[] = [9, 45, 10, 2];
    let signStrings: string[] = ['+', '-', '*', '/'];
    let result;
    let expectedResults: Number[] = [12, 48, 13, 5, 21, -15, 20, 28, 45, 225, 50, 10, 1, 0.2, 0.9, 4.5];
    let k: number = 0;

    for (let i = 0; i < firstNumber.length; i++) {
      for (let j = 0; j < secNumber.length; j++) {
        console.log(i + ' = zähler erste zahl, ' + j + ' = zähler zweiter zahl, ' + (k + 1) + '. durchgang');
        page.setNumbersInFields(firstNumber[i].valueOf(), secNumber[j].valueOf());
        result = page.calculat(firstNumber[i].valueOf(), secNumber[j].valueOf(), signStrings[i]);
        console.log(expectedResults[k].toString() + ' == ' + result.toString() + ' = ' + firstNumber[i].valueOf() + ' ' + signStrings[i] + ' ' + secNumber[j].valueOf());
        k++;
      }
    }
    for (let i = 0; i < expectedResults.length; i++) {
      expect(page.compareResults(expectedResults,i)).toBe(true);
    }
  });

  it('should execute the test module', require('./test'));

});
