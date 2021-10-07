import React, { useState } from "react";
import { addProducts, uploadProductPic } from "../../api/ProductApi";
import { input } from "../../shared/classes";
import { useParams, useHistory } from "react-router";

//totally fine
const AddProduct = () => {
  const [newProduct, setnewProduct] = useState({});
  const [error, seterror] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  //*for better user experience
  const [previewImg, setPreviewImg] = useState(null);
  let { pId } = useParams();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreviewImg(reader.result);
        setnewProduct({ ...newProduct, image: reader.result });
        console.log({ newProduct });
      }
    };
  };
  const handleSubmit = async (e) => {
    const res = await addProducts(newProduct);
    if (res?.data?.success) {
      setnewProduct({});
      // changePic();
      // const response = await uploadProductPic(
      //   formData,
      //   res.data.newProduct._id
      // );
      //      console.log(response);
    } else seterror(res?.data?.error);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile);
    console.log({ selectedFile });
    uploadProductPic(formData, pId);
  };
  /*   const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4`;
 */ const labelText = `text-lg font-medium text-gray-700`;

  return (
    <div className="grid grid-rows-3 gap-8 px-4 ">
      <div className="row-span-3 grid grid-cols-2 gap-2 bg-white rounded-md shadow-md text-left pl-4 py-4">
        <div>
          <div>
            <label className={labelText}>Name</label>
            <input
              className={input}
              type="text"
              onChange={(e) =>
                setnewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          <div>
            <label class={labelText}>Price</label>
            <input
              className={input}
              type="number"
              onChange={(e) =>
                setnewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>
          <div>
            <label className={labelText}>Quantity In Stock</label>
            <input
              className={input}
              type="number"
              onChange={(e) =>
                setnewProduct({
                  ...newProduct,
                  quantityStock: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="row-span-3  text-left pl-4 mr-2 mb-4 ">
          <label className={labelText}>Description</label>
          <input
            className="bg-gray-200 rounded-md px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4  h-full"
            type="text"
            onChange={(e) =>
              setnewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
      </div>
      {error && (
        <p
          className="no-underline text-red-600 mb-2 inline-flex items-center rounded-full border border-grey-light bg-red-200 text-xs 
          pl-1 pt-1 pb-1 pr-2 leading-none mr-2 font-bold p-4"
        >
          <span className="inline-flex rounded-full bg-green-light text-red-600 mr-1 font-bold">
            X
          </span>{" "}
          <span>{error} </span>
        </p>
      )}
      <div className=" bg-white rounded-md shadow-md mb-10">
        {" "}
        <div className="mb-2">
          {" "}
          <span className={labelText}>Photo</span>
          <form>
            <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
              <div className="absolute">
                {!selectedFile && (
                  <div className="flex flex-col items-center ">
                    <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
                    <span className="block text-gray-400 font-normal">
                      Attach you files here
                    </span>{" "}
                    <span className="block text-gray-400 font-normal">or</span>{" "}
                    <span className="block text-blue-400 font-normal">
                      Browse files
                    </span>{" "}
                  </div>
                )}
                {selectedFile && <img src={previewImg} alt="product" />}
              </div>{" "}
              <input
                type="file"
                onChange={handleFileChange}
                className="h-full w-full opacity-0"
                name=""
              />
            </div>
          </form>
        </div>
        <div>
          <button
            class="text-xl text-white font-semibold bg-purple-500 hover:bg-purple-700 ease-linear p-4
         rounded-md m-3"
            onClick={handleSubmit}
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

export default AddProduct;
