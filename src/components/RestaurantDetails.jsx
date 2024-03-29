// RestaurantDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();

  // Simulamos detalles del restaurante
  const restaurante = { id: 1, nombre: 'Restaurante A', categoria: 'Comida Rápida', calificacion: 4.5, detalles: 'Detalles del restaurante...' };
  
  const openMaps= () => {
    window.open('https://www.google.com/maps', '_blank');
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Detalles del Restaurante {id}</h1>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold mb-2">{restaurante.nombre}</h2>
        <p className="text-gray-600">{restaurante.categoria}</p>
        <p className="text-yellow-500">Calificación: {restaurante.calificacion}</p>
        <p className="mt-4">{restaurante.detalles}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" onClick={openMaps}>Ubicación</button>
      </div>
    </div>
  );
};

export default RestaurantDetails;
