import { HaploConvPage } from './app.po';

describe('haplo-conv App', () => {
  let page: HaploConvPage;

  beforeEach(() => {
    page = new HaploConvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
