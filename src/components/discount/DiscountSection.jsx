import React from "react";
import visaImage from "../../assets/cards.webp"; // Reemplaza esta ruta con la ruta de tu imagen de tarjetas
import fogueteWillImage from "../../assets/willlogo_footer.png"; // Reemplaza esta ruta con la imagen de "FOGUETE WILL"
import backgroundImage from "../../assets/bgwill.jpg"; // Reemplaza esta ruta con tu imagen de fondo

const DiscountSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12 md:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Imagen de fondo
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-auto px-4">
        {/* Caja de contenido */}
        <div className="bg-black bg-opacity-70 p-6 md:p-12 rounded-lg shadow-lg max-w-full sm:max-w-sm md:max-w-lg text-center relative">
          {/* Imagen de Foguete Will */}
          <div className="mb-4 md:mb-6">
            <img
              src={fogueteWillImage}
              alt="FOGUETE WILL"
              className="w-auto h-12 sm:h-16 md:h-24 mx-auto"
            />
          </div>

          {/* Descuento y detalles */}
          <div className="bg-orange-500 text-white text-sm sm:text-base md:text-lg font-semibold py-2 px-4 rounded-md mb-4 md:mb-6">
            R$ 350 DE DESCONTO
          </div>
          <p className="text-sm sm:text-base md:text-lg text-white">
            De <span className="line-through text-red-500">R$ 497</span> por
            apenas
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-500 my-2">
            12x de R$ 15,10
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white mb-4 md:mb-6">
            ou R$ 147,00 à vista
          </p>

          {/* Enlace de compra */}
          <a
            href="https://produtos.foguetewill.com.br/pay/9c33e9d6-5872-4253-addb-0c0c11b1c673" // Reemplaza con tu enlace de compra
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-lg sm:rounded-full text-xs sm:text-sm md:text-lg transition duration-300 ease-in-out hover:scale-155 w-auto sm:w-full max-w-full whitespace-nowrap"
          >
            PRECISO MELHORAR MEU FATURAMENTO
          </a>

          {/* Imagen de tarjetas */}
          <div className="mt-4 md:mt-6">
            <img
              src={visaImage}
              alt="Métodos de pago"
              className="w-20 sm:w-24 md:w-32 h-auto mx-auto"
            />
          </div>

          {/* Texto final */}
          <p className="text-white text-xs sm:text-sm md:text-base mt-4">
            Compra 100% segura! Receba seu acesso imediatamente após confirmação
            do pagamento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
