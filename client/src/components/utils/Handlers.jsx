export const setForm = (e, field, state, setState) => {
  var aux = state;
  aux[field] = e.target.value;
  setState(aux);
};
export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
export const formatURL = (id) =>
  `${process.env.REACT_APP_BASIC_URL}/product_images/${id}.png`;
