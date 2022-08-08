import * as ValidationManger from "../middleware/validation";
import TestModule from "../app/modules/testModule";
import { stringConstants } from "../app/common/constants";
import Products from "../app/modules/product";
import User from "../app/modules/userData";
module.exports = (app) => {
  app.get("/get-product", new Products().getProducts);
  app.post(
    "/save-product",
    ValidationManger.validateSaveProduct,
    new Products().saveProducts
  );
  app.post("/sign-up", ValidationManger.validateSignUp, new User().signUp);
  app.post("/login", ValidationManger.validateLogin, new User().login);
};
