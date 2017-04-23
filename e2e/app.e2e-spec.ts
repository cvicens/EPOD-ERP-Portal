import { EPODERPPortalPage } from './app.po';

describe('epod-erp-portal App', () => {
  let page: EPODERPPortalPage;

  beforeEach(() => {
    page = new EPODERPPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
