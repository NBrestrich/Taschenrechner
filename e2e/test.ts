/**
 *testmodul muss noch angepasst werden
 *
 */
import * as webdriver from 'selenium-webdriver';
import Promise = webdriver.promise.Promise;
import { TestprojectPage } from './app.po';

module.exports = () => {

  let testp: TestprojectPage = new TestprojectPage();

  expect(testp.getEntryField()).toBe(true);

};
