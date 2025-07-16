
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

export const HeatMapCard = () => {
  const hotspots = [
    { name: 'Cristo Redentor', intensity: 95, visitors: '2.8M/ano' },
    { name: 'Copacabana', intensity: 89, visitors: '15M/ano' },
    { name: 'Pão de Açúcar', intensity: 87, visitors: '1.2M/ano' },
    { name: 'Santa Teresa', intensity: 72, visitors: '800K/ano' },
    { name: 'Lapa', intensity: 68, visitors: '1.5M/ano' },
    { name: 'Ipanema', intensity: 85, visitors: '12M/ano' },
    { name: 'Centro Histórico', intensity: 65, visitors: '600K/ano' },
    { name: 'Barra da Tijuca', intensity: 58, visitors: '3.2M/ano' }
  ];

  const getIntensityColor = (intensity: number) => {
    if (intensity >= 90) return 'bg-red-500';
    if (intensity >= 80) return 'bg-orange-500';
    if (intensity >= 70) return 'bg-yellow-500';
    if (intensity >= 60) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Mapa de Calor - Hotspots Turísticos
          </CardTitle>
          <CardDescription>Intensidade de visitação por região</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Simplified visual representation of Rio's map */}
          <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6 h-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Mapa Interativo do Rio de Janeiro</p>
                <p className="text-sm">Hotspots turísticos em tempo real</p>
              </div>
            </div>
            
            {/* Heat spots overlay */}
            <div className="absolute top-4 left-8">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs ml-2">Cristo</span>
            </div>
            <div className="absolute bottom-12 left-12">
              <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs ml-2">Copacabana</span>
            </div>
            <div className="absolute bottom-16 right-16">
              <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-xs ml-2">Ipanema</span>
            </div>
            <div className="absolute top-16 right-12">
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs ml-2">Pão de Açúcar</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ranking de Intensidade</CardTitle>
          <CardDescription>Visitação por atração turística</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hotspots.map((spot, index) => (
              <div key={spot.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="text-lg font-bold text-gray-600 w-6">
                    #{index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{spot.name}</div>
                    <div className="text-sm text-gray-500">{spot.visitors}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${getIntensityColor(spot.intensity)} h-2 rounded-full`}
                      style={{ width: `${spot.intensity}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium w-10">{spot.intensity}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
