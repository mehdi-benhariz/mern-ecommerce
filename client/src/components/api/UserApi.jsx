import axios from "axios";
axios.defaults.withCredentials = true;

export const register = async (user) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/register`,
      user
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//login to account
export const login = async (user) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/signin`,
      user
    );
    console.log({ res });
    return res;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
//log out from the app
export const logOut = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/logOut`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export const getUserInfo = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/userInfo`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
