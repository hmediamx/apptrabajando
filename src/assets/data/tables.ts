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
        path: 'forms/reporte_vecinal/Coordinación de Información y Planeación, Programación y Evaluación',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Coordinación de Información y Planeación, Programación y Evaluación',
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
        path: 'forms/reporte_vecinal/Secretaria Técnica',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Secretaria Técnica',
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
        path: 'forms/reporte_vecinal/Tesorería Municipal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Tesorería Municipal',
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
        path: 'forms/reporte_vecinal/Contraloría Interna',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Contraloría Interna',
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
        path: 'forms/reporte_vecinal/Dirección de Comunicación Social',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Comunicación Social',
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
        path: 'forms/reporte_vecinal/Dirección Bienestar',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección Bienestar',
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
        path: 'forms/reporte_vecinal/Dirección de Salud',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Salud',
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
        path: 'forms/reporte_vecinal/Dirección de Desarrollo Económico',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Desarrollo Económico',
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
        path: 'forms/reporte_vecinal/Dirección de Desarrollo Urbano y Obras Públicas',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Desarrollo Urbano y Obras Públicas',
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
        path: 'forms/reporte_vecinal/Dirección de Servicios Públicos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Servicios Públicos',
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
        path: 'forms/reporte_vecinal/Dirección de Medio Ambiente y Ecología',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Medio Ambiente y Ecología',
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
        path: 'forms/reporte_vecinal/Defensoría Municipal de Derechos Humanos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Defensoría Municipal de Derechos Humanos',
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
        path: 'forms/reporte_vecinal/Dirección de Educación y Cultura',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Educación y Cultura',
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
        path: 'forms/reporte_vecinal/Dirección de Gobierno',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Gobierno',
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
        path: 'forms/reporte_vecinal/Dirección de Régimen Condominal',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Régimen Condominal',
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
        path: 'forms/reporte_vecinal/Instituto de la Mujer y Equidad de Género',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Instituto de la Mujer y Equidad de Género',
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
        path: 'forms/reporte_vecinal/Dirección Jurídica y Consultiva',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección Jurídica y Consultiva',
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
        path: 'forms/reporte_vecinal/Dirección de Tenencia de la Tierra',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Tenencia de la Tierra',
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
        path: 'forms/reporte_vecinal/Coordinación de Mercados, Tianguis y Vía Pública',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Coordinación de Mercados, Tianguis y Vía Pública',
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
        path: 'forms/reporte_vecinal/Dirección de Infraestructura',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Infraestructura',
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
        path: 'forms/reporte_vecinal/Dirección de Protección Civil y Bomberos',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Protección Civil y Bomberos',
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
        path: 'forms/reporte_vecinal/Dirección de Seguridad Pública y Tránsito',
        method: 'realTimeDatabase',
        pathDelete: 'forms/reporte_vecinal/Dirección de Seguridad Pública y Tránsito',
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