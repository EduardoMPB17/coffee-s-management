import React from 'react';
import Sidebar from '../../components/slidebar';
import Footer from '../../components/Footer';
import WelcomeBar from '../../components/bar';
function Ventas() {

    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px'}}>
            <header>
                <WelcomeBar></WelcomeBar>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            <main className='col-start-2 flex justify-center items-center relative'>
                graficos
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
    );
}
export default Ventas;