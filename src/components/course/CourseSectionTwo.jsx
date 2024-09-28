import React from 'react';
import exampleImage from '../../assets/will_table.webp'; // Reemplaza esta ruta con la ruta de tu imagen

const CourseSectionTwo = () => {
  return (
    <section className="relative h-screen bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 py-12">
        
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={exampleImage} alt="Imagen del curso" className="w-auto h-auto max-w-full shadow-lg rounded-lg" />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
          <h2 className="text-6xl font-extrabold tracking-tight mb-6">
            Curso Coma com os Olhos
          </h2>
          <p className="text-2xl font-light leading-relaxed">
            O guia certo para restaurantes que querem subir a régua acima da média do mercado.
          </p>
          <p className="text-2xl font-light leading-relaxed">
            Pois além do seu produto precisar ser bom, para poder vender acima da média ele precisa parecer ser bom!
          </p>
          <p className="text-2xl font-light leading-relaxed">
            E para isso separei todas as técnicas que utilizo em minha hamburgueria e que servem para todos os nichos, inclusive pizzaria, açaiteria, cafeteria e entre outros nichos gastronômicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseSectionTwo;
