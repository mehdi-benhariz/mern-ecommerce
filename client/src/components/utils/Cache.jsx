export const setPannelItems = (x) =>
  window.localStorage.setItem("pannelItems", x);

export const getPannelItems = () => {
  return window.localStorage.getItem("pannelItems");
};
