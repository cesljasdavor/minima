import { MinimaPage } from './app.po';

describe('minima App', function() {
  let page: MinimaPage;

  beforeEach(() => {
    page = new MinimaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
