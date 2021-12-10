import { gioForm } from "./../../app/types/type-form";

export const forms = {
    menu_items:<gioForm> {
        id: "menu_items", 
        titleCreating: "Elementos del menú", 
        titleEditing: "Elementos del menú", 
        databaseUrlAdmin: "data/menu_items", 
        databaseUrlUser: "main_menu", 
        headerImage: "NULL", 
        showAsJson: false, 
        route: 'formulario-sesion', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Texto del menú", 
                formControlName: "texto", 
                matIcon: "list", 
                matSuffix: true, 
                matError: "El texto es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Icono", 
                formControlName: "icon", 
                matIcon: "insert_emoticon", 
                matSuffix: true, 
                matError: "El icono es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Enlace", 
                formControlName: "enlace", 
                matIcon: "link", 
                matSuffix: true, 
                matError: "El enlace es requerido", 
                required: true
            }
        ]
    }, 
    main_menu:<gioForm> {
        id: "main_menu", 
        titleCreating: "Menú principal", 
        titleEditing: "Menú principal", 
        databaseUrlAdmin: "data/main_menu", 
        databaseUrlUser: "main_menu", 
        headerImage: "NULL", 
        showAsJson: false, 
        route: 'formulario-sesion', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Texto del menú", 
                formControlName: "texto", 
                matIcon: "list", 
                matSuffix: true, 
                matError: "El texto es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Icono", 
                formControlName: "icon", 
                matIcon: "insert_emoticon", 
                matSuffix: true, 
                matError: "El icono es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Enlace", 
                formControlName: "enlace", 
                matIcon: "link", 
                matSuffix: true, 
                matError: "El enlace es requerido", 
                required: true
            }
        ]
    }, 
    sitios:<gioForm> {
        id: "sitios", 
        titleCreating: "Sitios de interés", 
        titleEditing: "Sitios de interés", 
        databaseUrlAdmin: "data/sitios", 
        databaseUrlUser: "sitios", 
        headerImage: "NULL", 
        showAsJson: false, 
        route: 'sitios', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Título", 
                formControlName: "titulo", 
                matIcon: "list", 
                matSuffix: true, 
                matError: "El título es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Imagen", 
                formControlName: "foto", 
                matIcon: "list", 
                matSuffix: true, 
                matError: "La imagen es un campo requerido", 
                required: false
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Texto", 
                formControlName: "texto", 
                matIcon: "list", 
                matSuffix: true, 
                matError: "El texto es requerido", 
                required: true
            }
        ]
    }, 
    recipients:<gioForm> {
        id: "recipients", 
        titleCreating: "Agregar receptor de trámites.", 
        titleEditing: "Editar receptor", 
        databaseUrlAdmin: "data/recipients", 
        databaseUrlUser: "recipients", 
        headerImage: null, 
        showAsJson: false, 
        route: 'form/recipients', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "ID", 
                formControlName: "id", 
                matIcon: "fingerprint", 
                matSuffix: true, 
                matError: "El id es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Nombre", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Color Hexadecimal", 
                formControlName: "color", 
                matIcon: "color_lens", 
                matSuffix: true, 
                matError: "El color es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Color RGBA", 
                formControlName: "colorRgba", 
                matIcon: "color_lens", 
                matSuffix: true, 
                matError: "El color rgba es requerido", 
                required: true
            }, 
            {
                blockType: "checkbox", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Chat", 
                formControlName: "chat"
            }, 
            {
                blockType: "checkbox", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Trámites", 
                formControlName: "tramites"
            }, 
            {
                blockType: "fileSingle", 
                formularioElement: true, 
                formControlName: "iconoGrande", 
                classDiv: "col-12 col-md-6"
            }
        ]
    },  
    celula_de_busqueda:<gioForm> {
        id: "celula_de_busqueda", 
        titleCreating: "Celula de búsqueda", 
        titleEditing: "Celula de búsqueda", 
        databaseUrlAdmin: "forms/celula_de_busqueda", 
        databaseUrlUser: "celula_de_busqueda", 
        headerImage: "https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Flogos%2Flogos_celula-09.png?alt=media&token=eae6f6f6-b7d2-43fe-894c-eca64704d64b", 
        showAsJson: false, 
        route: 'form/celula_de_busqueda', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Ingrese datos de la persona extraviada.</b>"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Nombre completo", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Sexo", 
                formControlName: "sexo", 
                options: [
                    { value: 'Hombre', text: 'Hombre' }, 
                    { value: 'Mujer', text: 'Mujer' }, 
                    { value: 'Otro', text: 'Otro' }
                ], 
                matIcon: "work", 
                matError: "El sexo es requerido"
            }, 
            {
                blockType: "date", 
                formularioElement: true,
                classDiv: "col-6", 
                matLabel: "Fecha de nacimiento", 
                formControlName: "fecha_nacimiento", 
                matIcon: "account_circle", 
                matError: "Esta fecha es requerida"
            }, 
            {
                blockType: "date", 
                formularioElement: true,
                classDiv: "col-6", 
                matLabel: "Fecha de extravío", 
                formControlName: "fecha_extravio", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "Esta fecha es requerida"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Lugar donde se le vió por última vez", 
                formControlName: "direccion_ultima_vez", 
                matIcon: "location_city", 
                matSuffix: true, 
                matError: "Este campo es requerido"
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Especifique el lugar de extravío en el mapa y adjunte fotografías.</b>"
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "selectUbicacion", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Ingrese señas particulares y cualquier información que considere importante.</b>"
            }, 
            {
                blockType: "textarea", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Señas particulares", 
                formControlName: "descripcion", 
                matError: "La descripción es un campo requerido"
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Datos de quién reporta.</b>"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-6", 
                matLabel: "Nombre de quién reporta", 
                formControlName: "nombre_reporta", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Correo electrónico", 
                formControlName: "email", 
                matIcon: "email", 
                matSuffix: true, 
                matError: "El correo es un campo requerido"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Teléfono", 
                formControlName: "telefono_local", 
                matIcon: "local_phone", 
                matSuffix: true, 
                matError: "El teléfono es un campo requerido"
            }, 
        ]
    },  
    servicio_de_grua_gratuito:<gioForm> {
        id: "servicio_de_grua_gratuito", 
        titleCreating: "Servicio de grua gratuito", 
        titleEditing: "Servicio de grua gratuito", 
        databaseUrlAdmin: "forms/servicio_de_grua_gratuito", 
        databaseUrlUser: "servicio_de_grua_gratuito", 
        headerImage: "", 
        showAsJson: false, 
        route: 'form/servicio_de_grua_gratuito', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style:
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Nombre completo*", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Correo electrónico*", 
                formControlName: "email", 
                matIcon: "email", 
                matSuffix: true, 
                matError: "El e-mail es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Teléfonos", 
                formControlName: "telefonos", 
                matIcon: "local_phone", 
                matSuffix: true, 
                matError: "Los teléfonos es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Dirección", 
                formControlName: "direccion", 
                matIcon: "location_city", 
                matSuffix: true, 
                matError: "Debe especificar este campo", 
                required: true
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Mande ubicación y fotografía del vehículo averiado.</b>"
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "selectUbicacion", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "textarea", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Datos adicionales*", 
                formControlName: "descripcion", 
                matError: "Los datos adicionales es un campo requerido"
            }
        ]
    }, 
    denuncia_ambiental:<gioForm> {
        id: "denuncia_ambiental", 
        titleCreating: "Denuncia ambiental", 
        titleEditing: "Denuncia ambiental", 
        databaseUrlAdmin: "forms/denuncia_ambiental", 
        databaseUrlUser: "denuncia_ambiental", 
        headerImage: "", 
        showAsJson: false, 
        route: 'denuncia_ambiental', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Nombre completo*", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Correo electrónico*", 
                formControlName: "email", 
                matIcon: "email", 
                matSuffix: true, 
                matError: "El e-mail es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Teléfonos", 
                formControlName: "telefonos", 
                matIcon: "local_phone", 
                matSuffix: true, 
                matError: "Los teléfonos es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Dirección", 
                formControlName: "direccion", 
                matIcon: "location_city", 
                matSuffix: true, 
                matError: "Debe especificar este campo", 
                required: true
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Mande ubicación y fotografía del problema.</b>"
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "selectUbicacion", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "textarea", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Datos adicionales*", 
                formControlName: "descripcion", 
                matError: "Los datos adicionales es un campo requerido"
            }
        ]
    }, 
    reporte_vecinal:<gioForm> {
        id: "reporte_vecinal", 
        titleCreating: "Reporte vecinal", 
        titleEditing: "Reporte vecinal", 
        databaseUrlAdmin: "forms/reporte_vecinal", 
        databaseUrlUser: "reporte_vecinal", 
        headerImage: "", 
        showAsJson: false, 
        route: 'reporte_vecinal', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<div class='alert alert-warning'>Llene el siguiente formulario, asegurese de colocar todos sus datos correctamente para que nos contactemos con usted a la brevedad.</div>"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Nombre completo*", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Correo electrónico*", 
                formControlName: "email", 
                matIcon: "email", 
                matSuffix: true, 
                matError: "El e-mail es requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Teléfonos", 
                formControlName: "telefonoLocal", 
                matIcon: "local_phone", 
                matSuffix: true, 
                matError: "Los teléfonos es un campo requerido", 
                required: true
            }, 
            {
                formularioElement: true,
                blockType: "dynamicSelect", 
                loadAditionaldata: true, 
                loadAditionaldataPath: 'destinatario', 
                matLabel: "Dirección", 
                formControlName: "destinatario", 
                routeData: 'data/direcciones', 
                dataVariable: 'descripcion', 
                itemValue: 'descripcion', 
                itemText: 'descripcion', 
                matIcon: "location_city", 
                matSuffix: true, 
                classDiv: "col-12 col-md-12", 
                matError: "Debe especificar este campo", 
                required: true
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Mande ubicación y fotografía del problema.</b>"
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12"
            }, 
            {
                blockType: "selectUbicacion", 
                formularioElement: false,
                classDiv: "col-12"
            }, 
            {
                blockType: "textarea", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Datos adicionales*", 
                formControlName: "mensaje", 
                matError: "Los datos adicionales es un campo requerido"
            }
        ]
    }, 
    denuncia_anonima:<gioForm> {
        id: "denuncia_anonima", 
        titleCreating: "Denuncia anónima", 
        titleEditing: "Denuncia anónima", 
        databaseUrlAdmin: "forms/denuncia_anonima", 
        databaseUrlUser: "denuncia_anonima", 
        headerImage: "", 
        showAsJson: false, 
        route: 'denuncia_anonima', 
        processType: 'firebaseRealTime', 
        redirectRoute: '/', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/ecatepecapp.appspot.com/o/webapp%2Ffondos%2Ffondo_generico.png?alt=media&token=5db26fee-d218-4eba-8174-ffb83d40ab71)'
        }, 
        fields : [
            {
                blockType: "alert", 
                formularioElement: false,
                classDiv: "col-12 p-2", 
                alertClass: "alert alert-warning text-center", 
                matLabel: "Nombre completo*", 
                formControlName: "nombre", 
                matIcon: "account_circle", 
                matSuffix: true, 
                matError: "El nombre es requerido", 
                required: true
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Mande ubicación y fotografía del problema.</b>"
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "selectUbicacion", 
                formularioElement: false,
                classDiv: "col-12 col-md-6"
            }, 
            {
                blockType: "textarea", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Datos adicionales*", 
                formControlName: "mensaje", 
                matError: "Los datos adicionales es un campo requerido"
            }
        ]
    }, 
    departamentos:<gioForm> {
        id: 'departamentos', 
        processType: 'api', 
        titleCreating: "Ingresar nuevo departamento", 
        titleEditing: "Modificando departamento", 
        databaseUrlAdmin: "departamentos", 
        databaseUrlUser: "celula_de_busqueda", 
        encabezadoImagen: false, 
        showAsJson: false, 
        route: 'departamentos', 
        redirectRoute: '/table/departamentos', 
        generatePdf: false, 
        dialog: {
            title: 'Envío exitoso', 
            messageSentSuccesfully: 'Formulario envíado de forma correcta', 
            cancelText: 'Cancelar', 
            acceptText: 'Aceptar'
        }, 
        style: 
        {
            backgroundColor: '#DEDEDE', 
            backgroundImage: 'url(assets/img/background_pattern.jpg)'
        }, 
        fields : [
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Datos de la empresa</b>"
            }, 
            {
                formularioElement: true,
                blockType: "dynamicSelect", 
                loadAditionaldata: true, 
                loadAditionaldataPath: 'empresapornombre', 
                matLabel: "Nombre de la empresa", 
                formControlName: "empresa", 
                routeData: 'empresas', 
                dataVariable: 'empresas', 
                itemValue: 'empresa', 
                itemText: 'empresa', 
                matIcon: "work", 
                matSuffix: true, 
                classDiv: "col-12 col-md-6", 
                matError: "La empresa es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Nombre del contacto", 
                formControlName: "contacto_nombre", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El nombre del contacto es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Teléfono de contacto", 
                formControlName: "contacto_telefono", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El teléfono de contacto es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Correo electrónico de contacto", 
                formControlName: "contacto_correo", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El correo de contato es un campo requerido", 
                required: false
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "facebook de contacto", 
                formControlName: "contacto_facebook", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El facebook de contacto es un campo requerido", 
                required: false
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Whatsapp de contacto", 
                formControlName: "contacto_whatsapp", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El whatsapp del contacto es un campo requerido", 
                required: true
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Datos del desarrollo</b>"
            }, 
            {
                loadAditionaldata: true, 
                loadAditionaldataPath: 'desarrollonombre', 
                formularioElement: true,
                blockType: "dynamicSelect", 
                matLabel: "Nombre de los desarrollos", 
                formControlName: "desarrollo", 
                routeData: 'desarrollos', 
                dataVariable: 'desarrollos', 
                itemValue: 'desarrollo', 
                itemText: 'desarrollo', 
                matIcon: "location_city", 
                matSuffix: true, 
                classDiv: "col-12 col-md-6", 
                matError: "El desarrollo es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Delegación", 
                formControlName: "delegacion", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "La delegación es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Dirección", 
                formControlName: "direccion", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "La dirección es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Latitud", 
                formControlName: "latitud", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "La latitud es un campo requerido", 
                required: false
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Longitud", 
                formControlName: "longitud", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "La longitud es un campo requerido", 
                required: false
            }, 
            {
                blockType: "texto", 
                formularioElement: false, 
                classDiv: "col-12 p-2", 
                texto: "<b>Datos del departamento</b>"
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Departamento", 
                formControlName: "departamento", 
                matIcon: "all_inbox", 
                matSuffix: true, 
                matError: "El departamento es un campo requerido", 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Recamaras", 
                formControlName: "recamaras", 
                options: [{value:'1', text: '1'}, {value:'2', text: '2'}, {value:'3', text: '3'}, {value:'4', text: '4'}, {value:'5', text: '5'}], 
                matError: "La recamara es un campo requerido", 
                matIcon: "hotel", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12", 
                matLabel: "Descripción", 
                formControlName: "descripcion", 
                matIcon: "description", 
                matSuffix: true, 
                matError: "La descripcion es un campo requerido", 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Baños", 
                formControlName: "banos", 
                options: [{value:'1', text:'Uno'}, {value:'1.5', text:'1 ½ baños'}, {value:'2', text:'Dos'}, {value:'2.5', text:'2 ½ baños'}, ], 
                matError: "El tipo de usuario es requerido", 
                matIcon: "bathtub", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Roof garden privado", 
                formControlName: "roof_garden_privado", 
                options: [{value:'0', text: 'No'}, {value:'1', text: 'Si'}], 
                matError: "Roof garden privado es un campo requerido", 
                matIcon: "layers_clear", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Roof garden público", 
                formControlName: "roof_garden_publico", 
                options: [{value:'0', text: 'No'}, {value:'1', text: 'Si'}], 
                matError: "Roof garden público es un campo requerido", 
                matIcon: "layers", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Terraza", 
                formControlName: "terraza", 
                options: [{value:'0', text: 'No'}, {value:'1', text: 'Si'}], 
                matError: "Terraza es un campo requerido", 
                matIcon: "dashboard", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Tipo de venta", 
                formControlName: "tipo_venta", 
                options: [{value:'1', text: 'Preventa'}, {value:'2', text: 'Inmediata'}], 
                matError: "Tipo de venta es un campo requerido", 
                matIcon: "local_offer", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Patio de servicio", 
                formControlName: "patio_de_servicio", 
                options: [{value:'0', text: 'No'}, {value:'1', text: 'Si'}], 
                matError: "Patio de servicio es un campo requerido", 
                matIcon: "terrain", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Elevador", 
                formControlName: "elevador", 
                options: [{value:'0', text: 'No'}, {value:'1', text: 'Si'}], 
                matError: "Elevador es un campo requerido", 
                matIcon: "filter_list", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "select", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Estacionamiento", 
                formControlName: "estacionamiento", 
                options: [{value:'0', text: '0'}, {value:'1', text: '1'}, {value:'2', text: '2'}, {value:'3', text: '3'}, {value:'4', text: '4'}, {value:'5', text: '5'}], 
                matError: "Estacionamiento es un campo requerido", 
                matIcon: "time_to_leave", 
                matSuffix: true, 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-6", 
                matLabel: "Metros cuadrados", 
                formControlName: "metros_cuadrados", 
                matIcon: "flip_to_front", 
                matSuffix: true, 
                matError: "Metros cuadrados es un campo requerido", 
                required: true
            }, 
            {
                blockType: "input", 
                formularioElement: true,
                classDiv: "col-12 col-md-6", 
                matLabel: "Precio final", 
                formControlName: "precio_final", 
                matIcon: "monetization_on", 
                matPrefix: true, 
                matError: "Precio final es un campo requerido", 
                required: true
            }, 
            {
                blockType: "fileMultiple", 
                formularioElement: false,
                classDiv: "col-12"
            }, 
        ]
    }
}