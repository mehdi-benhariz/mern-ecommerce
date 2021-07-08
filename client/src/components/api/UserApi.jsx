import axios from "axios";
axios.defaults.withCredentials = true;

export const register = async (user) => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/signup`;
  try {
    const res = await axios.post(url, user);
    console.log(res);
    return res;
  } catch (err) {
    return err.response;
  }
};
//login to account
export const login = async (user) => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/signin`;
  try {
    const res = await axios.post(url, user);
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
//log out from the app
export const logOut = async () => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/logOut`;
  try {
    const res = await axios.post(url);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getUserInfo = async () => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/userInfo`;
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getProfile = async () => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/user/profile`;
  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    return err.response;
  }
};
export const editProfile = async (newUser) => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/user/edit-profile`;
  try {
    const res = await axios.post(url, { newUser });
    return res;
  } catch (err) {
    return err.response;
  }
};
