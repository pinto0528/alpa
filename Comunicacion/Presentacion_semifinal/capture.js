const puppeteer = require('puppeteer-core');
const path = require('path');

const SLIDES = [
  'portada', 'problema', 'gap', 'solucion',
  'diferencial', 'mercado', 'equipo', 'cierre'
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const htmlPath = path.resolve(__dirname, 'slides.html');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
  await page.waitForSelector('.presenter');

  const outputDir = path.resolve(__dirname, 'assets/imagenes_slides');

  for (const [i, name] of SLIDES.entries()) {
    // Activate slide, remove transition
    await page.evaluate((idx) => {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((s) => {
        s.classList.remove('active');
        s.style.transition = 'none';
      });
      slides[idx].classList.add('active');
    }, i);

    await page.evaluate(() => document.body.style.background = '#222');

    // Wait a moment for rendering
    await new Promise(r => setTimeout(r, 300));

    const presenter = await page.$('.presenter');
    await presenter.screenshot({
      path: path.join(outputDir, `slide-${i + 1}-${name}.png`),
      type: 'png'
    });

    console.log(`✓ slide-${i + 1}-${name}.png`);
  }

  await browser.close();
  console.log('Done!');
})().catch(err => { console.error(err); process.exit(1); });
