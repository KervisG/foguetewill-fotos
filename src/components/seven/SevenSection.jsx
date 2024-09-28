import React from 'react';
import fogueteWillImage from '../../assets/will_foguete_7.webp'; // Reemplaza esta ruta con la imagen de "FOGUETE WILL"

const SevenSection = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-orange-500 text-white"
    >
      {/* Imagen de Foguete Will */}
      <div className="mb-6">
        <img src={fogueteWillImage} alt="Foguete Will" className="w-30 h-auto" />
      </div>

      {/* Texto principal */}
      <h2 className="text-4xl font-bold mb-4">
        Risco zero com a garantia de 7 dias.
      </h2>

      {/* Texto secundario */}
      <p className="text-lg max-w-2xl">
        Durante 7 dias a partir da compra, você poderá consumir todo conteúdo que quiser e interagir com a comunidade.
        Se dentro desse período você se arrepender da compra, <strong>basta pedir o reembolso que devolveremos cada centavo, sem ressentimentos.</strong>
      </p>
    </section>
  );
};

export default SevenSection;
