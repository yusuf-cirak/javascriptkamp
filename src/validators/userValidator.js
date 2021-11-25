import Validator from "../core/helpers/validator.js";
import BaseValidator from "../core/validations/baseValidator.js";

export default class UserValidator extends BaseValidator{
    constructor(){
        super()
        this.id=[value=>Validator.isNumber(value),'A validation error occured.']
        this.firstName=[value=>Validator.isName(value)]
        this.lastName=[value=>Validator.isName(value)]
        this.city=[value=>Validator.isName(value)]
        this.age=[value=>Validator.isNumber(value),'Your age cannot be validated.']
    }
}