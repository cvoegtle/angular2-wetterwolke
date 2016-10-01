import { MigrateWetterwolkePage } from './app.po';

describe('migrate-wetterwolke App', function() {
  let page: MigrateWetterwolkePage;

  beforeEach(() => {
    page = new MigrateWetterwolkePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
