import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getPannel, buyProduct } from "../api/ProductApi";
import HistoryTable from "../layout/HistoryTable";
import Alert from "../utils/Toasts";

const Pannel = () => {
  const [pannel, setPannel] = useState([]);
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [historyTable, setHistoryTable] = useState([]);
  const [alert, setAlert] = useState({
    isShown: false,
    text: "",
    type: "green",
  });
  //display the toast message
  const displayAlert = (duration, type, text) => {
    setAlert({
      isShown: true,
      text,
      type,
    });

    setTimeout(
      () => setAlert({ alert: { ...alert, isShown: false } }),
      duration
    );
  };
  let history = useHistory();
  //set the pannel
  async function fetchPannel() {
    const res = await getPannel();
    console.log(res);
    if (res?.status === 200) {
      setPannel(res?.data?.data);
      setHistoryTable(res?.data?.historic);
    }
    console.log(res?.data?.historic);
  }
  useEffect(() => {
    fetchPannel();
  }, []);

  //buying products
  const handleBuy = async () => {
    const res = await buyProduct(pannel, total);
    console.log({ res });
    if (res?.status === 200) {
      displayAlert(
        1000,
        "red",
        "there was an error buying the product :( ...!"
      );
      history.push("/");
    } else
      displayAlert(
        5000,
        "red",
        "there was an error buying the product :( ...!"
      );
    console.log("test", alert);
  };
  //paggination
  const incrementElt = (e) => {
    e.preventDefault();
    if (index < pannel.length - 1) setIndex(index + 1);
  };
  const decrementElt = (e) => {
    e.preventDefault();
    if (index > 0) setIndex(index - 1);
  };
  //change quantity
  const removeQ = (e) => {
    e.preventDefault();
    if (pannel[index].quantity > 0) {
      let aux = [...pannel];
      aux[index].quantity--;
      setPannel(aux);
    }
  };
  const addQ = (e) => {
    const { quantityStock } = pannel[index].product;
    const { quantity } = pannel[index];

    if (quantity < quantityStock) {
      let aux = [...pannel];
      aux[index].quantity++;
      setPannel(aux);
    }
  };
  //get the total price
  const getPriceQuantity = () => {
    let resP = 0;
    let resQ = 0;
    pannel.forEach((e) => {
      resP += e.product.price * e.quantity;
      resQ += e.quantity;
    });
    return { resP, resQ };
  };
  //

  useEffect(() => {
    var { resP, resQ } = getPriceQuantity();
    setTotal(resP);
    setQuantity(resQ);
    // eslint-disable-next-line
  }, []);

  return (
    <div class="grid grid-rows-5 m-2">
      {pannel.length > 0 && (
        <div class="sm: row-span-3 grid sm:grid-flow-row  sm:grid-cols-3 mb-4 ">
          <div class=" md:row-auto md:col-span-2 sm:col-span-3 mr-3 rounded bg-white shadow-lg">
            <span class="py-4 bg-purple-400 text-white font-semibold pl-2 mb-3 px-6">
              the product pic
            </span>
            <img
              src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
              alt="a product"
              class="object-fill"
              settotal
            />{" "}
          </div>
          <div class="md:row-auto md:col-span-1 sm:col-span-3 sm:mt-4 md:mt-0 mr-2 bg-white rounded shadow-lg p-4">
            <h4 class="text-gray-700 text-lg font-bold">
              Products({pannel.length})
            </h4>
            <h4 class="text-gray-500 text-lg font-bold">Name:</h4>
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={decrementElt}
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                {pannel[0].product.name}
              </span>
              <button
                onClick={incrementElt}
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
            <h4 class="text-gray-500 text-lg font-bold">Price</h4>
            <h4 class="text-gray-500 text-lg font-bold">Quantity:</h4>
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white 
            text-sm font-medium text-gray-900 hover:bg-gray-50 outline-none"
                onClick={removeQ}
              >
                -
              </button>
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                {pannel[index].quantity}
              </span>
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium
             text-gray-900 hover:bg-gray-50 outline-none"
                onClick={addQ}
              >
                +
              </button>
            </nav>
            <h4 class="text-gray-500 text-lg font-bold">See More</h4>
          </div>
        </div>
      )}
      <div class="row-auto bg-white rounded shadow-lg mt-3 mb-4 p-4 flex flex-col">
        <span class="inline-flex mb-3">
          <h4 class="text-gray-700 text-5xl font-bold">Products: </h4>
          <span class="text-blue-400 text-5xl float-right">{quantity} </span>
        </span>
        <span class="inline-flex mb-3">
          <h4 class="text-gray-700 text-5xl font-bold">total: </h4>
          <span class="text-green-450 text-5xl float-right ">{total} $</span>
        </span>
        <button
          class="bg-pink-500 py-4 px-8 text-2xl font-semibold text-white hover:bg-pink-700 
        transform duration-150 ease-linear mt-2"
          onClick={handleBuy}
        >
          Buy it!
        </button>
        <Alert alert={alert} />
      </div>
      <HistoryTable
        class="row-span-1 bg-white rounded shadow-lg mb-4  h-60 p-4 "
        data={historyTable}
      />
    </div>
  );
};

export default Pannel;
