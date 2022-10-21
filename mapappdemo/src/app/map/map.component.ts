import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import {icon} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: Leaflet.Map;
  private centroid: Leaflet.LatLngExpression = [47.218371 , -1.553621]; // Nantes

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: this.centroid,
      zoom: 12
    });

    Leaflet.Marker.prototype.options.icon = Leaflet.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: 'http://cdn.onlinewebfonts.com/svg/img_489440.png'
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const randomPoints = Array(5).fill(this.centroid).map(
        x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10]
      ).map(
        x => Leaflet.marker(x as Leaflet.LatLngExpression)
      ).forEach(
        x => x.addTo(this.map)
      );

    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
}
