import { Angular2WetterwolkePage } from './app.po';

describe('angular2-wetterwolke App', function() {
  let page: Angular2WetterwolkePage;

  beforeEach(() => {
    page = new Angular2WetterwolkePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
