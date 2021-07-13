import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { getAdminPage } from "../api/AdminApi";
import CategoryChart from "../charts/CategoryChart";
import RevenuMonth from "../charts/RevenuMonth";
import UsersDataTable from "../layout/UserTable";
import ReceiptCard from "../layout/ReceiptCard";
const AdminPage = () => {
  const [userTable, setUserTable] = useState([]);
  const [revenuePerMonth, setRevenuePerMonth] = useState([]);
  const fetchPage = async () => {
    const res = await getAdminPage();
    if (res?.status === 200) {
      console.log(res);
      const { users, revenuePerMonth } = res.data;
      console.log(revenuePerMonth);
      setRevenuePerMonth(revenuePerMonth);
      setUserTable(users);
    }
  };
  useEffect(() => {
    fetchPage();
  }, []);

  return (
    <div class="p-2 grid grid-flow-row">
      <div>
        <div class="flex mb-3 ">
          <h2 class="flex-1 text-gray-700 font-bold">Admin Page</h2>
          <Link to="/receipt/add">
            <button class="py-4 px-8 mr-2 bg-green-500 hover:bg-green-700 text-3xl text-white font-bold rounded">
              Add Receipt
            </button>
          </Link>
          <Link to="/product/add">
            <button class="py-4 px-8 mr-2 bg-purple-500 hover:bg-purple-700 text-3xl text-white font-bold rounded">
              Add Product
            </button>
          </Link>
        </div>
        <div class="grid xl:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1  ">
          <div class="bg-white shadow-lg rounded p-3 h-48 ">
            <span class="text-4xl text-gray-700 ">2500$</span>
            <h4 class="text-gray-500 font-normal">Revenue</h4>
          </div>
          <div class="bg-white shadow-lg rounded p-3 h-48 ">
            <span class="text-4xl text-gray-700 ">2500$</span>
            <h4 class="text-gray-500 font-normal">Revenue</h4>
          </div>
          <div class="bg-white shadow-lg rounded p-3 h-48 ">
            <span class="text-4xl text-gray-700 ">2500$</span>
            <h4 class="text-gray-500 font-normal">Revenue</h4>
          </div>
          <div class="bg-white shadow-lg rounded p-3 h-48 ">
            <span class="text-4xl text-gray-700 ">2500$</span>
            <h4 class="text-gray-500 font-normal">Revenue</h4>
          </div>
        </div>
      </div>
      <div className="grid xws sm:grid-cols-3 md:grid-cols-4">
        <ReceiptCard />
        <ReceiptCard />
        <ReceiptCard />
      </div>
      <div class="bg-white rounded shadow-lg mt-5 p-3 grid grid-cols-3 ">
        <CategoryChart />
      </div>
      <div class="bg-white rounded shadow-lg mt-5 p-3 grid grid-cols-1 ">
        {revenuePerMonth && <RevenuMonth dataSet={revenuePerMonth} />}
      </div>
      <UsersDataTable data={userTable} />
    </div>
  );
};

export default AdminPage;
