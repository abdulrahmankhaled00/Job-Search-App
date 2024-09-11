
import Joi from 'joi';
import userModel from './../../database/models/user.model.js';


//**we can make one chek email and phone number check first one return if have a value ,check 2nd one of first dont have value */



const checkEmailExist=async(email)=>{
    let user =await userModel.findOne({email})
    return user;
}
const checkMobileNumberExist=async(mobileNumber)=>{
    let user =await userModel.findOne({mobileNumber})
    return user;
}

export{
    checkEmailExist,
    checkMobileNumberExist
} 