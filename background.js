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

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formatted = `${year}-${month}-${day}`;

  console.log(formatted);

  navigator.clipboard.writeText(formatted + " " + tab.title + " @firefox " +  tab.url);
});
