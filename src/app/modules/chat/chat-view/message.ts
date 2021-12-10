export class Message {
    id 
    sender:any
    recipient:any
    senderRouteMessages:string
    routeSenderMyMessages:string
    recipientRouteMessages:string
    recipientRouteMyMessages:string
    message
    archivo:any
    date:number = new Date().getTime()

    constructor(id, sender, recipient, message, archivo?) {
        this.id = id
        this.sender = {}
        this.recipient = {}
        this.buildSender(sender)
        this.buildRecipient(recipient)
        this.message = message
        this.archivo = archivo
    }


    buildRecipient(recipient){
        this.recipient.uid = recipient.uid
        this.recipient.displayName = recipient.displayName
    }

    buildSender(sender){
        if(sender.displayName) this.sender.displayName = sender.displayName
        else this.sender.displayName = sender.uid

        this.sender.uid = sender.uid
    }
}