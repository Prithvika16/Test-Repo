import{test,expect} from '@playwright/test'

test.describe('Javascript Alert, confirm, Prompt in Playwright',() =>{
    test.beforeEach(async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    
    })

    test('JS Alert Validate Alert Text and Click OK', async({page}) =>{
        page.on('dialog',async(dialog) => {
        })
        await page.locator('text = Click for JS Alert').click()
        await expect(page.locator('#result')).toHaveText('You successfully clicked on Alert')

    })

    test('JS confirm - Validate confirm Text and click ok', async({page}) => {
        page.on('dialog', async(dialog) => {
        })
        await page.locator('text = Click for JS confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: OK')

    })

    test('JS confirm - Validate confirm Text and click Cancel', async({page}) => {
        page.on('dialog', async(dialog) => {
        })
        await page.locator('text = Click for JS confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

    })

    test('JS Prompt - Input text in prompt, click OK and Validate Input Text', async({page}) => {
        page.on('dialog', async(dialog) => {
            expect(dialog.message()).toEqual('I am JS prompt')
            await dialog.accept('Welcome to Playwright Learning...!')
        })
        await page.locator('text = Click for JS confirm').click()
        await expect(page.locator('#result')).toHaveText('You entered: Welcome to Playwright Learning...!')
    })

})