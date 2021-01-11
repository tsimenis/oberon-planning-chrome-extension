function runContent () {
  chrome.tabs.executeScript(() => {
    chrome.tabs.executeScript({ file: "content.js" })
  })
}