import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Cloths", "Blue", "Green"],
  datasets: [
    {
      label: "# of Products ",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgb1(2, 247, 27,0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgb1(2, 247, 27,1)",
      ],
      borderWidth: 1,
    },
  ],
};

const CategoryChart = ({ dataSet }) => {
  return (
    <>
      <div class="col-span-2">
        <h3 class="text-xl text-gray-700 font-semibold">
          Products beeing sold are:
        </h3>
        <ul>
          <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2">
            Clothes
          </li>
          <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2">
            Electronics
          </li>
          <li class="text-xl text-gray-600 font-bold border-l-4 border-purple-500  my-2">
            Clothes
          </li>
        </ul>
      </div>
      <div className="sm:col-span-3 md:col-span-1">
        <Pie data={data} />
      </div>
    </>
  );
};

export default CategoryChart;
