export type gioForm = {
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
    fields: any,
    headerImage?: string
}