import { YourApplicationPage } from './app.po';

describe('your-application App', function() {
  let page: YourApplicationPage;

  beforeEach(() => {
    page = new YourApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
