const {test,expect} = require('@playwright/test')

test.only(`validate e2e automation`, async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').type('anshika@gmail.com')
    await page.locator('#userPassword').type('Iamking@000')
    await page.locator('#login').click()
    await page.locator('#products b').first().waitFor()
    const list1 = await page.locator('#products b').allTextContents()

    for(let i=0; i<list1.length;i++){
        if(list1[i]==="qwerty"){
            await page.locator('#products  .w-10').nth(i).click()

        }

    }
    await page.waitForLoadState('networkidle') 
    await page.locator('[routerlink*="cart"]').click()
    // await expect(page.locator('.cartSection h3')).toContainText('qwerty')
    let orderNum = await page.locator('.itemNumber').textContent()
    console.log(orderNum)
    await page.locator('.btn-primary').last().click()
    await page.locator('.field  [type="text"]').nth(1).fill('236')
    await page.locator('.field  [type="text"]').nth(2).fill('Hemanth Reddy Maram')
    await page.locator('[placeholder="Select Country"]').pressSequentially('IND')
    let counter = await page.locator('.ta-results')
    counter.waitFor()
   let dropdowncount = await page.locator('button').count()
   console.log(dropdowncount)

   

    for(let k=0;k<dropdowncount;k++){
        let text = await counter.locator('button').nth(k).textContent()
        if(text === ' India'){
            await counter.locator('button').nth(k).click()
            break;
        }


    }
   
  
    await page.locator('.action__submit').click()



   await expect(page.locator('h1')).toContainText('Thankyou for the order.')

})