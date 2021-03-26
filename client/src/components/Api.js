import axios from "axios";
axios.defaults.withCredentials = true

export class API {
//creating an account
  static register = async (user) => {
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/register`, user);
      return res
    }catch(err){
      return err.response
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
    return err.response
  }
      
 
  };
//log out from the app
  static logOut = async () => {
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/logOut`);
      return res;
    }catch(err){
      return err.response
    }

  };
  //check if the user is logged or not
  static getUserInfo = async () => {
    try{
      const res = await axios.get( `${process.env.REACT_APP_BASIC_URL}/api/v1/userInfo`);
      return res;
    }catch(err){
      return err.response
    }


  };
  //get product list
  static getProducts=async()=>{
    try{
      const res = await axios.get( `${process.env.REACT_APP_BASIC_URL}/api/v1/product/all`);
      return res;
    }catch(err){
      return err.response
    }

  }
  //add a product
  static addProducts=async(newProduct)=>{
    try{
      const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/add`,newProduct);
      return res;
    }catch(err){
    return err.response
    }

  }
  //delete a product
  static removeProduct=async(pId)=>{
    try{
      const res = await axios.delete(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,pId)
      return res;
    }catch(err){
   return err.response
    }

  }
  //edit a product
  static editProduct=async(pId,editProduct)=>{
    try{
      const res = await axios.put(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,{pId,editProduct})
      return res;
    }catch(err){
      return err.response
    }

  }
  //get specific porduct
   static getProduct=async(pId)=>{
     try{
      const res =await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/detail`,pId)
      return res;
     }catch(err){
       return err.response
     }

   }
   //search
   static searchProduct=async(q)=>{
       try{
         const res= await axios.get(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/search`,q)
         return res;
       }catch(err){
         return err.response
       }
   }
  //add product to pannel
  static buyProduct=async(pId,quantity)=>{
     try{
        const res = await axios.post(`${process.env.REACT_APP_BASIC_URL}/api/v1/buy`,{pId,quantity})
        return res;
     }catch(err){
       return err.response
     }
  }
}
