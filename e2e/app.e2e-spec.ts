import { Ng2LaravelPage } from './app.po';

describe('ng2-laravel App', function() {
  let page: Ng2LaravelPage;

  beforeEach(() => {
    page = new Ng2LaravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
