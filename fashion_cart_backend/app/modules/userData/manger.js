import Utils from "../../utils";
import https from '../../service/http-service';
import config, {AUTH0_DOMAIN} from '../../../config/env/local'
import UserSchema from '../../models/user';

export default class Manager{

    signUpUser=async(requestData)=>{
        const findUserbyEmail=await UserSchema.findObj({email:requestData.email})
        console.log("data==>",findUserbyEmail)
        if(findUserbyEmail.length) {
            throw "User already exist with this email id "}
        const userData=new UserSchema(requestData)
        let returnObj = await userData.saveObj()
        console.log("data",returnObj)
        return returnObj;
    }
    loginUser=async(requestData)=>{
        const findUserByEmail=await UserSchema.findObj({email:requestData.email})
        if(!findUserByEmail.length){
             return "User does not exist with this email id "
        }
        if(findUserByEmail[0].password===requestData.password){
            return {
                validateUser:true,
                message:"Email id and password are correct"
            }
        }
        else{
            return{
                validateUser:false,
                message:"Incorrect email id and password"
            }
        }
    }
}