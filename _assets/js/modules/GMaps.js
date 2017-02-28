import GoogleMapsApiLoader from 'google-maps-api-loader';
import { GMapsAPIKey } from './Config';

class GMap {
	constructor(selector) {
		this.selector = selector;
		this.infoWindow = '';
		this.markers = [];
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
//			const autocomplete = new google.maps.places.AutocompleteService();
			this.map = new google.maps.Map(this.selector, {
				center: {
					lat: 50.836441,
					lng: -1.0464095
				},
				scrollWheel: false,
				zoom: 14,
				mapTypeId: 'roadmap'
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
			address: markerData.address
		});

		this.google.maps.event.addListener(marker, 'click', () => {
			this.infoWindow.setContent(html);
			this.infoWindow.open(this.map, marker);
		});

		this.markers.push(marker);
	}
	displayMarkers() {
		const bounds = new this.google.maps.LatLngBounds();
		for (let i = 0; i < this.markerData.length; i += 1) {
			const $this = this.markerData[i];
			const latlng = new this.google.maps.LatLng($this.map.Latitude, $this.map.Longitude);
			this.createMarker($this, latlng);

			// marker position is added to bounds variable
			bounds.extend(latlng);
		}
	}
}
export default GMap;
