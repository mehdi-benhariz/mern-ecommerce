import React, { useState } from "react";
import DetailModel from "./DetailModel";

const HistoryTable = ({ data }) => {
  console.log({ data });
  let exist = data.length > 0;
  console.log(exist, data.length);
  const [showModal, setShowModal] = useState(false);
  return (
    <div class="bg-white rounded shadow-lg mt-3 p-2">
      {exist ? (
        <div>
          <h3 class="text-2xl text-gray-700 font-semibold">clients:</h3>
          <table>
            <thead>
              <tr>
                <th>total</th>
                <th>date</th>
                <th>details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((transaction) => {
                console.log(transaction);
                return (
                  <tr key={transaction._id}>
                    {showModal && (
                      <DetailModel
                        setShowModal={setShowModal}
                        data={transaction.goods}
                      />
                    )}
                    <td>
                      <span>date</span>{" "}
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td>
                      <span>total</span> {transaction.total}
                    </td>

                    <td>
                      <span> details</span>{" "}
                      <button
                        onClick={() => setShowModal(true)}
                        className="hover:bg-white hover:text-green-500 hover:border-green-500 border-2 ease-linear duration-200 w-4/5 rounded bg-green-500 text-xl px-6 text-white font-semibold "
                      >
                        +{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-2xl text-gray-700 font-semibold">
          sorry there are no users yet...{" "}
        </p>
      )}
    </div>
  );
};

export default HistoryTable;
