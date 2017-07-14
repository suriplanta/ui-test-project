import { UiTestProjectPage } from './app.po';

describe('ui-test-project App', () => {
  let page: UiTestProjectPage;

  beforeEach(() => {
    page = new UiTestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
