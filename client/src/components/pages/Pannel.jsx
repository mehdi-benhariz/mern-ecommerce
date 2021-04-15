import React, { useState, useEffect } from "react";
import { buyProduct } from "../api/ProductApi";
const Pannel = () => {
  const [quantity, setquantity] = useState(0);
  useEffect(() => {
    console.log("get pannel data");
  }, []);
  const handlBuy = async (e) => {
    let pId = 0;
    const res = await buyProduct(pId, quantity);
    console.log(res);
  };
  return (
    <div class="grid grid-rows-5 m-2">
      <div class="row-span-3 grid sm:grid-flow-row  grid-cols-3 mb-4 ">
        <div class=" sm:row-auto col-span-2 mr-3 rounded bg-white shadow-lg">
          <span class="py-4 bg-purple-400 text-white font-semibold pl-2 mb-3 px-6">
            the product pic
          </span>
          <img
            src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
            alt="a product"
            class="object-fill"
          />{" "}
        </div>
        <div class="sm:row-auto bg-white rounded shadow-lg p-4">
          <h4 class="text-gray-700 text-lg font-bold">Products(4)</h4>
          <h4 class="text-gray-500 text-lg font-bold">Name:</h4>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="/"
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
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              4
            </span>
            <a
              href="/"
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
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
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
              onClick={() => (quantity > 0 ? setquantity(quantity - 1) : null)}
            >
              -
            </button>
            <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              {quantity}
            </span>
            <button
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium
             text-gray-900 hover:bg-gray-50 outline-none"
              onClick={() => setquantity(quantity + 1)}
            >
              +
            </button>
          </nav>
          <h4 class="text-gray-500 text-lg font-bold">See More</h4>
        </div>
      </div>
      <div class="row-auto bg-white rounded shadow-lg mt-3 mb-4 p-4 flex flex-col">
        <span class="inline-flex mb-3">
          <h4 class="text-gray-700 text-5xl font-bold">Products: </h4>
          <span class="text-blue-400 text-5xl float-right">8</span>
        </span>
        <span class="inline-flex mb-3">
          <h4 class="text-gray-700 text-5xl font-bold">total: </h4>
          <span class="text-green-450 text-5xl float-right ">150$</span>
        </span>
        <button
          class="bg-pink-500 py-4 px-8 text-2xl font-semibold text-white hover:bg-pink-700 
        transform duration-150 ease-linear mt-2"
          onClick={handlBuy}
        >
          Buy it!
        </button>
      </div>
      <div class="row-span-1 bg-white rounded shadow-lg mb-4  h-60 p-4 ">
        <h4 class="text-lg font-medium text-gray-500">Payment History</h4>
        <table></table>
      </div>
    </div>
  );
};

export default Pannel;
