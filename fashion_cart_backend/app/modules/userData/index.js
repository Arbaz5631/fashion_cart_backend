import BLManager from "./manger";
import Utils from "../../utils"
import {apiSuccessMessage, httpConstants} from '../../common/constants'
export default class Index{
  async signUp(request,response){
      const [error , signUpUserResponse]= await Utils.parseResponse(new BLManager().signUpUser(request.body)) 
      if(error|| !signUpUserResponse) return Utils.handleError(error,httpConstants.RESPONSE_CODES.BAD_REQUEST, response)
      return Utils.response(response,signUpUserResponse,apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
  async login(request,response){
      const [error, loginUserResponse]= await Utils.parseResponse(new BLManager().loginUser(request.body)) 
      if(error|| !loginUserResponse) return Utils.handleError(error,httpConstants.RESPONSE_CODES.BAD_REQUEST, response)
      return Utils.response(response,loginUserResponse,apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

}