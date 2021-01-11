const reservations = document.querySelectorAll('.reservation');

reservations.forEach(reservation => {
	const rgb = reservation.style.backgroundColor;
	const rgba = rgb.replace(')', ', .65');
	reservation.style.backgroundColor = rgba;
})

const search = window.location.search
const isDay = search.includes('day');

document.body.classList.add('loaded');
if (isDay) document.body.classList.add('day');