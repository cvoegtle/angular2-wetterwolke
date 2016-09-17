import { Angular2CliTmpPage } from './app.po';

describe('angular2-cli-tmp App', function() {
  let page: Angular2CliTmpPage;

  beforeEach(() => {
    page = new Angular2CliTmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
