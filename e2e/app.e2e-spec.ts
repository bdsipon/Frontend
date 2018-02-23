import { DualListBoxDemoPage } from './app.po';

describe('dual-list-box-demo App', () => {
  let page: DualListBoxDemoPage;

  beforeEach(() => {
    page = new DualListBoxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
