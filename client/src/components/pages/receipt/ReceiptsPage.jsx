import React, { useEffect, useState } from "react";
import { getReceipts } from "../../api/ReceiptApi";
import ReceiptCard from "../../layout/ReceiptCard";

const ReceiptsPage = () => {
  const [receipts, setReceipts] = useState([]);
  const fetchData = async () => {
    const res = await getReceipts();
    if (res.status === 200) {
      console.log("ReceiptsPage: ", res.data);
      setReceipts(res.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Receipts Page</h1>
      <div className="grid">
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
      </div>
    </div>
  );
};

export default ReceiptsPage;
