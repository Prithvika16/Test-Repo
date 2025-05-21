import { test, expect } from '@playwright/test'

test('Upload Files to 3 Sites', async ({ page }) => {

  const filePath = 'C:\\Users\\prithvika.v\\Downloads\\Sample Data.csv'

  // 1. Upload to HerokuApp
  await page.goto('https://the-internet.herokuapp.com/upload')
  await page.setInputFiles('#file-upload', filePath)
  await page.click('#file-submit')
  await expect(page.locator('#uploaded-files')).toContainText('Sample Data.csv')
  console.log('Uploaded to HerokuApp')

  // 2. Upload to jQuery File Upload
  await page.goto('http://blueimp.github.io/jQuery-File-Upload/')
  await page.setInputFiles('input[type="file"]', filePath)
  await page.click('.files button.start')
  await expect(page.locator('.name')).toContainText('Sample Data.csv')
  console.log('Uploaded to jQuery File Upload')

  // 3. Upload to West Wind
  await page.goto('https://west-wind.com/wconnect/wcscripts/fileupload.wwd')
  await page.setInputFiles('input[type="file"]', filePath)
  await page.click('input[type="submit"]')
  await expect(page.locator('body')).toContainText('Upload Completed')
  console.log('Uploaded to West Wind')

  await page.waitForTimeout(5000)
  await page.close()
})
