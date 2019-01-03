import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//para poder usar los metodos de la api
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  origen: any;
  destino: any;

  constructor(public navCtrl: NavController) {

  }


  calculateAndDisplayRoute() {


    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);


    directionsService.route({
      origin: this.origen,
      destination:this.destino,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

 

}
