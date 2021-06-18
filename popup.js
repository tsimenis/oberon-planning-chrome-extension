// Initialize button with user's preferred color
let toggle = document.querySelector('.toggle input');

chrome.storage.sync.get('mode', ({ mode }) => {
  if (mode === 'dark') {
    toggle.checked = true
  }
});

toggle.addEventListener('change', async (e) => {
  const checked = e.target.checked
  chrome.storage.sync.set({ mode: checked ? 'dark' : 'light' })
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setMode,
  })

})

// The body of this function will be executed as a content script inside the
// current page
function setMode() {
  chrome.storage.sync.get('mode', ({ mode }) => {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  });
}