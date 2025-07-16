import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp, Users, ShoppingBag } from 'lucide-react';

export const DataVisualization = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Visualizações de Dados
          </h2>
          <p className="text-gray-600">
            Análises detalhadas e insights sobre o turismo no Rio de Janeiro
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mapa Heat-map */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Mapa de Calor - Bairros Mais Visitados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[400px] bg-slate-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">
                  Mapa heat-map do Rio de Janeiro
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Placeholder para visualização de dados geográficos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Linha do tempo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              Chegadas 2023-2025
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[200px] bg-slate-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground text-sm">
                  Gráfico de linha temporal
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 5 países */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Top 5 Países Emissores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { country: "🇦🇷 Argentina", percentage: "28%" },
                { country: "🇺🇸 Estados Unidos", percentage: "22%" },
                { country: "🇫🇷 França", percentage: "15%" },
                { country: "🇩🇪 Alemanha", percentage: "12%" },
                { country: "🇪🇸 Espanha", percentage: "10%" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.country}</span>
                  <span className="text-sm text-muted-foreground">{item.percentage}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top 5 experiências */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-accent" />
              Top 5 Experiências Mais Compradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { name: "Cristo Redentor", bookings: "15.2k" },
                { name: "Pão de Açúcar", bookings: "12.8k" },
                { name: "Praias de Copacabana", bookings: "11.4k" },
                { name: "Santa Teresa", bookings: "9.6k" },
                { name: "Lapa", bookings: "8.2k" }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                  <div className="text-lg font-semibold text-accent">{item.bookings}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.name}</div>
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