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
    const res = await axios.delete(
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
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/delete`,
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
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/detail`,
      pId
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//search
export const searchProduct = async (q) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/product/search`,
      q
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//add product to pannel
export const buyProduct = async (pId, quantity) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/buy`,
      { pId, quantity }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
