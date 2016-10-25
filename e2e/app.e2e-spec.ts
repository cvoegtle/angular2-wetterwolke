import { Angular2UpgradePage } from './app.po';

describe('angular2-upgrade App', function() {
  let page: Angular2UpgradePage;

  beforeEach(() => {
    page = new Angular2UpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
