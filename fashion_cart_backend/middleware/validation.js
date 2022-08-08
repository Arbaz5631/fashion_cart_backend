import Utils from '../app/utils'
import * as yup from 'yup'

module.exports = {
  validateUserLogin: async (req, res, next) => {
    const schema = yup.object().shape({
      email: yup.string().email(),
      password: yup.string().min(8).required()
    })
    await validate(schema, req.body, res, next)
  },
  validateSaveProduct:async (req, res, next)=>{
    const schema= yup.object().shape({
      productBrand:yup.string().required(),
      productDetail:yup.string().required(),
      category:yup.string().required(),
      price:yup.number().required(),
      url:yup.string(),
    })
    await validate(schema,req.body,res,next);
  },
  validateSignUp:async(req,res,next)=>{
    const schema=yup.object().shape({
      userName:yup.string().required(),
      email:yup.string().required(),
      password:yup.string().required(),
      phoneNumber:yup.number().required()
    })
    await validate(schema,req.body,res,next)
  },
  validateLogin:async(req,res,next)=>{
    const schema=yup.object().shape({
      email:yup.string().required(),
      password:yup.string().required()
    })
    await validate(schema,req.body,res,next)
  }
}

const validate = async (schema, reqData, res, next) => {
  try {
    await schema.validate(reqData, { abortEarly: false })
    next()
  } catch (e) {
    const errors = e.inner.map(({ path, message, value }) => ({ path, message, value }))
    Utils.responseForValidation(res, errors)
  }
}
