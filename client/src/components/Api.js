import axios from "axios";
axios.defaults.withCredentials = true

export class API {
//creating an account
  static register = async (user) => {
    const res = await axios.post("/api/v1/register", user);
    return res;
  };
//login to account
  static login = async (user) => {

    try {
      const res = await axios.post( `${process.env.REACT_APP_BASIC_URL}/api/v1/signin` , user);
      if (res.status === 200 ) {
           console.log(res)
           return res.data
      }
    } catch (error) {
      // console.log(error.response);
        console.log(error.response.data);
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
}
