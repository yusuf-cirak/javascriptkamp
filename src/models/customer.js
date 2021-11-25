import User from "./user.js"

export default class Customer extends User{
    constructor(id,firstName,lastName,city,age,creditCardNumber){ // yapıcı blok, user newlendiğinde çalışır.
        super(id,firstName,lastName,city,age)
        this.creditCardNumber=creditCardNumber
    }
}