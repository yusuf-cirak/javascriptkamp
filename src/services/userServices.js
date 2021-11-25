import Sort from "../core/helpers/sort.js";
import ErrorDataResult from "../core/results/errorDataResult.js";
import ErrorResult from "../core/results/errorResult.js";
import SuccessDataResult from "../core/results/successDataResult.js";
import SuccessResult from "../core/results/successResult.js";
import UserValidator from "../validators/userValidator.js";

export default class UserService{
    constructor(userRepository,loggerService){
        this.userRepository=userRepository;
        this.loggerService=loggerService
    }


    getAll(){
        const users=this.userRepository.getAll();
        return new SuccessDataResult(users)
    }

    add(user){
        const errors=UserValidator.validate(user);
        if(errors.length) return new ErrorResult(errors.join('|'))

        this.userRepository.add(user);

        this.loggerService.log(user)
        return new SuccessResult()
    }

    getById(id){
        const user=this.userRepository.getById(id)
        if (!user) return new ErrorDataResult();
        return new SuccessDataResult(user);
    }

    getAllSorted(key,direction=Sort.asc){
        const users=this.userRepository.getAll()
        sortedUsers=Sort.sortByKey(users,key,direction)
        return new SuccessDataResult(sortedUsers)
    }
}