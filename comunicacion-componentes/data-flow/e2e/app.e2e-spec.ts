import { DataFlowPage } from './app.po';

describe('data-flow App', () => {
  let page: DataFlowPage;

  beforeEach(() => {
    page = new DataFlowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
