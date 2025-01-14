describe('Contact - tests', function() {
    it('should add a message in feeback section', async function(browser) {
      await browser.navigateTo('http://localhost:9090');
  
      await browser.waitForElementVisible('body > header > div.row.pt-3 > div.col-2.pt-2 > a', 5000);
  
      const contactButton = 'body > header > div.row.pt-3 > div.col-2.pt-2 > a';
      await browser.click(contactButton);
      await browser.pause(200);
      await browser.waitForElementVisible('body > main > section > form', 5000);

      const firstnameInput = 'body > main > section > form > div:nth-child(1) > input:nth-child(2)';
      const lastnameInput = 'body > main > section > form > div:nth-child(1) > input:nth-child(4)';
      const phoneInput = 'body > main > section > form > div:nth-child(2) > input:nth-child(2)';
      const emailInput = 'body > main > section > form > div:nth-child(2) > input:nth-child(4)';
      const startDateInput = 'body > main > section > form > div:nth-child(3) > input:nth-child(2)';
      const endDateInput = 'body > main > section > form > div:nth-child(3) > input:nth-child(4)';
      const messageInput = 'body > main > section > form > div:nth-child(4) > textarea';
      const sendButton = 'body > main > section > form > div.row > div.col-3 > div > button';

      await browser.setValue(firstnameInput, 'Remy');
      await browser.setValue(lastnameInput, 'Louron');
      await browser.setValue(phoneInput, '0606060606');
      await browser.setValue(emailInput, 'test@test.fr');
      await browser.setValue(startDateInput, '01/06/2021');
      await browser.setValue(endDateInput, '02/06/2021');
      await browser.setValue(messageInput, 'Hello');

      await browser.execute(function() {
        document.querySelector('body > main > section > form > div.row > div.col-3 > div > button').scrollIntoView();
      });
      await browser.pause(200);
      await browser.click(sendButton);
  
      await browser.pause(500);
  
      await browser.assert.urlContains('firstName=Remy');
      await browser.assert.urlContains('lastName=Louron');
      await browser.assert.urlContains('mobilePhone=0606060606');
      await browser.assert.urlContains('email=test%40test.fr');
      await browser.assert.urlContains('arrivedAt=2021-06-01');
      await browser.assert.urlContains('departureAt=2021-06-02');
      await browser.assert.urlContains('message=Hello');

      await browser.end();
    });
  });
  