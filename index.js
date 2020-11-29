mapboxgl.accessToken = 'pk.eyJ1IjoicmFjbGFyaXUiLCJhIjoiY2tpMmF0b2w2MDNrYzJzbnExcmZhbXJwZCJ9.shxr4F2Jxrq9s4lLA1eT-g';

const successLocation = (position) => {
	setupMap([ position.coords.longitude, position.coords.latitude ]);
};

const errorLocation = () => {
	setupMap([ 26.102, 44.426 ]);
};

function setupMap(center) {
	const map = new mapboxgl.Map({
		container : 'map',
		style     : 'mapbox://styles/mapbox/streets-v11',
		center    : center,
		zoom      : 14
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	const directions = new MapboxDirections({
		accessToken : mapboxgl.accessToken
	});
	map.addControl(directions, 'top-left');

	document.querySelector('#map > div.mapboxgl-control-container > div.mapboxgl-ctrl-bottom-right > div').remove();
	document.querySelector('#map > div.mapboxgl-control-container > div.mapboxgl-ctrl-bottom-left > div > a').remove();
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });
