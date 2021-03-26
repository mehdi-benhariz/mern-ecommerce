import React from "react";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 50],
        backgroundColor: ["#fcba03", "#35fc03", "#035efc", "#fc0303"],
        hoverBackgroundColor: ["#fcba03", "#35fc03", "#035efc", "#fc0303"],
      },
    ],
  };
  const pieOptions = {
    legend: {
      display: false,
      position: "right",
      legendCallback: function (chart) {
        // Return the HTML string here.
        console.log(chart);
        return [
          <ul>
            <li>z</li>
            <li>zzzz</li>
            <li>ppp</li>
            <li>adasda</li>
          </ul>,
        ];
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
let chartInstance = null
  return (
    <div class="p-2 grid grid-flow-row">
      <div>
        <div class="flex mb-3">
        <h2 class="flex-1 text-gray-700 font-bold">Admin Page</h2>
        <Link to="/product/add">
        <button class="py-4 px-8 mr-2 bg-purple-500 hover:bg-purple-700 text-3xl text-white font-bold rounded" >Add Product</button>

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
      <div class="bg-white rounded shadow-lg mt-5 p-3 grid grid-cols-3 "  >
        <div class="col-span-2" >
          <h3 class="text-xl text-gray-700 font-semibold" >Products beeing sold are:</h3>
          <ul>
            <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2" >Clothes</li>
            <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2" >Electronics</li>
            <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2" >Clothes</li>

          </ul>
        </div>
        <div>
        <Pie
          data={data}
          options={pieOptions}
          ref={(input) => {
            chartInstance = input;
          }}
        />
        </div>     
      </div>
      <div class="bg-white rounded shadow-lg mt-3 p-2" >
       <h3 class="text-2xl text-gray-700 font-semibold" >clients:</h3>
       <table class="grid grid-cols-4">
        <th>Name</th> 
        <th>Registration date</th>  
        <th>sex</th>      
        <th>delete?</th>

         </table> 
      </div>
    </div>
  );
};

export default AdminPage;
