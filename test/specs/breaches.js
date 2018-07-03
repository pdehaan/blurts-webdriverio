const assert = require("assert");

const breaches = require("blurts-addon/src/breaches.json");

describe("Firefox Monitor", () => {
  browser.setViewportSize({ width: 1024, height: 900 });

  it("should have the right title", () => {
    browser.url("/");
    assert.equal(browser.getTitle(), "Firefox Monitor");
  });

  breaches.forEach(breach => {
  // Take screenshots of each of the details page for each breach...
  it(`should show breach details for ${breach.Name}`, () => {
      const breachUri = `/?breach=${breach.Name}`;
      browser.url(breachUri);

      // Take a screenshot of the selected element...
      browser.saveElementScreenshot(`test/shots/${breach.Name}.png`, ".account");

      // Take a full page screenshot...
      // browser.saveScreenshot(`./test/shots/${breach.Name}.png`);
    });
  });
});
