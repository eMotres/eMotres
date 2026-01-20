import React from 'react';

const PropulsionMatrix = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Propulsion Matrix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left">Model</th>
                <th className="py-3 px-6 text-left">Max Thrust (kg)</th>
                <th className="py-3 px-6 text-left">Efficiency (g/W)</th>
                <th className="py-3 px-6 text-left">Weight (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-6">M-100</td>
                <td className="py-3 px-6">15</td>
                <td className="py-3 px-6">12.5</td>
                <td className="py-3 px-6">850</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-6">M-200</td>
                <td className="py-3 px-6">30</td>
                <td className="py-3 px-6">11.8</td>
                <td className="py-3 px-6">1500</td>
              </tr>
              <tr>
                <td className="py-3 px-6">M-300</td>
                <td className="py-3 px-6">50</td>
                <td className="py-3 px-6">10.2</td>
                <td className="py-3 px-6">2800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropulsionMatrix;
