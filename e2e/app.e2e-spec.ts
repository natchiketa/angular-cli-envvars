import { V1.1.0Page } from './app.po';

describe('v1.1.0 App', () => {
  let page: V1.1.0Page;

  beforeEach(() => {
    page = new V1.1.0Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
