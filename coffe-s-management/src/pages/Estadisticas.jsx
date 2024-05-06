import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Estadistics() {
    return (
        <div className=" bg-white flex flex-col min-h-screen">
            <Header title="¡Estadísticas!" />
            <nav><Sidebar/></nav>
            <main className="flex-grow">
                {/* Cosas de Estadistics */}
            </main>
            <Footer />
        </div>
    );
}

export default Estadistics;