import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5541999225894?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Operacao%20sem%20Limites."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-5 right-5 
        bg-green-500 text-white 
        rounded-full p-4 
        text-6xl 
        shadow-lg 
        hover:scale-110 
        transition-transform duration-300 
        z-50
        
        /* Responsivo para pantallas pequeñas */
        md:bottom-6 md:right-6 md:p-5 md:text-8xl
      "
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsAppButton;
