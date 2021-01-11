const reservations = document.querySelectorAll('.reservation');

reservations.forEach(reservation => {
	const rgb = reservation.style.backgroundColor;
	const rgba = rgb.replace(')', ', .65');
	reservation.style.backgroundColor = rgba;
})

const search = window.location.search.substring(1);
const searchParams = search ? JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {};
const period = searchParams.period || '';

document.body.classList.add('loaded');
document.body.classList.add(period);