// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  titulo: "gobierno.io",
  production: false,
  firebase: {
    apiKey: "AIzaSyAYmzX24rGeTZisyvXh61WYZcftk9QurCI",
    authDomain: "gobiernoio.firebaseapp.com",
    databaseURL: "https://gobiernoio.firebaseio.com",
    projectId: "gobiernoio",
    storageBucket: "gobiernoio.appspot.com",
    messagingSenderId: "465967122089",
    appId: "1:465967122089:web:53629b6d61f97e95"
  },
  googleMaps: "AIzaSyBg1h9qOTfHoMU9xd6Wq3GUvuIdQVSX_qs",
  configuracionAplicacion: {
    portadaPersonalizada: true,
    usoDeLibreria: false
  },
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