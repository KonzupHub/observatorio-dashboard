import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    L: any;
  }
}

export const HeatMapCard = () => {
  useEffect(() => {
    const initMap = async () => {
      // Wait for DOM to be ready and Leaflet to be loaded
      if (typeof window !== 'undefined' && window.L && document.getElementById('map-heat')) {
        try {
          const response = await fetch('/assets/heat_rio.json');
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
  );
};