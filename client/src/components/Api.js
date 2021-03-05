import axios from "axios";
axios.defaults.withCredentials = true

export class API {
//creating an account
  static register = async (user) => {
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/register`, user);
      return res
    }catch(err){
      return err.response;
    }
  
  };
//login to account
  static login = async (user) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/signin` , user);
    console.log({res})
    return res
  }catch(err){
    console.log(err)
    return err.response;
  }
      
 
  };
//log out from the app
  static logOut = async () => {
    const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/logOut`);
    return res;
  };
  //check if the use is logged or not
  static getUserInfo = async (user) => {
    const res = await axios.get( `${process.env.REACT_APP_BASIC_URL}/api/v1/userInfo`);
    return res;

  };
  //get product list
  static getProducts=async()=>{
    const res = await axios.get( `${process.env.REACT_APP_BASIC_URL}/api/v1/product/all`);
    return res;
  }
  //add a product
  static addProducts=async(newProduct)=>{
    const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/add`,newProduct);
    return res;
  }
  //delete a product
  static removeProduct=async(pId)=>{
    const res = await axios.delete(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,pId)
    return res;
  }
  //edit a product
  static editProduct=async(pId,editProduct)=>{
    const res = await axios.delete(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,{pId,editProduct})
    return res;
  }
}
