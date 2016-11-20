import { Ng2SvgMorpheusPage } from './app.po';

describe('ng2-svg-morpheus App', function() {
  let page: Ng2SvgMorpheusPage;

  beforeEach(() => {
    page = new Ng2SvgMorpheusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
