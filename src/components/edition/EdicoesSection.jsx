import React from 'react';
import phoneImage from '../../assets/hamburguesa_cell.webp'; // Reemplaza esta ruta con la ruta de tu imagen

const EdicoesSection = () => {
  return (
    <section className="relative bg-black text-white py-12 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 h-auto md:h-screen">
        
        {/* Texto a la izquierda en pantallas grandes, abajo en pantallas pequeñas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-6 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6">
            Edições via Celular
          </h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Você vai concluir este curso sabendo explorar as melhores ferramentas do mercado, fazendo edições em minutos.
          </p>
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            De forma totalmente intuitiva e objetiva, despertando desejo em quem vê digitalmente seu produto.
          </p>
        </div>

        {/* Imágenes a la derecha en pantallas grandes, arriba en pantallas pequeñas */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <img src={phoneImage} alt="Imagen de edição em celular" className="w-full max-w-xs md:max-w-md h-auto shadow-lg rounded-lg" />
        </div>

      </div>
    </section>
  );
};

export default EdicoesSection;
