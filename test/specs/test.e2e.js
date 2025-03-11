

const { expect, browser } = require('@wdio/globals')


describe('appdemos_debug', () => {
    it('click', async () => {
         await browser.pause(5000);
         const app = await $("~Access'ibility");
         await app.click()
       
    })

    it('click again', async () => {
        await browser.pause(5000);

        const app = await $("~Accessibility Node Provider");
        await app.click()

        //const checkbox = await $(`(//android.widget.CheckBox[@resource-id='io.appium.android.apis:id/tasklist_finished'])[${i}]`);
        //const checkbox = await $('//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[3]')
        //await checkbox.click()
        
       

       await browser.back()

    });

    
   

   it('click again', async () => {
      await browser.pause(5000);
      const app = await $("~Accessibility Node Querying");
      await app.click()
    
      
      await browser.back()

      
      
   });

  


    it('click again', async () => {
        await browser.pause(5000);
        const app = await $("~Accessibility Service");
        await app.click()
        await browser.back()

    });
    

    it('click again', async () => {
        await browser.pause(5000);
        const app = await $("~Custom View");
        await app.click()
        await browser.back()
        await browser.back()
    });




    it('animation', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Animation"]');

        await app.click()
        

        
    
    });

    it('bouncing balls', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Bouncing Balls"]');

        await app.click()
        await browser.back()

        
    
    });

    
    
    


})




  

   














