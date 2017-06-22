import { IndusoftcrPage } from './app.po';

describe('indusoftcr App', () => {
  let page: IndusoftcrPage;

  beforeEach(() => {
    page = new IndusoftcrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
