import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="chart-container" style={{ width: "80%" }}>
      <h2 style={{ textAlign: "center" }}>Gráfico de Barras</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Usuarios Generados entre 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export default BarChart;