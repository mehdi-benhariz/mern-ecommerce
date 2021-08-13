import React, { useEffect, useState } from "react";
import { addReceipts, getReceipts } from "../../api/ReceiptApi";
//import { setForm } from "../../utils/Handlers";

const AddReceipt = () => {
  const [products, setProducts] = useState([
    { product: "", quantity: 0, unitPrice: 0 },
  ]);
  /*   const [product, setProduct] = useState({
    product: "",
    quantity: 0,
    unitPrice: 0,
  }); */
  const [total, setTotal] = useState(0);
  //
  var map = new Map();
  const setMap = async () => {
    const res = await getReceipts();
    if (res?.status === 200) {
      console.log(res.data);
      var data = res.data;
      for (var i = 0; i < data.length; i++) map.set(data[i].id, data[i]);
    }
  };

  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addReceipts(products, total);
    if (res?.status === 200) console.log(res.data);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setProducts([{}]);
  };
  //

  const setForm = (e, field, i) => {
    console.log({ field, i });
    var aux = products;
    aux[i][field] = e.target.value;
    console.log(aux[i]);
    setProducts(aux);
  };
  //add column to the table
  const addCol = (e) => {
    var aux = products;
    aux.push({ product: "", quantity: 0, unitPrice: 0 });
    console.log({ aux });
    setProducts(aux);
    console.log({ products });
  };
  //remove column from the table
  const removeCol = (i) => {
    var aux = products;
    aux.splice(i, 1);
    setProducts(aux);
  };
  useEffect(() => {
    var aux = 0;
    products.forEach((item, i) => {
      aux += item.quantity * item.unitPrice;
    });
    setTotal(aux);
  }, [setProducts, products]);
  //set the options for the select
  //TODO add options to the select
  /*   const options = () => {
    for (const [key, value] of Object.entries(map)) {
      console.log(key, value);
      return (
        <option key={key} value={key}>
          {value}
        </option>
      );
    }
  }; */

  //eslint-disable-next-line
  useEffect(() => {
    setMap();
  }, []);

  return (
    <div className="bg-white rounded shadow-md">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>quantity</th>
            <th>unit price</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {products.map((product, i) => {
            console.log(product);
            return (
              <tr key={product._id}>
                <td>
                  <span>product</span>
                  <input
                    type="text"
                    value={product.product}
                    onChange={(e) => setForm(e, "product", i)}
                    className="bg-gray-200 rounded px-2 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-4/5 mb-2 mr-4"
                  />
                </td>
                <td>
                  <span>quantity</span>
                  <input
                    value={product.quantity}
                    type="number"
                    onChange={(e) => setForm(e, "quantity", i)}
                    className="bg-gray-200 rounded px-2 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-4/5 mb-2 mr-4"
                  />
                </td>
                <td className="flex flex-row">
                  <span>unit price</span>

                  <input
                    value={product.unitPrice}
                    type="number"
                    onChange={(e) => setForm(e, "unitPrice", i)}
                    className="bg-gray-200 rounded px-2 py-1 hover:shadow-xl transform ease-linear duration-150 
  focus:bg-white border-transparent focus:border-purple-400 border-2 outline-none w-4/5 mb-2 mr-4"
                  />
                  {i === 0 ? (
                    <button
                      onClick={(e) => addCol(e)}
                      className="text-2xl rounded-full px-4  bg-gray-400 "
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={() => removeCol(i)}
                      className="text-2xl rounded-full px-4  bg-gray-400 "
                    >
                      -
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row items-center justify-between ">
        <div>
          Total <span>{total} </span>{" "}
        </div>
        <div className="space-x-2 mx-2 my-2 ">
          <button
            className="bg-green-500 hover:bg-green-700 ease-in text-xl font-semibold text-white rounded px-6 py-1 "
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 ease-in text-xl font-semibold text-white rounded px-6 py-1 "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReceipt;
