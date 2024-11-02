import {test,expect} from '@playwright/test'

test(`invoke browser and create context page`, async({page})=>{
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    console.log(await page.title())
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
  await  page.locator('#username').fill('rahulshettyacademy')
  await page.locator('#password').fill('learning1')
  await page.locator('#usertype').last().click();
  await page.locator('#okayBtn').click();
  await page.locator('select.form-control').selectOption('Consultant')
  await page.locator('#terms').click()
  await expect( page.locator('#terms')).toBeChecked()
  await page.locator('#signInBtn').click()

})

test(`child window handling`, async({browser})=>{
   
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

  const [newPage] =await  Promise.all([
    context.waitForEvent('page'),
    page.locator('.blinkingText').click()])

  console.log(await  newPage.locator('.red').textContent())
  

})

