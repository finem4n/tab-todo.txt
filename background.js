// console.log("background loaded");
//
// browser.commands.onCommand.addListener((command) => {
//   if (command === "copy-title-url") {
//     console.log(tab.title);
//   }
// });
//
browser.commands.onCommand.addListener(async () => {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });

  const tab = tabs[0];

  console.log(tab.title);
  console.log(tab.url);
  navigator.clipboard.writeText(tab.title + " - url: " + tab.url);
});
