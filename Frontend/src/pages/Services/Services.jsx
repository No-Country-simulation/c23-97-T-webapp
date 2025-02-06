import { FaCheckCircle, FaCogs, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import React from 'react'
import Container from "../../components/Container";

export const Services = () => {
  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">Nuestros Servicios</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-10">
        Descubre nuestros servicios diseñados para potenciar tu negocio con la mejor tecnología QR.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {/* Servicio 1 */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaCogs className="text-4xl text-amber-900 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Integraciones Personalizadas</h2>
          <p className="text-gray-600 text-center">
            Conectamos tus sistemas con nuestra plataforma QR de manera fluida.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaShieldAlt className="text-4xl text-amber-900 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Seguridad Avanzada</h2>
          <p className="text-gray-600 text-center">
            Protegemos tus datos con los más altos estándares de seguridad.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <FaMobileAlt className="text-4xl text-amber-900 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Optimización Móvil</h2>
          <p className="text-gray-600 text-center">
            Diseño responsivo para una experiencia perfecta en cualquier dispositivo.
          </p>
        </div>
      </div>
    </div>
    {/*<div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-2xl font-bold text-black">Servicios</h1>
    </div>
    */}
    </Container>
  )
}

export default Services;