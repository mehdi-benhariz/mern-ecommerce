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
    const res = await axios.post("/api/v1/login", user);
    return  res;
  };
//log out from the app
  static logOut = async () => {
    const res = await axios.post("/api/v1/logOut");
    return res;
  };
  //check if the use is logged or not
  static getUserInfo = async (user) => {
    const res = await axios.post("/api/v1/userInfo");
    return res;

  };
}
