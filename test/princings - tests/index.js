describe('Pricing - tests', function() {
    it('should redirect to admin page', async function(browser) {
      await browser.navigateTo('http://localhost:9090/pricing');
  
      await browser.waitForElementVisible('body > header > div.container.mt-5.pt-4 > div > div.col-7.pt-5 > div > div > a', 5000);

      const contactButton = 'body > header > div.container.mt-5.pt-4 > div > div.col-7.pt-5 > div > div > a';
      const contactCardButton1 = '#tarifs-pricing > div > div:nth-child(1) > div > div > div.d-grid.gap-2 > a';
      const contactCardButton2 = '#tarifs-pricing > div > div:nth-child(2) > div > div > div.d-grid.gap-2 > a';
      const contactCardButton3 = '#tarifs-pricing > div > div:nth-child(3) > div > div > div.d-grid.gap-2 > a';
      const buttonTab = [contactButton, contactCardButton1, contactCardButton2, contactCardButton3];
      const pricingButton = '#navbarTogglerDemo03 > ul > li:nth-child(2) > a';

      for (const button of buttonTab) {
        // 1) scroll jusqu’au bouton
        await browser.execute(function(selector) {
          document.querySelector(selector).scrollIntoView({ block: 'center' });
        }, [button]);
      
        await browser.pause(300);
      
        // 2) cliquer
        await browser.click(button);
        await browser.pause(300);
      
        // 3) attendre la page "contact" et vérifier l’URL
        await browser.waitForElementVisible('body > main > section > form', 5000);
        await browser.assert.urlContains('/contact');
      
        // 4) Revenir sur /pricing
        await browser.click(pricingButton);
        await browser.pause(300);
        await browser.waitForElementVisible(
          'body > header > div.container.mt-5.pt-4 > div > div.col-7.pt-5 > div > div > a',
          5000
        );
        await browser.assert.urlContains('/pricing');
      }


      await browser.end();
    });

  });