export class gioUser {
    _uid:string
    _email:string
    _emailVerified:boolean
    _displayName:string
    _isAnonymous:false
    _photoURL:string
    _phoneNumber:string
    _userType:string

    constructor(email, displayName, uid?, emailVerified?, isAnonymous?, photoURL?, phoneNumber?, userType?){
        this._uid = uid
        this._email = email
        this._emailVerified = emailVerified
        this._displayName = displayName
        this._isAnonymous = isAnonymous
        this._photoURL = photoURL
        this._phoneNumber = phoneNumber
        this._userType = userType
    }
}