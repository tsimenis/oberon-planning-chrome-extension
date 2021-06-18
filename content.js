const reservations = document.querySelectorAll('.reservation');

reservations.forEach(reservation => {
	const rgb = reservation.style.backgroundColor;
	const rgba = rgb.replace(')', ', .65');
	reservation.style.backgroundColor = rgba;
})

const search = window.location.search
const isDay = search.includes('day');

document.body.classList.add('loaded');
document.body.classList.add('oberon-extension-v2')
if (isDay) document.body.classList.add('day');

const userPrefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
chrome.storage.sync.get('mode', ({ mode }) => {
	if (!mode && userPrefersDarkMode) {
		chrome.storage.sync.set({ mode: 'dark' })
	}
})

chrome.storage.sync.get('mode', ({ mode }) => {
  if (mode === 'dark') {
		document.body.classList.add('dark-mode')
	} else {
		document.body.classList.remove('dark-mode')
	}
})