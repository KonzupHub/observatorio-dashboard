import React from 'react';

export const ObservatoryFooter = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Realização: Secretaria de Turismo do Município do Rio de Janeiro
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Criação: Konzup
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Fontes de dados:
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              ANTT • CLIA • CAGED • Junta Comercial • Nexus • Connect • Behavior • 
              Agency360 • Airbnb • Booking • Mastercard • ForwardKeys • PIB Turismo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};