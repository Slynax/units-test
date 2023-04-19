describe('Tchat', async () => {
  await before(browser => browser.navigateTo('http://127.0.0.1:9090'));

  test('Should load the tchatbot interface', (browser) => {
    browser
      .waitForElementPresent('nav')
      .assert.textContains('nav', 'Navbar');
  });

  test('Should count the number of messages of spiderman bot for hello message is 2', (browser) => {
    browser
      .waitForElementPresent('nav')
      .assert.visible('input')
      .setValue('input', 'hello')
      .click('.typing-message button')
      .assert.textContains('#bot1 span', '2');
  });
});
