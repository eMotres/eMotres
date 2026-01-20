import React from 'react';

const PropulsionMatrix = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">Propulsion Matrix</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Thrust (kg)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency (g/W)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight (g)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">M-100</td>
                <td className="px-6 py-4 whitespace-nowrap">15</td>
                <td className="px-6 py-4 whitespace-nowrap">12.5</td>
                <td className="px-6 py-4 whitespace-nowrap">850</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">M-200</td>
                <td className="px-6 py-4 whitespace-nowrap">30</td>
                <td className="px-6 py-4 whitespace-nowrap">11.8</td>
                <td className="px-6 py-4 whitespace-nowrap">1500</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">M-300</td>
                <td className="px-6 py-4 whitespace-nowrap">50</td>
                <td className="px-6 py-4 whitespace-nowrap">10.2</td>
                <td className="px-6 py-4 whitespace-nowrap">2800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-bold">Mega Class (1MW)</td>
                <td className="px-6 py-4 whitespace-nowrap">-</td>
                <td className="px-6 py-4 whitespace-nowrap">-</td>
                <td className="px-6 py-4 whitespace-nowrap">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropulsionMatrix;
