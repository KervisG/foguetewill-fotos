import React from 'react';
import comparisonImage from '../../assets/antes.webp'; // Reemplaza esta ruta con tu imagen que contiene las dos imágenes juntas

const TestimonialSection = () => {
  return (
    <section
      className="relative h-auto text-white py-12 md:py-24"
      style={{
        background: 'linear-gradient(to right, #000000, #3a1500, #000000)', // Fondo degradado con tres colores
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-auto px-4">
        
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">O que as pessoas vem dizendo?</h2>
        </div>

        {/* Imagen de comparación (antes y depois) */}
        <div className="flex justify-center">
          <img
            src={comparisonImage}
            alt="Antes e Depois"
            className="w-full max-w-xs md:max-w-lg h-auto shadow-lg rounded-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
