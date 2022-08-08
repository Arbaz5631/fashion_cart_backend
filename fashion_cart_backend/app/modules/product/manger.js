import Utils from "../../utils";
import https from '../../service/http-service';
import config, {AUTH0_DOMAIN} from '../../../config/env/local'
import ProductModel from '../../models/products';

export default class Manager{

    getProductData=async()=>{
        return ProductModel.findObj({})
    }
    saveProductsData=async(requestData)=>{
          console.log('data====',requestData)
           const productObj=new ProductModel(requestData)
           let returnObj = await productObj.saveObj()
           return returnObj;
    }
}