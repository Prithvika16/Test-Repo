import{test,expect} from '@playwright/test'
const fs = require('fs')
test.describe('Demonstrate File Download in Playwright', async({page}) =>{
    test('Download a Single File and Assert', async({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/download')
        test.setTimeout(8000)

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator("a[href='download/some-file.txt']").click()

        ]);
        const suggestedFileName = download.suggestedFilename()
        const filepath = 'download/' + suggestedFileName
        await download.saveAs(filepath)
        expect(fs.existsSync(filepath)).toBeTruthy
    })
})