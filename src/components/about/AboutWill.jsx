import React from "react";
import ifoodLogo from "../../assets/ifood.png"; // Ruta correcta
import financialImage from "../../assets/bg_ifood.png"; // Ruta correcta
import imgwilldespois from "../../assets/antes-e-depois-647x1024.png"; // Imagen de Will antes y después

function QuemEWill() {
  return (
    <div className="bg-black text-white p-8 md:p-12 text-left">
      {/* Contenedor principal */}
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row gap-12">
        {/* Texto e imágenes debajo en móviles */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-none">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
            QUEM É O WILL?
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-300">
            William Flores começou a empreender com delivery aos 17 anos de
            idade, com uma operação bem simples nos fundos de sua casa e após 3
            anos conseguiu fazer com que a sua hamburgueria fosse a maior em
            volume de vendas na sua região dentro do iFood, se tornando Expert
            em Delivery e gestão de restaurantes.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-300">
            Atualmente William possui duas unidades: uma em Cajuru e outra no
            Batel em Curitiba.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-300">
            Will também influencia através de seus conteúdos nas redes sociais
            outros empreendedores com diversos métodos para alavancar
            restaurantes.
          </p>

          {/* Imágenes de iFood y finanzas (una debajo de la otra) */}
          <div className="flex flex-col gap-4 mb-8 items-center md:items-start">
            <img
              src={ifoodLogo}
              alt="iFood Logo"
              className="w-72 rounded-lg shadow-md md:w-80"
            />
            <img
              src={financialImage}
              alt="Informações financeiras"
              className="w-72 rounded-lg shadow-md md:w-80"
            />
          </div>
        </div>

        {/* Imagen de Will antes y después encima del texto en móviles */}
        <div className="flex-1 flex justify-center order-2 md:order-none mb-8 md:mb-0">
          <img
            src={imgwilldespois}
            alt="Antes e Depois de Will"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default QuemEWill;
