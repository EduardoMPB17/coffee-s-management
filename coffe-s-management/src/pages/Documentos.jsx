import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Documents() {
    return (
        <div className=" bg-white flex flex-col min-h-screen">
            <Header title="¡Documentos!" />
            <nav><Sidebar/></nav>
            <main className="flex-grow">
                {/* Cosas de Documents */}
            </main>
            <Footer />
        </div>
    );
}

export default Documents;