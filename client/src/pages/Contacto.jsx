    import React from 'react';
    import Sidebar from '../components/slidebar';
    import Footer from '../components/Footer';
    import WelcomeBar from '../components/bar';
    import { Link } from 'react-router-dom';

    function Contacto() {
        return (
            <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px' }}>
                <header>
                    <WelcomeBar />
                </header>
                <nav className='row-start-1 row-span-3'> <Sidebar /> </nav>
                <main className='col-start-2 flex justify-center items-center relative'>
                    <img src='/img/p1.jpg' alt='background' className='absolute inset-0 w-full h-full object-cover object-center ' />
                    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-8">
                        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r bg-[#E6D88A] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                            </div>
                            <div className=" relative px-4 py-10 bg-[#4A3B25] shadow-lg sm:rounded-3xl sm:p-20">
                                <div className="text-center pb-6">
                                    <h1 className="text-3xl text-gray-300">Contactanos!</h1>
                                    <p className="text-gray-300">
                                        LLena el Formulario de Contacto para enviarnos tu Mensaje
                                    </p>
                                </div>
                                <form>
                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Nombre" name="name" />
                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="email" placeholder="Email" name="email" />
                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Telefono" />
                                    <textarea
                                        className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Escribe tu Mensaje" name="message" style={{ height: '121px' }}></textarea>
                                    <div className="flex justify-between">
                                        <input
                                            className="shadow bg-[#E6D88A]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit" value="Enviar ➤" />
                                        <input
                                            className="shadow bg-[#E6D88A]  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="reseT" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <div className='col-start-2'> <Footer /> </div>
            </div>
        );
    }

    export default Contacto;
