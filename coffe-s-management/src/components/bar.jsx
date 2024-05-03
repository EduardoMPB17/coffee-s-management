import React from "react";
//completar usuario con BD
const WelcomeBar = ({ username }) => {
  return (
    <header className="bg-brown-500 text-white py-2 px-4">
      <p className="text-lg">
        ¡Bienvenido, Usuario
      </p>
    </header>
  );
};

export default WelcomeBar;