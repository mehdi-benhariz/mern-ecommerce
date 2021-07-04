import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { removeProduct } from "../api/ProductApi";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { removeUser } from "../api/AdminApi";
//TODO: create a template modal for delete
const DeleteModal = ({ setShowModal, id, type }) => {
  let history = useHistory();
  const { update } = useContext(ProductContext);
  const handleDelete = async (e) => {
    var res = null;
    switch (type) {
      case "product":
        res = await removeProduct(id);
        if (res?.data?.success) {
          update();
          history.push("/");
          setShowModal(false);
        }
        break;
      case "user":
        res = await removeUser(id);
        if (res?.data?.success) {
          setShowModal(false);
        }
        break;
      default:
        break;
    }
  };
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="delete"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="backdrop justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Delete?</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                you sure you want to delete this ?
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-red-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleDelete}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </AnimatePresence>
  );
};

export default DeleteModal;
