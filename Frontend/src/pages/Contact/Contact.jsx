import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import React from 'react'
import Container from "../../components/Container";
import MapaLink from "../../components/Mapa/MapaLink";
import WhatsappLink from "../../components/WhatsappLink/WhatsappLink";

export const Contact = () => {
  return (
    <Container>
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">Contacto</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-10">
        ¿Tienes preguntas? Contáctanos y te responderemos a la brevedad.
      </p>
        {/* Información de contacto */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full max-w-3xl mb-10">
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/3">
            <span className="text-2xl text-amber-900 flex items-center"> {/* Envuelve el icono en un span */}
              <FaEnvelope /> 
            </span>
            <a href="mailto:contacto@qrsharepro.com" className="text-gray-700 hover:underline flex items-center">
              contact@qrshpr.com
            </a>
          </div>
          {/*<div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/3">
            <span className="text-2xl text-amber-900 flex items-center">
              <FaPhone />
            </span>
            <a href="tel:+541112345678" className="text-gray-700 hover:underline flex items-center">
              +54 11 1234-5678
            </a>
          </div>*/}
          <WhatsappLink telefono="541112345678" />
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/3">
            <FaMapMarkerAlt className="text-2xl text-amber-900" />
            <MapaLink 
              lat={-34.603723} // Latitud de Buenos Aires
              lng={-58.381592} // Longitud de Buenos Aires
              direccion="Buenos Aires, Argentina" 
            />
          </div>
        </div>
      {/* Formulario de contacto */}
      <form className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <label className="block text-gray-700 font-semibold">Nombre</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
          placeholder="Tu nombre"
          required
        />

        <label className="block text-gray-700 font-semibold">Correo Electrónico</label>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
          placeholder="tuemail@correo.com"
          required
        />

        <label className="block text-gray-700 font-semibold">Mensaje</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mt-2 mb-4"
          rows="4"
          placeholder="Escribe tu mensaje aquí..."
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-700"
        >
          Enviar Mensaje
        </button>
      </form>      
    </div>   
    {/*<div className="flex flex-col min-h-screen">
    <div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-2xl font-bold text-black">Contacto</h1>
    </div>
    */}
    </Container>
  )
}

export default Contact;