import{test, expect } from '@playwright/test'
test('Handle IFrames in playwright and drag & drop', async({page}) =>{
    await page.goto('https://jqueryui.com/droppable/')

    //iframe
    const iframeElement = page.frameLocator('.demo-frame')

    //src and dest element
    const dragElement = iframeElement.locator("[id='draggable']")
    const dropElement = iframeElement.locator("[id='droppable']")

    //drag and drop element
    await dragElement.dragTo(dropElement)
    await page.waitForTimeout(5000)

})
