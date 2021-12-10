const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors({ origin:"*", methods: 'GET,POST,OPTIONS,DELETE,PUT' }));

// ========================================================================
//  firebase configuration
// ========================================================================
firebase.initializeApp({
    credential: firebase.credential.cert({
        "type": "service_account",
        "project_id": "ecatepecapp",
        "private_key_id": "8d0bb2c521df991f40020533a41844c06f63782d",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC05B4TbdCu3DBy\n3SsDtPcq+7IpkF7yM+nU+1Dtz6SqfEdc2p5ZQDBlTbx715NmhczrKOxGGACROL8G\ngg3t9tTSBdqrYT1TylJ5poQ2viHDObv4VZhfRMDXesXwDGyL/zsmLnH+TjL5+Ogn\nyLKwZNCUZaTM28P+C56kLHDb39GCxRR7Jd+jfiF/Ww5uPZ0WK1jj1tjIKkOwCFxi\nj8xLfgLoTW+1nDKJ376jSe5y213+d0i3maTCyikOzDEE3uhvCOgqMLh3Qqz9rvrk\n6IygQ1r40bk15i6PmQ1rFpb7VxavgYem3F5GuDoqHMJahDA+9RFRqh0pWs3dZ9CN\nhOpw5FY7AgMBAAECggEATmEtuwNxUeMsxwiYM9H8604GQ8Y/rbja0CNZTMIVOp4B\nGfXMeSW8EpkdW5fsUZcWVKr1veV2kXZCJ2LBAGRckOhieLH4rc7T78w8K7A01u+0\nSAVmsZkL6hJTpBDuE7cy/PdRA30Ez5WPmnV3H8F/M13bi7yJ7xE/2yk6ebtAf+WC\nMBQJLC3ovwrqmoTShIPveJs7r3+EM2acYfHsLhN64Ll508hKqLBDueeGsnQibcup\nJ/tZcQHyxnBLPdND5NmzD4R7QBwS/26byWAFeIqrlPKOmHBnC32c4UgkrUdLehQE\nSmtj3rMTN4cq930tbj8YBb05eEmWaOJkTLLW1X+aOQKBgQD+6ENEHa2VfT6x/6ok\nKg3z4mP3Xie3hAlAQapN9/aSQM7k+Wqc/iD4SlYK94+bYhyvWTIu3hFAuKkFf7Z6\nHXDcbd2Qez+f1SLQBbpMW2ScH/pMpCaBCKIELdaAgRcqFpyoDdN+iHaQTrtCdjiC\nfdiDos5tsafSs3natktDyJcblQKBgQC1qqD3ff9z66X6kd24STWCiLaJJnn7QYIS\nwcIN4bnvBnSchPwKNaua5wlSKM9TouOVQIqyTMwhLDwgYrBaaZh6t8IiJXgaBvzz\n3wd18tBf2ZtFWE4Q5FPqKAdbRsh6KDFPAG5V66XP8vXyGzthWRv9+dDiLnp+4NQR\nRc1pY2C2jwKBgQDORdNRBpcWFiCq15Gt7B4YUgXFAfsvxPfbeIfAyjxMg4cowTBl\n1DuH0FeqTkR2X8GIn6w9QtRBRGz6Fyvpy3Mt3PXjWejVhRrDrS7hZT+YG0Rnypmh\n5wN8UD95A31kQKIKWA3iIbmX8y4TjSkTZ5TSiOd02sNMfJHJy6RCOMsWtQKBgBQK\nlON41Pu23YK9INa5zNtvtaN/ySk82tqy4XOimV6TOb4itaNytFHMdyzHL8gsSisn\nCaYN7t8iACgaexYeXCH9r78QnyVP7AwDaNFMTkyktwp5aXNXnSJR9C3Pq0I+uOHc\nTE/SRWKhjRx+gJiGuh3Ut4ScWAszRnH5X2Xm/r5lAoGAG07+A2K2hocaFnl3Bwmk\nIYIDIYUPxdSWqCGophVAwTLVEFeAHJznJX9/0gPvPVkAyVLcPUOyek7bw8ITt4Pj\nWh13vwkb4FukQshLsY9AjWwJnreIEcBuCIkQIJTdGO4vz5e7ByiOKIBhQL5ILD2B\nGEOZCH3m6yMLFtT0YtqunlY=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-ym8b8@ecatepecapp.iam.gserviceaccount.com",
        "client_id": "104209808127877174818",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ym8b8%40ecatepecapp.iam.gserviceaccount.com"
      }), 
    databaseURL: "https://ecatepecapp.firebaseio.com"
})

// ======================================================================================================
// =======      INDEX PAGE
// ======================================================================================================
app.get('/', (req, res) => {
    res.send("Servicio API para ecatepecdigital.gob.mx");
})


app.get('/data/get/:data', (req, res)=>{
    const { data } = req.params;

    var db = firebase.database();
    var ref = db.ref(`data/${data}`);
    
    ref.on('value', snapshot => {
        res.send(snapshot.val());
    })
    // firebase.database().ref('data').on('value', function(snapshot) {
    //     res.send('Si se logró la consulta');
    // })
    
})

// ======================================================================================================
// =======      USUARIOS
// ======================================================================================================
app.post('/post/usuarios', (req, res) => {
    const { tipo, nombre, email, clave } = req.body;



    firebase.auth().createUser({
        email: email,
        emailVerified: false,
        // phoneNumber: '55555555',
        password: clave,
        displayName: nombre,
        // photoURL: 'photo.png',
        disabled: false
    }).then(response=>{
        if(response.uid) {

            let query = `INSERT INTO usuarios (uid, tipo, nombre, email, clave) VALUES('${response.uid}', '${tipo}', '${nombre}', '${email}', '${clave}')`;

            // mysqlConnection.query(query, (err, rows, fields) => {
            //     if (!err) {
            //         res.json({
            //             code: 200, 
            //             status: "Se creó el usuario con el id: " + response.uid, 
            //             body: response, 
            //             data: rows
            //         })
            //     } else {
            //         res.json({
            //             code: 400, 
            //             status: 'Ocurrió un error', 
            //             data: response, 
            //             body: err
            //         });
            //     }
            // })


        } else {
            // res.json({
            //     code: 400, 
            //     status: "Ocurrió un error al crear el usuario", 
            //     body: response
            // })
        }
    }
        
    ).catch(err=>{
        res.json({
            status: "Ocurrió un error al crear el usuario en firebase", 
            body: err
        })
    })

})

app.put('/put/usuarios', (req, res) => {
    const { tipo, nombre, email, clave, uid, id } = req.body;

    firebase.auth().updateUser(uid, {
        displayName: nombre, 
        password: clave
    }).then(response=>{
            let query = 
                `UPDATE usuarios SET tipo = '${tipo}', 
                nombre = '${nombre}', 
                email = '${email}', 
                clave = '${clave}'
                WHERE id = '${id}'`;
            

            // mysqlConnection.query(query, (err, rows, fields) => {
            //     if (!err) {
            //         res.json({
            //             // fields: fields
            //             code: 200, 
            //             status: 'Se actualizó el usuario correctamente.', 
            //             body: rows
            //         });
            //     } else {
            //         res.json({
            //             code: 400, 
            //             status: 'Ocurrió un error al actualizar el usuario', 
            //             body: err
            //         });
            //     }
            // });
    }).catch(error=>{
        res.json({
            error: error
        })
    })

   
})


app.put('/update/usuarios', (req, res) => {
    const { tipo, usuario, nombre, email, clave, foto } = req.body;



    firebase.auth().createUser({
        email: email,
        emailVerified: false,
        // phoneNumber: '55555555',
        password: clave,
        displayName: nombre,
        // photoURL: 'photo.png',
        disabled: false
    }).then(response=>{
        if(response.uid) {

            let query = `INSERT INTO usuarios (uid, tipo, usuario, nombre, email, clave, foto) VALUES('${response.uid}', '${tipo}', '${usuario}', '${nombre}', '${email}', '${clave}', '${foto}')`;

            // mysqlConnection.query(query, (err, rows, fields) => {
            //     if (!err) {
            //         res.json({
            //             status: "Se creó el usuario con el id: " + response.uid, 
            //             body: response, 
            //             data: rows
            //         })
            //     } else {
            //         res.json({
            //             status: 'Ocurrió un error', 
            //             data: response, 
            //             body: err
            //         });
            //     }
            // })


        } else {
            res.json({
                status: "Ocurrió un error al crear el usuario", 
                body: response
            })
        }
    }
        
    ).catch(err=>{
        res.json({
            status: "Ocurrió un error al crear el usuario en firebase", 
            body: err
        })
    })

})

app.delete('/delete/usuarios/:id', (req, res) => {
    const { id } = req.params;

    mysqlConnection.query('SELECT uid from usuarios WHERE id = ?', [id], (err, rows, fields) => {

        if(!err) {
            // let uid = rows['uid']

            // res.json({
            //     status: "Se consultó con éxito", 
            //     data: rows[0]['uid']
            // })


            firebase.auth().deleteUser(rows[0]['uid']).then(response=>{


                    mysqlConnection.query('DELETE FROM usuarios WHERE uid = ?', [rows[0]['uid']], (err, rows, fields) => {
                        if (!err) {

                            res.json({
                                status: "Éxito al borrar el usuario en MySQL", 
                                body: response, 
                                data: rows
                            })

                        } else {
                            res.json({
                                status: "Ocurrió un error al borrar el usuario en MySQL", 
                                body: response, 
                                data: err
                            })
                        }
                    })

            }).catch(err=>{
                res.json({
                    status: "Error al borrar el usuario en firebase", 
                    body: err
                })
            })
            
        } else {
            res.json({
                status: "Ocurrió un error al consultar el usuario a borrar", 
                data: err
            })
        }

    })

})

exports.app = functions.https.onRequest(app);