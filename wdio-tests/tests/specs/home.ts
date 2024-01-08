import { browser } from "@wdio/globals";

describe("Should load the page", () => {
  it("Loag home page", async () => {
    await browser.url("./");
    await browser.pause(2000);
  });
});
