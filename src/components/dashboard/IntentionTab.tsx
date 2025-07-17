import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Anchor, TrendingUp } from 'lucide-react';

declare global {
  interface Window {
    L: any;
  }
}

export const IntentionTab = () => {
  const cruiseData = [
    { year: '2019', passengers: 110 },
    { year: '2022', passengers: 78 },
    { year: '2023', passengers: 95 },
    { year: '2024', passengers: 123 }
  ];

  useEffect(() => {
    const initMap = async () => {
      // Wait for DOM to be ready and Leaflet to be loaded
      if (typeof window !== 'undefined' && window.L && document.getElementById('map-heat')) {
        try {
          const response = await fetch('/src/assets/heat_rio.json');
          if (!response.ok) {
            console.error('Failed to load heat data');
            return;
          }
          
          const heatData = await response.json();
          
          // Initialize map
          const map = window.L.map('map-heat').setView([-22.95, -43.2], 12);
          
          // Add tile layer
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);
          
          // Add heat layer if heatLayer is available
          if (window.L.heatLayer) {
            window.L.heatLayer(heatData, { 
              radius: 25,
              blur: 15,
              maxZoom: 17
            }).addTo(map);
          }
        } catch (error) {
          console.error('Error initializing map:', error);
        }
      }
    };

    // Add a small delay to ensure all scripts are loaded
    const timer = setTimeout(initMap, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="mapas-mobilidade" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mapas & Mobilidade
          </h2>
          <p className="text-gray-600">
            Análise geográfica e fluxos de mobilidade turística
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Heat Map */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Mapa de Calor - Regiões Mais Visitadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                id="map-heat" 
                className="w-full h-[420px] bg-slate-100 rounded-lg"
                style={{ minHeight: '420px' }}
              />
            </CardContent>
          </Card>

          {/* Cruise Flow */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Anchor className="h-5 w-5 text-primary" />
                Fluxo Marítimo de Cruzeiros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cruiseData.map((data, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {data.passengers}k
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {data.year}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      mil passageiros
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t text-center">
                <Badge variant="outline" className="text-sm">
                  Fonte: CLIA
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};