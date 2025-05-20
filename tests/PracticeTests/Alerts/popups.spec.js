const{ test, expect} = require('@playwright/test')
test('Popups Demo Playwright', async({page}) => {
    page.on('dialog', async dialog =>{
        if(dialog.message().includes('clear your cart')){
            console.log('clicking "OK" to ${dialog.message()}');
            await dialog.accept(); //press "Yes"
        } else{
            await dialog.dismiss(); //press "No"
        }
    });

    //Add something to Cart
    await page.goto('https://web-scraping.dev/product/1');
    await page.click('.add-to-cart');

    //Clear out the cart to trigger the popup event
    await page.goto('https://web-scraping.dev/product/1');
    await page.waitForSelector('.cart-full .cart-item');
    await page.click("//button[contains(text(),'Clear')])[2]");

    //verify the cart is clear
    const cartItem = await page.$('.cart-item .cart-title');
    console.log('items in cart: ${cartItem}'); //should be null

});
