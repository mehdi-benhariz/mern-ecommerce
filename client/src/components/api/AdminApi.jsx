import axios from "axios";
axios.defaults.withCredentials = true;

export const getAdminPage = async () => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/admin`;

  try {
    const res = await axios.get(url);
    return res;
  } catch (err) {
    return err.response;
  }
};

export const removeUser = async (id) => {
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/admin/remove-user`;

  try {
    const res = await axios.post(url, { id });
    return res;
  } catch (err) {
    return err.response;
  }
};
