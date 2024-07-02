import React from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
function Inicio() {
    return (
        <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '80px auto 60px', gridTemplateColumns: '240px'}}>
            <header>
                <WelcomeBar></WelcomeBar>
            </header>
            <nav className='row-start-1 row-span-3'> <Sidebar/> </nav>
            
            <main className='col-start-2 row-span-2 overflow-hidden '>
                <img className='w-full h-full object-cover' src="/img/p1.jpg" alt="" />
            </main>
            <div className='col-start-2'> <Footer/> </div>
        </div>
        );
    };
export default Inicio;
