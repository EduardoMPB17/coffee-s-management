import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
import {Link} from 'react-router-dom';
function Contacto() {

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px'}}>
            <header>
                <WelcomeBar></WelcomeBar>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2 flex justify-center items-center relative'>
                <img src='/img/p1.jpg' alt='background' className='absolute inset-0 w-full h-full object-cover object-center ' />
                <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                <div className="container mx-auto w-2/6">
                <div className="py-12 flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                    <div className="my-8 grid gap-6 px-2">
                    <div className="flex items-center gap-4">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">lautARO</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">123457</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">CORREo</p>
                    </div>
                    </div>
                    <div className="py-4 pl-24">
                    <form action="#">
                        <p>Contactanos</p>
                        <div className="mb-4">
                        <div className="relative w-full min-w-[200px] h-11 !min-w-full border-black"><input type="text" name="Name" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder="Ingresa tu Nombre" /></div>
                        </div>
                        <div className="mb-4">
                        <div className="relative w-full min-w-[200px] h-11 !min-w-full"><input type="email" name="Email" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder="Ingresa tu Correo" /></div>
                        </div>
                        <div className="mb-4">
                        <div className="relative w-full min-w-[200px] h-11 !min-w-full"><input type="tel" name="Phone Number" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder=" hola" /></div>
                        </div>
                        <div className="mb-4">
                        <div className="relative w-full min-w-[200px] h-11 !min-w-full"><input type="textarea" name="Message" className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50  border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900" placeholder=" " /></div>
                        </div>
                        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full mt-6" type="button">Contact Us</button>
                    </form>
                    </div>
                </div>
                </div>
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Contacto;