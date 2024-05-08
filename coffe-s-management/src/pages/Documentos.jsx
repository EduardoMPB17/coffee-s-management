import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';

function Documents() {
    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '120px auto 60px', gridTemplateColumns: '250px'}}>
            <header className='col-start-2 bg-[#E6D88A] px-4'>
                <h1 className='text-xl font-bold'>¡Documentos!</h1>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2'></main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}

export default Documents;