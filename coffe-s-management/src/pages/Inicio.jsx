import React, { useState } from 'react';
import Sidebar from '../components/slidebar';
import '../styles/pag.css';
import WelcomeBar from '../components/bar'
function Inicio() {
    return (
        <div>
            <header className={'bg-[#E6D88A] size-full top-0 w-full py-12 z-50 text-xl flex items-center justify-center'}>¡Bienvenido!
            </header>

            <nav><Sidebar></Sidebar></nav>
            <body>
            </body>
            
        </div>
      );
    };
export default Inicio;
