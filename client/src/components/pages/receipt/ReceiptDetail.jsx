import React, { useState } from "react";

const ReceiptDetail = () => {
  // eslint-disable-next-line
  const [receipt, setreceipt] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-2 rounded shadow-md m-2 ">
      <div>
        {" "}
        <h1>Receipt Detail</h1> <input type="text" />
      </div>
      <div>
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
          </tbody>
        </table>
      </div>
      <div className="space-x-2 flex justify-between my-2 ">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 ease-in text-xl font-semibold text-white rounded px-6 py-1 "
          onClick={handleSubmit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 ease-in text-xl font-semibold text-white rounded px-6 py-1 "
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReceiptDetail;
