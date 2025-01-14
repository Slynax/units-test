describe('Messages - tests', function() {
    it('should add a message in feeback section', async function(browser) {
      await browser.navigateTo('http://localhost:9090/feedback');
  
      await browser.waitForElementVisible('body > main > section:nth-child(5)', 5000);
  
      let initialCount;
      await browser.getElementProperty(
        'body > main > section:nth-child(5)',
        'childElementCount',
        function(result) {
          initialCount = result.value;
        }
      );
  
      const expeditorInput = 'body > main > form > div.input-group.mb-3 > input';
      const messageInput   = 'body > main > form > div:nth-child(2) > textarea';
      const sendButton = 'body > main > form > div.row > div.col-3 > div > button';
  
      await browser.setValue(expeditorInput, 'test');
      await browser.setValue(messageInput, 'test');
      await browser.execute(function() {
        document.querySelector('body > main > form > div.row > div.col-3 > div > button').scrollIntoView();
      });
      await browser.pause(200);
      await browser.click(sendButton);
  
  
      await browser.pause(500);
  
      // Check if the message has been added
      await browser.expect
        .element('body > main > section:nth-child(5)')
        .to.have.property('childElementCount')
        .which.equals(initialCount + 1);

      let autorText;
      await browser.getText('.card:first-child > div.card-header > div > div:nth-child(2)', function(result) {
        autorText = result.value;
      });
      // Check if the autor is correct
      await browser.assert.strictEqual(autorText, 'Auteur : test');

      let messageText;
      await browser.getText('.card:first-child > div.card-body > blockquote > p', function(result) {
        messageText = result.value;
      });
      // Check if the message is correct
      await browser.assert.strictEqual(messageText, 'test');

  
      await browser.end();
    });
  });
  