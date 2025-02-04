import './MapaLink.css'; // Importa el archivo CSS

const MapaLink = ({ lat, lng, direccion }) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
  
    return (
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mapa-link">
        {direccion}
      </a>
    );
  };

  export default MapaLink;
