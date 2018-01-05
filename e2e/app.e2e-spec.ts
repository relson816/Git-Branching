import { Mact1Page } from './app.po';

describe('mact1 App', function() {
  let page: Mact1Page;

  beforeEach(() => {
    page = new Mact1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
