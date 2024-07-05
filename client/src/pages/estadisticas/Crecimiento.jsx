import React from 'react';
import Sidebar from '../../components/slidebar';
import Footer from '../../components/Footer';
import WelcomeBar from '../../components/bar';
import { Data } from "../../../utils/Data.js";
import Chart, { CategoryScale } from "chart.js/auto";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LineChart from '../../components/LineChart.jsx';

Chart.register(CategoryScale);

function Crecimiento() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
          {
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "&quot;#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            boderColor: "black",
            boderWidth: 2,
            pointBorderColor: "black",
            pointRadius: 5
          }
        ]
      });
      
      
      return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px auto' }}>
          <header>
            <WelcomeBar />
          </header>
          <nav className='row-start-1 row-span-3'> 
            <Sidebar /> 
          </nav>
          <div className='col-start-2 row-start-2 p-4'>
            <Link to='/Estadistics'>
              <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 ml-4" style={{ position: 'relative', zIndex: 10 }}>
                <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>
            </Link>
          </div>
          <main className='col-start-2 row-start-2 flex justify-center items-center' style={{ height: 'calc(113% - 120px)' }}>
            <LineChart chartData={chartData} />
          </main>
          <div className='col-start-2 row-start-3 w-full'>
            <Footer />
          </div>
        </div>
      );
}
export default Crecimiento;