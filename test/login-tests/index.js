describe('Login - tests', function() {
    it('should login to admin page', async function(browser) {
      await browser.navigateTo('http://localhost:9090/login');
  
      await browser.waitForElementVisible('body > main > div > div.col-6 > form', 5000);
  
      const userInput = 'body > main > div > div.col-6 > form > div:nth-child(1) > input';
      const passwordInput   = 'body > main > div > div.col-6 > form > div:nth-child(2) > input';
      const sendButton = 'body > main > div > div.col-6 > form > div.d-grid.gap-2 > button';
  
      await browser.setValue(userInput, 'remy');
      await browser.setValue(passwordInput, 'admin');
      await browser.click(sendButton);
  
      await browser.pause(500);
  
      await browser.assert.urlContains('/admin');
      await browser.end();
    });

    it('should not login to admin page', async function(browser) {
      await browser.navigateTo('http://localhost:9090/login');
  
      await browser.waitForElementVisible('body > main > div > div.col-6 > form', 5000);
  
      const userInput = 'body > main > div > div.col-6 > form > div:nth-child(1) > input';
      const passwordInput   = 'body > main > div > div.col-6 > form > div:nth-child(2) > input';
      const sendButton = 'body > main > div > div.col-6 > form > div.d-grid.gap-2 > button';
  
      await browser.setValue(userInput, 'remy');
      await browser.setValue(passwordInput, 'wrongPassword');
      await browser.click(sendButton);
  
      await browser.pause(500);
  
      await browser.assert.urlContains('/login');
      await browser.end();
    });
  });
  