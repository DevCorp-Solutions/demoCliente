// Local read-only menu regression checks. Playwright is a development-only dependency.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const os = require('node:os');
(async () => {
  const browser = await chromium.launch({channel:'msedge',headless:true});
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:8080/estilo3/');
    await page.locator('.dish').first().waitFor();
    await page.evaluate(()=>document.documentElement.style.scrollBehavior='auto');
    assert.equal(await page.locator('.dish').count(),22);
    assert.equal(await page.getByRole('button',{name:'Arroces y paellas',exact:true}).getAttribute('aria-pressed'),'true');
    assert.equal(await page.locator('[data-add], [data-confirm-add], #selection-button').count(),0);
    assert.equal(await page.getByRole('searchbox').count(),0);
    assert(await page.evaluate(() => document.querySelector('#arroces').compareDocumentPosition(document.querySelector('#carta')) & Node.DOCUMENT_POSITION_FOLLOWING));
    assert(await page.evaluate(()=>document.querySelector('#arroces').nextElementSibling.id==='carnes' && document.querySelector('#carnes').nextElementSibling.id==='carta'));
    assert.equal(await page.locator('#arroces').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(40, 61, 48)');
    assert.equal(await page.locator('#arroces .button').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(220, 228, 164)');
    await page.evaluate(()=>window.scrollTo(0,document.querySelector('#carta').offsetTop));
    await page.locator('.food-photo').first().evaluate(img=>img.decode());
    assert.equal(await page.locator('.photo-label').count(),22);
    await page.evaluate(async()=>{for(const src of new Set(Object.values(window.MALA_PATA_PHOTOS).map(p=>p.src))){const image=new Image();image.src=src;await image.decode();}});
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-menu-desktop.png')});
    await page.locator('[data-menu-category="Carnes"]').click();
    assert.equal(await page.locator('.dish').count(),5);
    assert.equal(await page.getByRole('button',{name:'Carnes',exact:true}).getAttribute('aria-pressed'),'true');
    await page.locator('#meat-feature-photo').evaluate(img=>img.decode());
    await page.evaluate(()=>window.scrollTo(0,document.querySelector('#carnes').offsetTop));
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-meat.png')});
    await page.getByRole('button',{name:'Toda la carta',exact:true}).click();
    assert.equal(await page.locator('.dish').count(),103);
    await page.getByRole('button',{name:'Para compartir',exact:true}).click();
    await page.locator('[data-detail="mp-23"]').click();
    assert.match(await page.locator('#dialog-content').innerText(),/Boletus/);
    assert.match(await page.locator('.dialog-price').innerText(),/9,00/);
    assert(await page.locator('#dialog-content [aria-label="Gluten"]').count()>0);
    assert(await page.locator('#dialog-content [aria-label="Leche"]').count()>0);
    assert.equal(await page.locator('#dialog-content input').count(),0);
    await page.locator('#dialog-content .food-photo').evaluate(img=>img.decode());
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-dish.png')});
    await page.keyboard.press('Escape');
    await page.locator('#allergen-info').click();
    assert.equal(await page.locator('.allergen-legend > span').count(),14);
    await page.keyboard.press('Escape');
    assert(await page.evaluate(()=>document.querySelector('#visitanos').nextElementSibling.id==='valoraciones'));
    for (const rating of [1,3,5,2]) {
      await page.locator(`.review-stars label`).nth(rating-1).click();
      assert.equal(await page.locator(`input[name="google-rating"][value="${rating}"]`).isChecked(),true);
      assert.equal(await page.locator(`.review-stars label`).nth(rating-1).locator("svg").evaluate(el=>getComputedStyle(el).fill),"rgb(40, 61, 48)");
      assert.equal(await page.locator('.review-stars .is-filled').count(),rating);
      assert.match(await page.locator('#rating-status').innerText(),new RegExp(String(rating)));
      assert.match(await page.locator('.review-invite .button').getAttribute('href'),/writereview\?placeid=ChIJO6N8JD6IQQ0R7VHisrUrmI8/);
    }
    await page.locator('#valoraciones').scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-reviews.png')});
    for(const width of [320,390,768,1440]) {
      await page.setViewportSize({width,height:844});
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
    }
    await page.setViewportSize({width:390,height:844});
    await page.evaluate(()=>window.scrollTo(0,document.querySelector('#carta').offsetTop));
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-menu-mobile.png')});
    await page.setViewportSize({width:1440,height:1000});
    await page.locator('#visitanos').scrollIntoViewIfNeeded();
    const frame = page.frameLocator('.location-map iframe');
    await frame.getByText('Datos del mapa',{exact:false}).first().waitFor({state:'attached',timeout:30000});
    console.log('Map frame:',(await frame.locator('body').innerText()).slice(0,1500));
    await page.screenshot({path:path.join(os.tmpdir(),'malapata-map.png')});
    assert.deepEqual(errors,[]);
    console.log('PASS: default rice menu; no basket or search; rice/meat/menu order; restored rice and light green meat colors; meat category link; real photos; variants; allergen icons; responsive widths; no JS errors.');
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exit(1)});
