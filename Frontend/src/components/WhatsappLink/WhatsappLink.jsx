import { FaWhatsapp } from "react-icons/fa";

const WhatsappLink = ({ telefono }) => {
  const whatsappUrl = `https://wa.me/${telefono}`;

  return (
    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/3">
      <FaWhatsapp className="text-2xl text-amber-900" />
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-700 hover:underline flex items-center" // Estilos y flexbox
      >
        {telefono}
      </a>
    </div>
  );
};

export default WhatsappLink;