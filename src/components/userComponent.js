import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js';
import { SortDirections } from '../core/helpers/sort.js';
import User from '../models/user.js';
import UserRepository from '../repositories/userRepository.js';
import UserService from '../services/userService.js';

const userService = new UserService(new UserRepository(), new MongoLogger());

console.log(
  " ● file: userComponent.js ● userService.add(new User(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21))",
  userService.add(new User(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21))
);
console.log(
  " ● file: userComponent.js ● userService.add(new User(9, 'Efe', 'Tabur', 'Trabzon', 21))",
  userService.add(new User(9, 'Efe', 'Tabur', 'Trabzon', 21))
);

console.log(' ● file: userComponent.js ● userService.getAll()', userService.getAll());

console.log(' ● file: userComponent.js ● userService.getByID(8);', userService.getByID(8));

console.log(
  " ● file: userComponent.js ● userService.getAllSorted('creditCardNumber', SortDirections.asc)",
  userService.getAllSorted('creditCardNumber', SortDirections.asc)
);
console.log(
  " ● file: userComponent.js ● userService.getAllSorted('creditCardNumber', SortDirections.desc)",
  userService.getAllSorted('creditCardNumber', SortDirections.desc)
);