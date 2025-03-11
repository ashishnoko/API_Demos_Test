

const { expect, browser, driver } = require('@wdio/globals')


describe('appdemos_debug', () => {
    it('Accessibility', async () => {
         await browser.pause(5000);
         const app = await $("~Access'ibility");
         await app.click()
       
    })

    it('Accessibility Node Provider', async () => {
        await browser.pause(5000);

        const app = await $("~Accessibility Node Provider");
        await app.click()
        await browser.back()

    });

    
   

   it('Accessibility Node Querying', async () => {
      await browser.pause(5000);

      const appis = await $("~Access'ibility");
      await appis.click()
       
      const app = await $("~Accessibility Node Querying");
      await app.click()
      const checkbox = await $('//*[@resource-id="io.appium.android.apis:id/tasklist_finished"][1]')
      await checkbox.click()
      for (let i = 0; i < 7 ; i++) {

        
        
        const checkbox = await $(`(//*[@resource-id="io.appium.android.apis:id/tasklist_finished"])[${i + 1}]`);
        await checkbox.click()
        

      }

    
      
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

    it('clonning', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Cloning"]');
        await app.click()
        const run = await $('//*[@content-desc="Run"]');
        await run.click()
        await browser.back()

        
    
    });

    it('Customer Evaluator', async () => {
        await browser.pause(5000);
        const app = await $('//android.widget.TextView[@content-desc="Custom Evaluator"]');
        await app.click()
        const run = await $('//android.widget.Button[@content-desc="Play"]');
        await run.click()
        await browser.back()

        
    
    });

    it('Default layout animation', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Animation"]');
        await app.click()
        
        const appi = await $('//android.widget.TextView[@content-desc="Default Layout Animations"]');
        await appi.click()

        const appis = await $('//android.widget.Button[@content-desc="Add Button"]');
        

        for(let i =0; i< 10; i++){

            await appis.click()


        }

        await browser.back()
    });

    it('Events', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Animation"]');
        await app.click()
      
        const run = await $('//android.widget.TextView[@content-desc="Events"]');
        await run.click()

        play = await $('//android.widget.Button[@content-desc="Play"]');

        await play.click()

        

      
        

        end_immediate = await $('//android.widget.CheckBox[@content-desc="End Immediately"]');
        await end_immediate.click()



        await browser.back()

        
    
    });

    it('Hide show animations', async () => {
        await browser.pause(5000);

        const app = await $('//*[@content-desc="Animation"]');
        await app.click()
        const appis = await $('//android.widget.TextView[@content-desc="Hide-Show Animations"]');
        await appis.click()


        custom_animations

         for(let i = 0; i<3; i++){

            const btn = await $(`//android.widget.Button[@text="${i}"]`)

            await btn.click()


        }
        
          
      
        await browser.back()


       

        
    
    });

    it('Layout Animations', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Animation"]');
        await app.click()
        const appis = await $('//android.widget.TextView[@content-desc="Layout Animations"]');
        await appis.click()

        add_button = await $('//android.widget.Button[@content-desc="Add Button"]');

        for(let i =0; i<10; i++){

            await add_button.click()


        }
        await add_button.click()
        await browser.back()


       
        
    
    });

    it('Loading', async () => {
        await browser.pause(5000);
        const appis = await $('//*[@content-desc="Animation"]');
        await appis.click()
        const app = await $('//android.widget.TextView[@content-desc="Loading"]');
        await app.click()
        const run = await $('//android.widget.Button[@content-desc="Run"]');
        await run.click()
        await browser.pause(2000);
        await browser.back()

    });

    it('Multiple properties', async () => {
        await browser.pause(5000);
        const appis = await $('//*[@content-desc="Animation"]');
        await appis.click()
        const app = await $('//android.widget.TextView[@content-desc="Multiple Properties"]');
        await app.click()
        const run = await $('//android.widget.Button[@content-desc="Run"]');
        await run.click()
        await browser.pause(2000);
        await browser.back()

    });


    it('Reversing', async () => {
        await browser.pause(5000);
        const app = await $('//*[@content-desc="Animation"]');
        await app.click()
        const appis = await $('//android.widget.TextView[@content-desc="Reversing"]');
        await appis.click()
        const play = await $('//android.widget.Button[@content-desc="Play"]');
        await play.click()
        await browser.pause(2000);
        const pause = await $('//android.widget.Button[@content-desc="Reverse"]');
        await pause.click()
        await browser.pause(2000);
        await browser.back()

    });

    it('Seeking', async () => {
        await browser.pause(5000);
        const appis = await $('//*[@content-desc="Animation"]');
        await appis.click()
        const app = await $('//android.widget.TextView[@content-desc="Seeking"]');
        await app.click()
      
        const run  = await $('//android.widget.Button[@content-desc="Run"]');
        await run.click()
        await browser.pause(2000);
        seeking_bar = await $('//android.widget.SeekBar[@resource-id="io.appium.android.apis:id/seekBar"]');
        
        

        const swipeArgs = {
            element: await seeking_bar, // Get the SeekBar element ID
            direction: 'right',              // Swipe direction ('left', 'right')
            percent: 1.0                     // Swipe to 50% of the SeekBar
          };
          
          await driver.execute('mobile: swipeGesture', swipeArgs);
          await browser.pause(2000);


          await browser.back()


    });

    it.only('View Flip', async () => {
        await browser.pause(5000);
        const appis = await $('//*[@content-desc="Animation"]');
        await appis.click()

        const flip = await $('//android.widget.TextView[@content-desc="View Flip"]');
        await flip.click()
        
        await browser.pause(2000);
        await browser.back()

    });

    








    
    


})




  

   














