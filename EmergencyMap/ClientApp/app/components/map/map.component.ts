import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
    title = 'angular-gmap';
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    emap: google.maps.Map;
    lat = 40.73061;
    lng = -73.935242;

    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
        center: this.coordinates,
        zoom: 8
    };

    marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.emap,
    });

    ngAfterViewInit() {
        this.mapInitializer();
    }

    mapInitializer() {
        this.emap = new google.maps.Map(this.gmap.nativeElement,
            this.mapOptions);
        this.marker.setMap(this.emap);
    }
}
