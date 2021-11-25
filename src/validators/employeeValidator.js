import UserValidator from './userValidator.js';
import Validator from '../core/helpers/validator.js';

export default class EmployeeValidator extends UserValidator {
  constructor() {
    super();
    this.salary = [value => Validator.isNumber(value), 'salary must be a number'];
  }
}