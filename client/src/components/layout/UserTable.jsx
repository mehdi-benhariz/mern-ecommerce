import { useState } from "react";
import DeleteModal from "./DeleteModal";
const UsersDataTable = ({ data }) => {
  let exist = data.length > 0;
  console.log(exist, data.length);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);
  return (
    <div className="bg-white rounded shadow-lg mt-3 p-2">
      {exist ? (
        <div>
          <h3 className="text-2xl text-gray-700 font-semibold">clients:</h3>
          <div className="pt-2 relative mx-auto text-gray-600 ">
            <div className="form-group form-inline mb-0">
              Full text search:{" "}
              <input
                type="text"
                name="searchTerm"
                className="border-2 border-gray-300 bg-white h-8 px-4 pr-1 rounded-lg text-sm focus:outline-none"
                ng-reflect-name="searchTerm"
                ng-reflect-model=""
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>Registration date</th>
                <th>gender</th>
                <th>adress</th>
                <th>delete?</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                console.log(user);
                return (
                  <tr key={user._id}>
                    {showModal && (
                      <DeleteModal
                        setShowModal={setShowModal}
                        id={user._id}
                        type="user"
                      />
                    )}
                    <td>
                      <span>Pic</span> <img src="" alt="profile" />
                    </td>
                    <td>
                      <span>Name</span>
                      {user.name}
                    </td>
                    <td>
                      <span>Registration date</span>{" "}
                      {new Date(user.date).toLocaleDateString()}
                    </td>
                    <td>
                      <span>gender</span> {user.gender}
                    </td>
                    <td>
                      <span>adress</span> {user.adress}
                    </td>
                    <td>
                      <span> delete</span>{" "}
                      <button
                        onClick={() => setShowModal(true)}
                        className="hover:bg-white hover:text-red-500 hover:border-red-500 border-2 ease-linear duration-200 w-4/5 rounded bg-red-500 text-xl px-6 text-white font-semibold "
                      >
                        X{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
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
              </button>
              <span
                aria-current="page"
                class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {page}
              </span>
              <button
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => setPage((old) => old + 1)}
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
              </button>
            </nav>
          </div>{" "}
        </div>
      ) : (
        <p className="text-2xl text-gray-700 font-semibold">
          sorry there are no users yet...{" "}
        </p>
      )}
    </div>
  );
};

export default UsersDataTable;
