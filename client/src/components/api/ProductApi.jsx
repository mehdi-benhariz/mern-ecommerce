import axios from "axios";
axios.defaults.withCredentials = true;

export const getProducts = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/all`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//add a product
export const addProducts = async (newProduct) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/add`,
      { newProduct }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//delete a product
export const removeProduct = async (pId) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,
      { pId }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//edit a product
export const editProduct = async (pId, editProduct) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/edit`,
      { pId, editProduct }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//get specific porduct
export const getProduct = async (pId) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/detail`,
      { pId }
    );

    return res;
  } catch (err) {
    return err.response;
  }
};
//search
let cancelToken;

export const searchProduct = async (search) => {
  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined)
    cancelToken.cancel("Operation canceled due to new request.");

  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  const url = `${process.env.REACT_APP_BASIC_URL}/api/v1/product/search`;
  //   cancelToken: cancelToken.token,

  try {
    const res = await axios.post(url, {
      search,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
//add product to pannel
export const buyProduct = async (pannel, total) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/buy`,
      { pannel, total }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//get the products of a category
export const getProductByCat = async (cId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/getByCat/${cId}`
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
//upload image of product
export const uploadProductPic = async (formData, pId) => {
  console.log({ formData });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/upload-pic/${pId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getPannel = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/pannel`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
export const addToPannel = async (pId) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/pannel/add`,
      { pId }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
