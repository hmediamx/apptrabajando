import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";



@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
	urlBase: string = 'https://maps.googleapis.com/maps/api/geocode'
	tipo: string = 'json'
	mapsKey: string = environment.googleMaps

	@Input() lista: string
	@Output() coords: EventEmitter<String> = new EventEmitter()
	coordenadas: any
	direccion:any
	// Ventana que se abre
	configuracionDialogo: MatDialogConfig = {}

	constructor(
		public dialog: MatDialog, 
		private http:HttpClient
	) {
	}

	ngOnInit() {
	}


	marcarUbicacion() {
		this.configuracionDialogo.width = "100%"
		this.configuracionDialogo.minWidth = "100%"

		const dialogoMapa = this.dialog.open(MapComponent, this.configuracionDialogo)

		dialogoMapa.afterClosed().subscribe(result => {
			let latlng = JSON.parse(result)

			this.traerDireccion(latlng).subscribe(direccion=>{
				this.direccion = direccion['results'][0]['formatted_address']
			})

			
			
			this.coordenadas = latlng
			this.coords.emit(latlng)
		})
	}


	traerDireccion(latlng){
		let url = `${this.urlBase}/${this.tipo}?latlng=${latlng.lat},${latlng.lng}&key=${this.mapsKey}`
		return this.http.get(url);
	}
}



@Component({
	selector: 'map',
	templateUrl: './map.component.html', 
	styleUrls: ['./location.component.scss']
  })
  export class MapComponent {
  
	latMapa: number;
	lngMapa: number;
	lat: number;
	lng: number;
  
	coordenadas:string;
  
	constructor(
	  @Inject(MAT_DIALOG_DATA) public data
	) {
		this.latMapa = 19.5703789;
		this.lngMapa = -99.0700547;
  
		this.lat;
		this.lng;
	}
  
	elegirUbicacion(event){
	  this.lat = event.coords.lat;
	  this.lng = event.coords.lng;
	  this.coordenadas = JSON.stringify(event.coords);
	}
  
  
	encontrarMiUbicacion() {

	  navigator.geolocation.getCurrentPosition(data => {  
		this.latMapa = data.coords.latitude
		this.lngMapa = data.coords.longitude
  
		this.lat = data.coords.latitude
		this.lng = data.coords.longitude
  
		let coordenadas = {
		  "lat":data.coords.latitude, 
		  "lng":data.coords.longitude
		}
  
		this.coordenadas = JSON.stringify(coordenadas)
  
		
	  })
	}
  }
