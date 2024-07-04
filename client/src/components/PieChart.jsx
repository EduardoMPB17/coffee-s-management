import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
    return (
        <div className="chart-container" style={{ width: "35%" }}>
            <h2 style={{ textAling: "center" }}>Gráfico Circular</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Usuarios Generados entre 2016-2020"
                        }
                    }
                }}
            />
        </div>
    );
}

export default PieChart;