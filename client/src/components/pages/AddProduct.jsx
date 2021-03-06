import React, { useState } from "react";
import {API} from "../Api"
const AddProduct = () => {
   const [newProduct, setnewProduct] = useState({});
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res  =await API.addProducts(`${process.env.REACT_APP_BASIC_URL}/api/v1/product/add`,newProduct);
      console.log(res)
  }
  
  const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4`;
  const labelText = `text-lg font-medium text-gray-700`;

  return (
    <div class="grid grid-rows-3 grid-flow-col gap-8 px-4 ">
      <div class="bg-white rounded-md shadow-md row-span-2 grid grid-flow-col grid-cols-2">
        <div class="col-span-auto text-left pl-4 py-4">
        <div>
        <label class={labelText}>Name</label>
          <input class={input} onChange={(e)=>setnewProduct({...newProduct,name:e.target.value})}  />
        </div>

        <div>
        <label class={labelText}>Name</label>
          <input class={input} />
        </div>
        <div>
        <label class={labelText}>Name</label>
          <input class={input} />
        </div>

        </div>
        <div class="col-span-1 text-left pl-4 py-4">
        <div  >
        <label class={labelText}>Name</label>
          <input class={input} />
        </div>
        <div>
        <label class={labelText}>Name</label>
          <input class={input} />
        </div> 
        <div>
        <label class={labelText}>Name</label>
          <input class={input} />
        </div>

        </div>
      </div>
      <div class="row-span-1 bg-white rounded-md shadow-md mb-10">
        {" "}
        <div class="mb-2">
          {" "}
          <span>Photo</span>
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
          <button class="text-xl text-white font-semibold bg-purple-500 hover:bg-purple-700 ease-linear p-4
          rounded-md m-3"
          onClick={handleSubmit}
           >Save</button>
          <button class="text-xl text-white font-semibold bg-gray-500 hover:bg-gray-700 ease-linear p-4 
          rounded-md  m-3"
           >Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
