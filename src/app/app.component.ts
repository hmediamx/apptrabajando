import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSidenav } from "@angular/material/sidenav";
import { SidenavService } from "./services/comunication/sidenav.service";
import { environment } from "./../environments/environment";
// animations
import { trigger, transition, group, query, style, animate } from "@angular/animations";



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'], 
	animations: [
		trigger('routeAnimation', [
			transition('1 => 2, 2 => 3, 3 => 4', [
				style({ height: '!' }),
				query(':enter', style({ transform: 'translateX(100%)' })),
				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
				// animate the leave page away
				group([
					query(':leave', [
						animate('1.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)', opacity: 0.2 })),
					]),
					// and now reveal the enter
					query(':enter', animate('1.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
				]),
			]),
			transition('4 => 3, 3 => 2, 2 => 1', [
				style({ height: '!' }),
				query(':enter', style({ transform: 'translateX(-100%)' })),
				query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
				// animate the leave page away
				group([
					query(':leave', [
						animate('1.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)', opacity: 0.2 })),
					]),
					// and now reveal the enter
					query(':enter', animate('1.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
				]),
			]),
		])
	]
})
export class AppComponent {
	// Declaramos la bara lateral para comunicarse con otros componentes
	@ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;





eliminar = [
]





	constructor(
		private titleService: Title,
		private sidenavService: SidenavService,
	) {
		// Colocar el título a partir de la configuración en enviroment
		this.titleService.setTitle(environment.titulo)

		


		// this.eliminar.forEach(item => {
		// 	console.log("item: ", item)

		// 	this._databaseService.datos.database.ref('chats/' + item).remove(response => {
		// 		console.log("La respuesta es: ", response)
		// 	}).then(exito => {
		// 		console.log("exito", exito)
		// 	}).catch(error=>{
		// 		console.log("error:", error)
		// 	})
		// })
	}


	getDepth(outlet){
		let depth = outlet.activatedRouteData['depth']
		// console.log("depth", depth)
		return depth
	}

	ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}
}
