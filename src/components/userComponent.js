import BaseLogger from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userServices.js";

console.log('User component yüklendi')

let baseLogger=new BaseLogger();
let userService= new UserService(baseLogger);
let user=new User(1,'yusuf','çırak')
let user2=new User(2,'aaa','asdadsasd')

userService.add(user);
userService.add(user2);
userService.getById(1)
userService.list()

let customer={id:1,firstName:'adem'}
userService.getById(1);

//prototyping
customer.lastName='Bise'