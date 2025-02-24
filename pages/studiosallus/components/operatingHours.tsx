import React from 'react';
import siteData from '../data/siteData.json';

const OperatingHours = () => {
  const { horarios } = siteData;

  return (
    <section className="operating-hours p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Horários de Funcionamento</h2>
      <ul className="space-y-2">
        {Object.entries(horarios).map(([dia, horario]) => (
          <li key={dia} className="flex justify-between items-center">
            <span className="font-medium text-gray-700">{dia}</span>
            <span className="text-gray-500">{horario}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OperatingHours; 