import Validator from "../helpers/validator";

export default class BaseValidator{
    static validate(customer){
        return Validator.validateObject(customer,new this(),['validate'])
    }
}