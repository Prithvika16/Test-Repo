const{test,expect} = require('@playwright/test')
const testParameters = ['data driven testing in playwright',
                        'playwright data driven testing javascript ',
                        'playwright test data management',
                        'playwright performance github',
                        'playwright best practices'
]

for (const searchKeyword of testParameters){
    test(`Parameterize tests in playwright ${searchKeyword}`,async({page}) =>{
        await page.goto('https://www.youtube.com/')
        await page.getByPlaceholder('Search').click();
        await page.getByPlaceholder('Search').fill(searchKeyword)
        await page.getByPlaceholder('Search').press('Enter');

        await page.waitForTimeout(5000);
    })
}