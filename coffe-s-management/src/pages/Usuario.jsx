import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Usuario() {
    return (
        <div className=" bg-white flex flex-col min-h-screen">
            <Header title="¡Bienvenido Usuario!" />
            <nav><Sidebar/></nav>
            <main className="flex-grow">
                {/* Cosas de Usuario */}
            </main>
            <Footer />
        </div>
    );
}

export default Usuario;