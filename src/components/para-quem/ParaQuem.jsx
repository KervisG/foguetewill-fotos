import React from 'react';
import item1 from '../../assets/Item.webp'; // Imagen de la derecha
import item2 from '../../assets/Item-1.webp'; // Imagen de la derecha
import item3 from '../../assets/Item-2.webp'; // Imagen de la derecha
import item4 from '../../assets/lista-3.webp'; // Imagen de la izquierda

const CourseSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-800 to-orange-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12">
        
        {/* Sección izquierda con texto, imagen y botón */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center space-y-6 mt-6 md:mt-0">
          {/* Texto arriba de la imagen */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Para quem é este Curso?
          </h2>
          
          {/* Imagen a la izquierda */}
          <img src={item4} alt="Imagen izquierda" className="w-full h-auto object-cover mb-6" />

          {/* Botón con efecto hover */}
          <a
            href="https://produtos.foguetewill.com.br/pay/9c33e9d6-5872-4253-addb-0c0c11b1c673" // Reemplaza con tu enlace de compra
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-base md:text-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            PRECISO MELHORAR MEU FATURAMENTO
          </a>
        </div>

        {/* Imágenes a la derecha */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <div className="rounded-lg flex items-center p-4">
            <img src={item1} alt="Imagen 1" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="rounded-lg flex items-center p-4">
            <img src={item2} alt="Imagen 2" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="rounded-lg flex items-center p-4">
            <img src={item3} alt="Imagen 3" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
