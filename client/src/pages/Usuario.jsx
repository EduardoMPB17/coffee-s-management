import React, { useEffect, useState } from 'react';
import Sidebar from '../components/slidebar';
import Footer from '../components/Footer';
import WelcomeBar from '../components/bar';
import { useAuth } from "../context/AuthContext";

function Usuario() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || !user) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className='grid grid-cols-2 h-[100vh]' style={{ gridTemplateRows: '85px auto 60px', gridTemplateColumns: '240px' }}>
      <header>
        <WelcomeBar />
      </header>

      <nav className='row-start-1 row-span-3'>
        <Sidebar />
      </nav>

      <main className="col-start-2 flex justify-center items-center relative">
        <img src='/img/uu.jpg' alt='background' className='absolute inset-0 w-full h-full object-cover object-center brightness-50' />
        <div className="mx-auto mt-2 w-1/4 relative">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="text-center p-6 bg-[#4A3B25]">
              <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                <path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path>
              </svg>
              <p className="pt-2 text-xl font-semibold text-gray-50 py-4">{user.username}</p>
              <p className="border rounded-full py-4 px-2 text-lg font-semibold text-gray-100">Email:{user.email}</p>
              <p className="border rounded-full py-4 px-2 text-lg font-semibold text-gray-100">Cargo:Usuario</p>
            </div>
          </div>
        </div>
      </main>

      <div className='col-start-2'>
        <Footer />
      </div>
    </div>
  );
}

export default Usuario;
