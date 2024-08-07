import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
import { useAuth } from '../context/AuthContext';

function Info() {
    const { isAuthenticated } = useAuth();
    
    return (
        <div className={`grid h-[100vh] ${isAuthenticated ? 'grid-cols-2' : 'grid-cols-1'}`} style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: isAuthenticated ? '240px 1fr' : '1fr' }}>
            <header>
                <WelcomeBar />
            </header>
            {isAuthenticated && (
                <nav className='row-start-1 row-span-3'>
                    <Sidebar />
                </nav>
            )}
            <main className={`${isAuthenticated ? 'col-start-2' : 'col-start-1'} flex justify-center items-center relative`}>
                <div className="w-full h-full max-w-7xl mx-auto py-16 px-8 sm:px-6 lg:py-10 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Visítanos</h2>
                    </div>
                    <div className="mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.3006813509505!2d-72.4401481!3d-38.52683650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966b31a14bb6c2fd%3A0x4b6eb083d26d45f2!2sElim%20Cafeter%C3%ADa%20Lautaro!5e0!3m2!1ses!2scl!4v1717099739487!5m2!1ses!2scl"
                                    width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Nuestra Dirección</h3>
                                        <p className="mt-1 text-gray-600">Erasmo Escala 755, Lautaro</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Horario</h3>
                                        <p className="mt-1 text-gray-600">Lunes - Viernes: 9am - 5pm</p>
                                        <p className="mt-1 text-gray-600">Sábado: 10am - 4pm</p>
                                        <p className="mt-1 text-gray-600">Domingo: Cerrado</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Info</h3>
                                        <p className="mt-1 text-gray-600">Email: info@e.com</p>
                                        <p className="mt-1 text-gray-600">Teléfono: +123456890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className={`${isAuthenticated ? 'col-start-2' : 'col-start-1'}`}>
                <Footer />
            </div>
        </div>
    );
}

export default Info;
