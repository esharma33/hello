//console.log("Radhe Radhe!");

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
(async ()=>{
    puppeteer.use(StealthPlugin());
        // Launch the browser and open a new blank page
        const browser = await puppeteer.launch({headless: false, 
            devtools: false, 
            slowMo: 0, 
            // timeout: 30000, 
            // args: ['--enable-logging,' ,'--v=1','--start-maximized']
           });
        const page = await browser.newPage();
      
      
    
        // set viewport and user agent (just in case for nice viewing)
       // await page.setViewport({width: 1366, height: 768});
       // await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
    
        // go to Instagram web profile (this example use Cristiano Ronaldo profile)

        await page.goto('https://www.instagram.com/');
        await page.screenshot({path: 'screenshot.png'});
        console.log("screenshot success");
        console.log(`This is the login page ${JSON.stringify(page)}`);

        await page.waitForSelector('input[name="username"]');
        await page.type('input[name="username"]', '');
        await page.type('input[name="password"]', '');
        await page.click('button[type="submit"]');
        console.log(`This is the home page ${JSON.stringify(page)}`);

        
        await page.waitForNavigation();

        await page.goto('https://instagram.com/cristiano');
    
        // // check username exists or not exists
        // let isUsernameNotFound = await page.evaluate(() => {
        //     // check selector exists
        //     if(document.querySelector('main>div>div>span')) {
        //         // check selector text content
        //         if(document.querySelector('main>div>div>span').textContent == "Sorry, this page isn't available.") {
        //             return true;
        //         }
        //     }
        // });
    
        // if(isUsernameNotFound) {
        //     console.log('Account not exists!');
    
        //     // close browser
        //     await browser.close();
        //     return;
        // }
        await page.waitForSelector('h2');
        // get username
        console.log(`This is the user page ${JSON.stringify(page.content())}`);

        let username =  (async() =>{

            // const firstH2 = await page.$('h2');
            // console.log(firstH2);
            // if (firstH2) {
            //   const textContent = await page.evaluate(element => element.textContent, firstH2);
            //   console.log('Text of the first <h2> element:', textContent);
            // } else {
            //   console.log('No <h2> element found on the page.');
            // }


       // const value = await text1.getProperty('textContent');
        //return await value.jsonValue();
        });
    
        // // display the result to console
         console.log({'username': username()});
                    
        // close the browser
     //   await browser.close();
    })();