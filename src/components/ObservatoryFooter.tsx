import React from 'react';

export const ObservatoryFooter = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-800">
              <strong>Realização:</strong> Secretaria de Turismo do Município do Rio de Janeiro
            </p>
            <p className="text-sm text-gray-800">
              <strong>Criação:</strong> Konzup
            </p>
          </div>
          
          <div className="text-xs text-gray-600 leading-relaxed">
            <p>
              <strong>Fontes de dados:</strong> ANTT, CLIA, CAGED, Junta Comercial, Nexus, Connect, Behavior, Agency360, Airbnb, Booking, Mastercard, ForwardKeys, PIB Turismo
            </p>
          </div>
          
          <div className="text-xs text-gray-500 mt-4">
            <p>Dados simulados para fins de demonstração | Fontes oficiais e parceiros</p>
          </div>
        </div>
      </div>
    </footer>
  );
};