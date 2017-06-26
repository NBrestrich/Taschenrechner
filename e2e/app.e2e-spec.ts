import { TaschenrechnerPage } from './app.po';

describe('taschenrechner App', () => {
  let page: TaschenrechnerPage;

  beforeEach(() => {
    page = new TaschenrechnerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
