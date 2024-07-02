import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
import {Link} from 'react-router-dom';
function Estadistics() {

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px'}}>
            <header>
                <WelcomeBar></WelcomeBar>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2 flex justify-center items-center relative'>
                
                <img src='/img/p1.jpg' alt='background' className='absolute inset-0 w-full h-full object-cover object-center ' />
                <div className="grid grid-cols-2 gap-4 relative">
                    <div class="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c] transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 transition duration-300 hover:rotate-180">
                        <div class="flex h-full justify-center items-center">
                        <button >Ventas Mensuales</button>
                        </div>
                    </div>
                    <Link to='/Ventas'>
                    <button>
                        <div class="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c] transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 transition duration-300 hover:rotate-180">
                            <div class="flex h-full justify-center items-center">
                            Productos más vendidos
                            </div>
                        </div>
                    </button>
                    </Link>
                    <Link to='/Crecimiento'>
                    <button>
                        <div class="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c] transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 transition duration-300 hover:rotate-180">
                            <div class="flex h-full justify-center items-center">
                            Crecimiento
                            </div>
                        </div>
                    </button>
                    </Link>
                    <Link to='/Grafico'>
                    <button>
                        <div class="bg-[#4A3B25] text-[#E6D88A] border-4 border-[#E6D88A] py-24 px-28 rounded-md font-semibold text-xl hover:bg-[#5e4a2c] transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 transition duration-300 hover:rotate-180">
                            <div class="flex h-full justify-center items-center">
                            Gráficos
                            </div>
                        </div>
                    </button>
                    </Link>
                </div>
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Estadistics;