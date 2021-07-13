import axios from "axios";
axios.defaults.withCredentials = true;

export const getReceipts = async (limit) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/all?limit=${limit}`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
export const getReceipt = async (id) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/`,
      { id }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
export const removeReceipts = async (id) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/remove`,
      { id }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export const addReceipts = async (receipt) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/add`,
      { receipt }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

export const editReceipts = async (id, editReceipt) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/edit`,
      { id, editReceipt }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

// export const filterReceipts = async (query) => {
//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_BASIC_URL}/api/v1/receipt/add`,
//       { receipt }
//     );
//     return res;
//   } catch (err) {
//     return err.response;
//   }
// };
