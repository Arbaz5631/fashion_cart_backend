import BLManager from "./manger";
import Utils from "../../utils"
import {apiSuccessMessage, httpConstants} from '../../common/constants'
export default class Index{
  async getProducts(request,response){
      const [error , getProductResponse]= await Utils.parseResponse(new BLManager().getProductData()) 
      if(error|| !getProductResponse) return Utils.handleError(error,httpConstants.RESPONSE_CODES.BAD_REQUEST, response)
      return Utils.response(response,getProductResponse,apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }
  async saveProducts(request,response){
      const [error , ProductResponse]= await Utils.parseResponse(new BLManager().saveProductsData(request.body)) 
      if(error|| !ProductResponse) return Utils.handleError(error,httpConstants.RESPONSE_CODES.BAD_REQUEST, response)
      return Utils.response(response,ProductResponse,apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
    }

}