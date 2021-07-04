import React from "react";
import { Line } from "react-chartjs-2";

const RevenuMonth = ({ dataSet }) => {
  console.log(dataSet);
  const data = {
    labels: Array.from({ length: 12 }, (e, i) => {
      return new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "short",
      });
    }),
    datasets: [
      {
        label: "# of revenues",
        data: dataSet,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <h1 className="title">Revenu Per Month</h1>

      <Line data={data} options={options} />
    </>
  );
};

export default RevenuMonth;
