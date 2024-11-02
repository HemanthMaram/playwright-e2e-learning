import {test,expect} from '@playwright/test'

test(`invoke browser and create context page`, async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title())
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
})