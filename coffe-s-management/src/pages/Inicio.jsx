import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Inicio() {
    return (
        <div className=" bg-white flex flex-col min-h-screen">
            <Header title="¡Bienvenido!" />
            <nav><Sidebar/></nav>
            <main className="flex-grow">
                {/* Cosas de Inicio */}
            </main>
            <Footer />
        </div>
        );
    };
export default Inicio;
