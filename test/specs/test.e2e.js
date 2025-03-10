

const { expect, browser } = require('@wdio/globals')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
         await browser.pause(5000);
        const app = await $("~Access'ibility");
        await app.click()
       
    })

    it('click again', async () => {
        await browser.pause(5000);
       const app = await $("~Accessibility Node Provider");
       await app.click()
       await browser.back()

    })

    
   

   it('click again', async () => {
      await browser.pause(5000);
      const app = await $("~Accessibility Node Querying");
      await app.click()
    
      
      await browser.back()

      
      
   })

  


    it('click again', async () => {
        await browser.pause(5000);
        const app = await $("~Accessibility Service");
        await app.click()
        await browser.back()
    })
    

    it('click again', async () => {
        await browser.pause(5000);
        const app = await $("~Custom View");
        await app.click()
        await browser.back()
    })


    it('click again', async () => {
         await browser.pause(5000);
         const app = await $("~Custom View");
         await app.click()
         await browser.back()
    
    })

    

    it('click again', async () => {
        await browser.pause(5000);
         const app = await $("~Custom View");
         await app.click()
         await browser.back()
         await browser.back()

    })


    it('click again', async () => {
        await browser.pause(5000);
        const app = await $("~Animation");
        await app.click()
        
    
    

    


})
})



  

   














