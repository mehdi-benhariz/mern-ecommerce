import React from "react";
const AdminPage = () => {
  return (
    <div class="p-2">
      <h2 class="text-gray-700 font-bold">Admin Page</h2>
      <canvas
        height="349"
        width="698"
        data-testid="canvas"
        style={{ display: "block", width: "698px", height: "349px" }}
        class="chartjs-render-monitor"
      ></canvas>
    </div>
  );
};

export default AdminPage;
