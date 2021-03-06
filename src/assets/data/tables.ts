import { gioTableInterface } from "./../../app/interfaces/interfaces";

export const tables = {
    celula_de_busqueda:<gioTableInterface>{
        id: 'celula_de_busqueda',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'borrar'],
        path: 'forms/celula_de_busqueda',
        processType: 'firebaseRealTime',
        rows:[
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    servicio_de_grua_gratuito:<gioTableInterface> {
        id: 'servicio_de_grua_gratuito', 
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'borrar'],
        path: 'forms/servicio_de_grua_gratuito',
        processType: 'firebaseRealTime',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    denuncia_ambiental:<gioTableInterface> {
        id: 'denuncia_ambiental', 
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'borrar'],
        path: 'forms/denuncia_ambiental',
        processType: 'firebaseRealTime',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    denuncia_anonima:<gioTableInterface> {
        id: 'denuncia_anonima',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'mensaje', 'view', 'borrar'],
        path: 'forms/denuncia_anonima',
        processType: 'firebaseRealTime',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'mensaje',
                _name: 'Mensaje',
                _element: 'mensaje',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver detalle',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    tramites: {
        id: 'tramites',
        displayedColumns: ['id', 'nombre', 'edit', 'borrar'],
        path: 'forms/data/tramites',
        method: 'realTimeDatabase',
        pathDelete: 'data/tramites',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'id',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    users: {
        id: 'users',
        displayedColumns: ['id', 'email', 'nombre', 'tipo', 'edit', 'borrar'],
        path: 'forms/users',
        method: 'realTimeDatabase',
        pathDelete: 'users',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'id',
                _type: 'field'
            },
            {
                _matColumnDef: 'email',
                _name: 'e-mail',
                _element: 'email',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'Nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'tipo',
                _name: 'Tipo',
                _element: 'tipo',
                _type: 'field'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    usuarios: {
        id: 'usuarios',
        displayedColumns: ['id', 'email', 'nombre', 'tipo', 'edit', 'borrar'],
        path: 'forms/usuarios',
        pathDelete: 'usuarios',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'id',
                _type: 'field'
            },
            {
                _matColumnDef: 'email',
                _name: 'e-mail',
                _element: 'email',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'Nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'tipo',
                _name: 'Tipo',
                _element: 'tipo',
                _type: 'field'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    cippe: {
        id: 'cippe',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Coordinaci??n de Informaci??n y Planeaci??n, Programaci??n y Evaluaci??n',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Coordinaci??n de Informaci??n y Planeaci??n, Programaci??n y Evaluaci??n',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    secmun: {
        id: 'secmun',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Secretaria Municipal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Secretaria Municipal',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    sectec: {
        id: 'sectec',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Secretaria T??cnica',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Secretaria T??cnica',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    patmun: {
        id: 'patmun',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Patrimonio Municipal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Patrimonio Municipal',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    tesmun: {
        id: 'tesmun',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Tesorer??a Municipal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Tesorer??a Municipal',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    conint: {
        id: 'conint',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Contralor??a Interna',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Contralor??a Interna',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    comsoc: {
        id: 'comsoc',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Comunicaci??n Social',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Comunicaci??n Social',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirbien: {
        id: 'dirbien',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n Bienestar',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n Bienestar',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirsal: {
        id: 'dirsal',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Salud',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Salud',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    deseco: {
        id: 'deseco',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Desarrollo Econ??mico',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Desarrollo Econ??mico',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dduop: {
        id: 'dduop',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Desarrollo Urbano y Obras P??blicas',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Desarrollo Urbano y Obras P??blicas',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    serpub: {
        id: 'serpub',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Servicios P??blicos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Servicios P??blicos',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dmae: {
        id: 'dmae',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Medio Ambiente y Ecolog??a',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Medio Ambiente y Ecolog??a',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dmdh: {
        id: 'dmdh',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Defensor??a Municipal de Derechos Humanos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Defensor??a Municipal de Derechos Humanos',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dif: {
        id: 'dif',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/DIF Municipal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/DIF Municipal',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    educul: {
        id: 'educul',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Educaci??n y Cultura',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Educaci??n y Cultura',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirgob: {
        id: 'dirgob',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Gobierno',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Gobierno',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    regcon: {
        id: 'regcon',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de R??gimen Condominal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de R??gimen Condominal',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    equigen: {
        id: 'equigen',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Instituto de la Mujer y Equidad de G??nero',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Instituto de la Mujer y Equidad de G??nero',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    injuve: {
        id: 'injuve',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Instituto de la Juventud',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Instituto de la Juventud',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirjur: {
        id: 'dirjur',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n Jur??dica y Consultiva',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n Jur??dica y Consultiva',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirten: {
        id: 'dirten',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Tenencia de la Tierra',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Tenencia de la Tierra',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    mertian: {
        id: 'mertian',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Coordinaci??n de Mercados, Tianguis y V??a P??blica',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Coordinaci??n de Mercados, Tianguis y V??a P??blica',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    dirinfr: {
        id: 'dirinfr',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Infraestructura',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Infraestructura',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    probom: {
        id: 'probom',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Protecci??n Civil y Bomberos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Protecci??n Civil y Bomberos',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    },
    segpub: {
        id: 'segpub',
        elementForFilter: "pushId",
        displayedColumns: ['id', 'nombre', 'view', 'edit', 'borrar'],
        path: 'forms/reporte_vecinal/Direcci??n de Seguridad P??blica y Tr??nsito',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Direcci??n de Seguridad P??blica y Tr??nsito',
        rows: [
            {
                _matColumnDef: 'id',
                _name: 'ID',
                _element: 'pushId',
                _type: 'field'
            },
            {
                _matColumnDef: 'nombre',
                _name: 'nombre',
                _element: 'nombre',
                _type: 'field'
            },
            {
                _matColumnDef: 'view',
                _name: 'Ver',
                _element: 'view',
                _type: 'view'
            },
            {
                _matColumnDef: 'edit',
                _name: 'Editar',
                _element: 'edit',
                _type: 'edit'
            },
            {
                _matColumnDef: 'borrar',
                _name: 'Borrar',
                _element: 'borrar',
                _type: 'delete'
            }
        ]
    }
}