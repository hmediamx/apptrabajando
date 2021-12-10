export interface gioTableInterface {
    id: string;  // Id from table, is not the same from row neither pushId
    elementForFilter: string; // element in row for reference to find in delete instruction
    displayedColumns: any; // name of the fields, necesaries for material tables
    path: string; // path to find in realTime database or api
    processType: "api" | "firebaseRealTime";  // refer to the method for obtain the data, api or firebaseRealTime
    rows:any
}

export interface recipient {
    id:string;
    pushId:string;
    displayName:string;
}