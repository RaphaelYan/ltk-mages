import { LtkMagesPage } from './app.po';

describe('ltk-mages App', () => {
  let page: LtkMagesPage;

  beforeEach(() => {
    page = new LtkMagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
