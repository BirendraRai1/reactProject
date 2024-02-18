// we store all the routes over here
//import.meta.env.VITE_BASE_URL is a syntax nothing else
const BASE_URL = import.meta.env.VITE_BASE_URL 
const urlConfig = {
  LOGIN_URL: BASE_URL + "/api/auth/login",
  SIGNUP_URL: BASE_URL + "/api/auth/signup",
  BRAND_RELATION_URL: BASE_URL + "/api/brand/relation",
  BRAND_LIST: BASE_URL + "/api/brand/brandList",
  VERIFIED_BRAND_LIST : BASE_URL + "/api/brand/verifyBrandList",
  BRAND: BASE_URL + "/api/brand",
  GET_CATEGORY : BASE_URL + "/api/category",
  GET_SUBCAT : BASE_URL + "/api/subCategory",
  GET_VARIANT : BASE_URL + "/api/variant",
  GET_CHILDCATEGORY_FROM_SUBCATEGORY : BASE_URL + "/api/childCategory/getAllChild",
  ALL_PRODUCT_URL: BASE_URL,
};

export default urlConfig;
