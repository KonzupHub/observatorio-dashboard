import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Bed } from 'lucide-react';

export const CapacityTab = () => {
  const accommodationData = [
    { type: 'Hotéis', beds: 48000, color: 'bg-primary' },
    { type: 'Hostels', beds: 6000, color: 'bg-accent' },
    { type: 'Airbnb', beds: 32000, color: 'bg-blue-500' }
  ];

  const categoryData = [
    { category: 'Hotel 5★', establishments: 38, source: 'Agency360' },
    { category: 'Hotel 4★', establishments: 112, source: 'Agency360' },
    { category: 'Airbnb', establishments: '23k', source: 'Airbnb' }
  ];

  return (
    <section id="oferta-hospedagem" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Oferta & Hospedagem
          </h2>
          <p className="text-gray-600">
            Capacidade e distribuição da oferta hoteleira
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bed Capacity Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" />
                Leitos Disponíveis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accommodationData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.type}</span>
                      <span className="text-sm text-gray-600">
                        {item.beds.toLocaleString()} leitos
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${(item.beds / 86000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Categorias de Hospedagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 pb-2 border-b">
                  <span>Categoria</span>
                  <span>Empreendimentos</span>
                  <span>Fonte</span>
                </div>
                {categoryData.map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 text-sm">
                    <span className="font-medium">{row.category}</span>
                    <span>{row.establishments}</span>
                    <Badge variant="outline" className="text-xs w-fit">
                      {row.source}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};