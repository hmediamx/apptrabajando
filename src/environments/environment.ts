// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	titulo: "Ecatepec Digital",
	production: false,
	firebase: {
		apiKey: "AIzaSyBmLLnkxMIWvDSx0_0ilD94Lgypnh4iSBs",
		authDomain: "ecatepecapp.firebaseapp.com",
		databaseURL: "https://ecatepecapp.firebaseio.com",
		projectId: "ecatepecapp",
		storageBucket: "ecatepecapp.appspot.com",
		messagingSenderId: "425575053465",
		appId: "1:425575053465:web:e489918a8a58f0478a6008"
	},
	googleMaps: "AIzaSyDcS_3ttZvL25I4LoBug7T3xtkRkMK31Bo",
	configuracionAplicacion: {
		portadaPersonalizada: true,
		usoDeLibreria: false
	},
	url: "google.com.mx", 
	api: 'http://localhost:5000/ecatepecapp/us-central1/app'
};

/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.