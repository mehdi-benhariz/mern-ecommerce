import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import DeleteModal from "../layout/DeleteModal";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { isAdmin } = useContext(AuthContext);
  console.log({ isAdmin });

  /*   const product = useLocation().product;
  console.log(useLocation());
  */

  const product = JSON.parse(window.localStorage.getItem("product"));
  console.log({ product });
  const { price, name, description } = product;
  let pId = product._id;

  console.log(price, name, description);

  const [showModal, setShowModal] = useState(false);

  return (
    <div class="mb-8 rounded-md">
      {showModal && <DeleteModal setShowModal={setShowModal} pId={pId} />}
      <div class="page-title-box d-flex align-items-center justify-content-between ">
        <h4 class="mb-1  align-left text-lg font-bold text-gray-500 left-4 text-left pl-4 ">
          Product Detail
        </h4>
      </div>
      <div class="bg-white hover:shadow-md mx-4 rounded-md grid grid-rows-3 sm:grid-rows-1 sm:grid grid-flow-col ">
        <div class="row-span-3 p-3  border-gray-700 border-r-0">
          <img
            src="https://www.cdiscount.com/pdt2/6/2/0/2/300x300/tok5194620/rw/pack-3t-shirt-col-rond-noir-logo-poitrine.jpg"
            class="pr-0"
            alt="a product"
          />
        </div>
        <div class="col-span-2 pl-2 text-left">
          <h4 class="text-gray-500 text-lg font-semibold ">clothes</h4>
          <h2 class="text-gray-700 text-2xl font-bold">{name} </h2>
          <span class="text-gray-700  font-medium	 text-lg  ">
            Price :<span class="text-green-400">${price} </span> USD
          </span>
          <h2 class="text-gray-600 text-lg font-semibold border-l-4 border-purple-500 rounded-sm ">
            Description:
          </h2>
          <p class="text-gray-500 text-lg font-semibold ">{description}</p>
        </div>
        <div class="row-span-2 col-span-2 text-left pl-2 ">
          {isAdmin ? (
            <span>
              <Link
                class="bg-yellow-400 text-lg text-white font-bold px-10 py-4 rounded-md hover:bg-yellow-600 
                 transation ease-linear duration-100 mb-3"
                to={{ pathname: `/product/edit/${pId}`, product }}
              >
                Edit
              </Link>{" "}
              <button
                class="bg-red-600 text-lg text-white font-bold px-10 py-4 rounded-md hover:bg-red-800 
                 transation ease-linear duration-100 mb-3"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Delete
              </button>
            </span>
          ) : (
            <Link
              class="bg-purple-600 text-lg text-white font-bold px-10 py-4 rounded-md hover:bg-purple-800 
               transation ease-linear duration-100 mb-3"
              to={{ pathname: "/pannel", pId, price }}
            >
              Add to Card
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
