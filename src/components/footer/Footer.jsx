import React, { useState } from 'react';
import WhatsAppIcon from '../../assets/whatssap_footer.png'; // Actualiza con la ruta correcta
import EmailIcon from '../../assets/gmail_footer.png'; // Actualiza con la ruta correcta
import FooterLogo from '../../assets/willlogo_footer.png'; // Actualiza con la ruta correcta

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Quando e onde vai chegar meu acesso?',
      answer: `Chegará via e-mail para nosso portal exclusivo onde as aulas estarão te esperando.`,
    },
    {
      question: 'Por quanto tempo dura meu acesso?',
      answer: `Seu acesso será de um ano.`,
    },
    {
      question: 'Posso fazer o curso pelo celular?',
      answer: `Mas com toda certeza pode assistir as aulas pelo celular!`,
    },
    {
      question: 'E se eu comprar e achar que não é pra mim?',
      answer: `Nosso suporte estará à disposição para entender seu atual momento.`,
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      {/* Línea divisoria */}
      <div className="w-full h-px bg-gray-900 mb-8"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around gap-10">
        {/* Sección de preguntas frecuentes */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-4">Ficou com alguma dúvida?</h3>
          <p className="text-lg text-gray-400 mb-6">
            Confira as respostas para as perguntas frequentes ou entre em contato conosco:
          </p>

          {/* Opciones de contacto */}
          <div className="space-y-6">
            <a
              href="https://wa.me/5541999225894?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Operacao%20Sem%20Limites."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <img src={WhatsAppIcon} alt="WhatsApp" className="w-10 mr-4" />
              <div>
                <h4 className="text-lg font-bold">ATENDIMENTO POR WHATSAPP</h4>
                <p className="text-sm text-gray-400">Número: (41) 99922-5894</p>
              </div>
            </a>

            <a
              href="mailto:contato@foguetewill.com.br?subject=Assunto do Email&body=Olá, gostaria de saber mais sobre a mentoria."
              className="flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <img src={EmailIcon} alt="E-mail" className="w-10 mr-4" />
              <div>
                <h4 className="text-lg font-bold">ATENDIMENTO POR E-MAIL</h4>
                <p className="text-sm text-gray-400">contato@foguetewill.com.br</p>
              </div>
            </a>
          </div>
        </div>

        {/* Preguntas frecuentes con toggle y despliegue suave */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-2 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between">
                  {faq.question}
                  <span
                    className={`text-orange-500 transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="mt-2 text-sm text-gray-400 bg-gray-800 p-3 rounded-md">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Imagen en lugar del texto */}
      <div className="pt-10 border-t border-gray-700 text-center mt-10">
        <img src={FooterLogo} alt="Foguete Will Logo" className="mx-auto w-40 mb-4" />
        <p className="text-gray-400 text-sm">
          Copyright © 2024 Foguete do Will. Todos os direitos reservados.
          <br />
          <a href="#" className="text-white underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
