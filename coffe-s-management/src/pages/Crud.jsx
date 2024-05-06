import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Crud() {
    return (
        <div className=" bg-white flex flex-col min-h-screen">
            <Header title="Inventario" />
            <nav><Sidebar/></nav>
            <main className="flex-grow">
                {/* Cosas de Crud */}
            </main>
            <Footer />
        </div>
    );
}

export default Crud;
