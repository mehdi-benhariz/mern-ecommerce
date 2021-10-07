import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { editProduct, uploadProductPic } from "../../api/ProductApi";
const EditProduct = () => {
  const product = JSON.parse(window.localStorage.getItem("product"));
  console.log(product);
  let [newProduct, setnewProduct] = useState(product);
  const [selectedFile, setSelectedFile] = useState(null);
  //*for better user experience
  const [previewImg, setPreviewImg] = useState(null);

  let { pId } = useParams();
  let history = useHistory();
  //not finished yet
  const handleSubmit = async () => {
    const res = await editProduct(pId, newProduct);
    console.log(newProduct);
    console.log(res);
    if (res.status === 200) history.push("/");
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(selectedFile);
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => {
      //todo:add a case for empty data
      if (reader.readyState === 2) {
        setPreviewImg(reader.result);
        setnewProduct({ newProduct, image: reader.result });
      }
    };
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("myFile", selectedFile);
    console.log({ selectedFile });
    uploadProductPic(formData, pId);
    console.log({ newProduct });
  };
  const input = `bg-gray-200 rounded-full px-3 py-1 hover:shadow-xl transform ease-linear duration-150 
    focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-full mb-2 mr-4`;
  const labelText = `text-lg font-medium text-gray-700`;

  return (
    <div className="grid grid-rows-3 gap-8 px-4 ">
      <div className="row-span-3 grid sm:grid-cols-2 gap-2 bg-white rounded-md shadow-md text-left pl-4 py-4">
        <div className="p-2">
          <div>
            <label className={labelText}>Name</label>
            <input
              value={newProduct.name}
              className={input}
              type="text"
              onChange={(e) =>
                setnewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className={labelText}>Price</label>
            <input
              value={newProduct.price}
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
              value={newProduct.quantityStock}
              className={input}
              type="number"
              onChange={(e) =>
                setnewProduct({ ...newProduct, quantityStock: e.target.value })
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
            value={newProduct.description}
            onChange={(e) =>
              setnewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </div>
      </div>

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
            className="text-xl text-white font-semibold bg-purple-500 hover:bg-purple-700 ease-linear p-4
         rounded-md m-3"
            onClick={(e) => {
              handleUpload();
              // handleSubmit(e);
            }}
          >
            Save
          </button>
          <button
            className="text-xl text-white font-semibold bg-gray-500 hover:bg-gray-700 ease-linear p-4 
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
