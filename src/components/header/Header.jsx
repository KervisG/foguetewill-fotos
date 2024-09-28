import React from "react";
import img from "../../assets/willlogo_footer.png";
import bgImg from "../../assets/bgwill.jpg";

const Header = () => {
  return (
    <header
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }} // Aplicamos la imagen como fondo
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Imagen de FOGUETE WILL */}
        <img src={img} alt="Foguete Will" className="mb-4" />

        {/* Texto principal */}
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
          COMA COM <span className="text-orange-500">OS OLHOS!</span>
        </h2>

        {/* Descripción con salto de línea */}
        <p className="text-white text-lg md:text-xl font-medium mb-6">
          Aprenda a tirar{" "}
          <span className="text-green-500">fotos de excelente qualidade</span>{" "}
          com seu celular,
          <br />
          podendo subir o <span className="text-green-500">
            faturamento
          </span>{" "}
          atual de seu restaurante para mais de{" "}
          <span className="text-green-500">R$ 100.000,00</span> com técnicas
          visuais de persuasão.
        </p>

        {/* Botón */}
        <a
          href="https://produtos.foguetewill.com.br/pay/9c33e9d6-5872-4253-addb-0c0c11b1c673" // Reemplaza con tu enlace de compra
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-full mb-4"
        >
          QUERO GARANTIR MINHA VAGA
        </a>

        {/* Precio y oferta */}
        <p className="text-white text-lg md:text-xl font-medium">
          APROVEITE! DE{" "}
          <span className="line-through text-red-500">R$ 497,00</span> POR{" "}
          <span className="text-green-500">R$ 147,00</span> POR TEMPO LIMITADO
        </p>
      </div>
    </header>
  );
};

export default Header;
