import GoogleMapsApiLoader from 'google-maps-api-loader';
import { GMapsAPIKey } from './Config';
import GMapsTheme from './GMapsTheme';

class GMap {
	constructor(selector) {
		this.selector = selector;
		this.infoWindow = '';
		this.marker = {
			"name": "The Graphic Design House",
			"map": {
				"Latitude": 50.8368329,
				"Longitude": -1.0459649,
				"Zoom": 13
			}
		};
		this.bounds = 0;
		this.google = '';
		this.initMap(selector);
	}
	initMap() {
		GoogleMapsApiLoader({
			libraries: ['places'],
			apiKey: GMapsAPIKey // optional
		})
		.then((google) => {
			this.google = google;
			this.map = new google.maps.Map(this.selector, {
				center: {
					lat: 50.8368329,
					lng: -1.0459649
				},
				scrollwheel: false,
				zoom: 14,
				mapTypeId: 'roadmap',
				styles: GMapsTheme
			});
			this.infoWindow = new google.maps.InfoWindow();

			this.bindEvents();
			this.displayMarkers();
		}, (err) => {
			console.error(err);
		});
	}
	bindEvents() {
		this.google.maps.event.addListener(this.map, 'click', () => {
			this.infoWindow.close();
		});
	}
	createMarker(markerData, latlng) {
		const html = `<b>${markerData.name}</b> <br/> ${markerData.address}`;
		const marker = new this.google.maps.Marker({
			map: this.map,
			position: latlng,
			title: markerData.name,
			address: markerData.address,
			icon: {
				path: 'M16 32l9-12.9c3.4-4.5 2.9-11.9-1-15.8C21.8 1.2 19 0 16 0s-5.8 1.2-7.9 3.3C4.2 7.2 3.7 14.6 7 19l9 13zm.1-25c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1S13.8 7 16.1 7z',
				fillColor: '#000',
				fillOpacity: 1,
				strokeWeight: 0,
				scale: 1,
				anchor: new google.maps.Point(22, 32),
			}
		});
/*
		this.google.maps.event.addListener(marker, 'click', () => {
			this.infoWindow.setContent(html);
			this.infoWindow.open(this.map, marker);
		});

		this.markers.push(marker);
*/
	}
	displayMarkers() {
		const bounds = new this.google.maps.LatLngBounds();
		const latlng = new this.google.maps.LatLng(this.marker.map.Latitude, this.marker.map.Longitude);
		this.createMarker(this.marker, latlng);
	}
}
export default GMap;
