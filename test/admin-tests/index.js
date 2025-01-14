describe('Admin - tests', function() {
    it('should delete message', async function(browser) {
      await browser.navigateTo('http://localhost:9090/login');
  
      await browser.waitForElementVisible('body > main > div > div.col-6 > form', 5000);
  
      const userInput = 'body > main > div > div.col-6 > form > div:nth-child(1) > input';
      const passwordInput   = 'body > main > div > div.col-6 > form > div:nth-child(2) > input';
      const sendButton = 'body > main > div > div.col-6 > form > div.d-grid.gap-2 > button';
      const deleteButton = 'body > main > div:nth-child(2) > div > table > tbody > tr > td:nth-child(5) > button:nth-child(1)';
  
      await browser.setValue(userInput, 'remy');
      await browser.setValue(passwordInput, 'admin');
      await browser.click(sendButton);
  
      await browser.pause(500);
  
      let initialCount;
      await browser.getElementProperty(
        'body > main > div:nth-child(2) > div > table > tbody',
        'childElementCount',
        function(result) {
          initialCount = result.value;
        }
      );
      
      if(initialCount !== 0) await browser.click(deleteButton);
      
      await browser.pause(200);

      let finalCount;
      await browser.getElementProperty(
        'body > main > div:nth-child(2) > div > table > tbody',
        'childElementCount',
        function(result) {
            finalCount = result.value;
        }
      );

      if(initialCount === 0) {
        await browser.expect(initialCount).to.equal(finalCount);
      } else {
        await browser.expect(initialCount).to.not.equal(finalCount);
      }
      await browser.end();
    });

    it('should disconnect from admin page', async function(browser) {
        
        await browser.navigateTo('http://localhost:9090/login');
    
        await browser.waitForElementVisible('body > main > div > div.col-6 > form', 5000);
    
        const userInput = 'body > main > div > div.col-6 > form > div:nth-child(1) > input';
        const passwordInput   = 'body > main > div > div.col-6 > form > div:nth-child(2) > input';
        const sendButton = 'body > main > div > div.col-6 > form > div.d-grid.gap-2 > button';
        const disconnectButton = '#navbarTogglerDemo03 > ul > li > button';
    
        await browser.setValue(userInput, 'remy');
        await browser.setValue(passwordInput, 'admin');
        await browser.click(sendButton);
    
        await browser.waitForElementVisible('#navbarTogglerDemo03 > ul > li > button', 5000);

        await browser.click(disconnectButton);

        await browser.pause(200);

        await browser.assert.urlContains('/login');

        await browser.end();
      });

  });
  