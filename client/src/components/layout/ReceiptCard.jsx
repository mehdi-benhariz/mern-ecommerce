import { FaFileInvoiceDollar } from "react-icons/fa";

const ReceiptCard = ({ receipt }) => {
  return (
    <div className="grid grid-cols-2 bg-white rounded m-2 w-56 p-3 shadow-md">
      <div className="col-span-1">
        <p className="text-lg text-green-450 font-semibold">81$</p>
        <p className="text-lg font-medium">
          <span className="text-lg font-medium text-gray-700"> 14 </span>product
        </p>
        <p className="text-lg font-medium text-gray-700">date</p>
      </div>
      <div className="h-10  w-auto ">
        <FaFileInvoiceDollar color="green" size={80} />
      </div>
    </div>
  );
};

export default ReceiptCard;
