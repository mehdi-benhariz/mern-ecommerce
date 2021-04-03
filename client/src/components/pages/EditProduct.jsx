import React, { useState } from "react";
import { useParams } from "react-router";
import { API } from "../Api"; 

const EditProduct = () => {
  const [newProduct, setnewProduct] = useState({});
  let {pid }=useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.addProducts(
      pid,
      newProduct
    );
    console.log(newProduct)
    console.log(res);
  };

  const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
    focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4`;
  const labelText = `text-lg font-medium text-gray-700`;
  return (
    <div class="grid grid-rows-3 gap-8 px-4 ">
      <div class="row-span-3 grid grid-cols-2 gap-2 bg-white rounded-md shadow-md text-left pl-4 py-4">
        <div>
          <div>
            <label class={labelText}>Name</label>
            <input
              class={input}
              type="text"
              onChange={(e) =>
                setnewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          <div>
            <label class={labelText}>Price</label>
            <input
              class={input}
              type="number"
              onChange={(e) =>
                setnewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>
          <div>
            <label class={labelText}>Quantity In Stock</label>
            <input
              class={input}
              type="number"
              onChange={(e) =>
                setnewProduct({ ...newProduct, quantityStock: e.target.value })
              }
            />
          </div>
        </div>
        <div class="row-span-3  text-left pl-4 mr-2 mb-4 ">
          <label class={labelText}>Description</label>
          <input
            class="bg-gray-200 rounded-md px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4  h-full"
            type="text"
            onChange={(e) =>
              setnewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
      </div>

      <div class=" bg-white rounded-md shadow-md mb-10">
        {" "}
        <div class="mb-2">
          {" "}
          <span class={labelText}>Photo</span>
          <div class="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
            <div class="absolute">
              <div class="flex flex-col items-center ">
                <i class="fa fa-cloud-upload fa-3x text-gray-200"></i>
                <span class="block text-gray-400 font-normal">
                  Attach you files here
                </span>{" "}
                <span class="block text-gray-400 font-normal">or</span>{" "}
                <span class="block text-blue-400 font-normal">
                  Browse files
                </span>{" "}
              </div>
            </div>{" "}
            <input type="file" class="h-full w-full opacity-0" name="" />
          </div>
        </div>
        <div>
          <button
            class="text-xl text-white font-semibold bg-purple-500 hover:bg-purple-700 ease-linear p-4
         rounded-md m-3"
            onClick={(e)=> handleSubmit(e)}
          >
            Save
          </button>
          <button
            class="text-xl text-white font-semibold bg-gray-500 hover:bg-gray-700 ease-linear p-4 
         rounded-md  m-3"
            onClick={() => {
              setnewProduct({});
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;