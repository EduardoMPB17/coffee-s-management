import React from 'react';

function Header({ title }) {
    return (
        <header className="bg-[#E6D88A] py-12 text-xl flex items-center justify-center">{title}</header>
    );
}

export default Header;