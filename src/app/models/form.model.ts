type gioForm = {
    id: string, 
    titleCreating: string, 
    titleEditing: string, 
    databaseUrlAdmin: string,
    databaseUrlUser: string,
    showAsJson: boolean,
    route: string,
    processType: "api" | "firebaseRealTime", 
    redirectRoute: string, 
    dialog: {
        title: string,
        messageSentSuccesfully: string,
        cancelText: string,
        acceptText: string
    },
    generatePdf: boolean, 
    fields: any,
    headerImage?: string
}

type gioFormElement = {
    blockType: string, 
    formularioElement: true,
    classDiv: string, 
    matLabel: string, 
    formControlName: string, 
    hiddenEditing: boolean, 
    matIcon: string, 
    matPrefix: boolean, 
    matSuffix: boolean, 
    matError: string, 
    required: boolean
}