const playwright = require('playwright');

export async function ScrapeMenuItems(url){
    console.log("yo");
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(url);
        await page.screenshot({path: `nodejs_${browserType}.png`, fullPage: true});
        await page.waitForTimeout(5000);
        const items = await page.$$eval(itemSelector, (elements) => {
        return elements.map(el => {
            const titleEl = el.querySelector('[data-testid="rich-text"]').innerText();
            const descriptionEl = el.querySelector('.we').innerText;

            return {
            title: titleEl ? titleEl.textContent.trim() : null,
            description: descriptionEl ? descriptionEl.textContent.trim() : null,
            // You can add more fields as needed
            };
        });
        });
        await browser.close();
      };
    console.log(items)
      return items;
}