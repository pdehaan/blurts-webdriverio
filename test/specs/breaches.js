const assert = require("assert");

const breaches = require("../../breaches.json");

describe("Firefox Monitor", () => {
  it("should have the right title", () => {
    browser.url("/");
    assert.equal(browser.getTitle(), "Firefox Monitor");
  });

  // Take screenshots of each of the details page for each breach...
  it("should show breach details", () => {
    browser.setViewportSize({ width: 1024, height: 900 });

    breaches.forEach(breach => {
      const [slug] = breach.LogoFilename.split(".");
      const breachUri = `/?breach=${slug}`;

      // console.log(`Scraping ${breachUri}...`);
      browser.url(breachUri);
      // Take a full page screenshot...
      // browser.saveScreenshot(`./test/shots/${slug}.png`);

      // Take a screenshot of the selected element...
      browser.saveElementScreenshot(`test/shots/${slug}.png`, ".account");
    });
  });
});
