import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users } from 'lucide-react';

export const ArrivalsTab = () => {
  const timelineData = [
    { month: 'Jan 2023', arrivals: 36000 },
    { month: 'Feb 2023', arrivals: 38000 },
    { month: 'Mar 2023', arrivals: 41000 },
    { month: 'Apr 2023', arrivals: 45000 },
    { month: 'May 2023', arrivals: 48000 },
    { month: 'Jun 2023', arrivals: 50000 },
    { month: 'Jul 2023', arrivals: 52000 },
    { month: 'Aug 2023', arrivals: 55000 },
    { month: 'Sep 2023', arrivals: 58000 },
    { month: 'Oct 2023', arrivals: 60000 },
    { month: 'Nov 2023', arrivals: 61000 },
    { month: 'Dec 2023', arrivals: 64000 },
    { month: 'Jan 2024', arrivals: 67000 },
    { month: 'Feb 2024', arrivals: 70000 },
    { month: 'Mar 2024', arrivals: 73000 },
    { month: 'Apr 2024', arrivals: 75000 },
    { month: 'May 2024', arrivals: 78000 },
    { month: 'Jun 2024', arrivals: 80000 },
    { month: 'Jul 2024', arrivals: 83000 },
    { month: 'Aug 2024', arrivals: 86000 },
    { month: 'Sep 2024', arrivals: 88000 },
    { month: 'Oct 2024', arrivals: 90000 },
    { month: 'Nov 2024', arrivals: 92000 },
    { month: 'Dec 2024', arrivals: 94000 },
    { month: 'Jun 2025', arrivals: 95000 }
  ];

  const countryData = [
    { country: 'Argentina', flag: '🇦🇷', percentage: 28 },
    { country: 'EUA', flag: '🇺🇸', percentage: 22 },
    { country: 'França', flag: '🇫🇷', percentage: 15 },
    { country: 'Alemanha', flag: '🇩🇪', percentage: 12 },
    { country: 'Espanha', flag: '🇪🇸', percentage: 10 }
  ];

  return (
    <section id="fluxo-turistico" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Fluxo Turístico
          </h2>
          <p className="text-gray-600">
            Análise temporal de chegadas e origem dos visitantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Evolução de Chegadas (2023-2025)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[300px] bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Gráfico de linha temporal - Chegadas Internacionais
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Crescimento constante de 36k (Jan 2023) para 95k (Jun 2025)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Country Donut Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Top 5 Países Emissores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countryData.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{country.flag}</span>
                      <span className="font-medium">{country.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${country.percentage * 3}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-8 text-right">
                        {country.percentage}%
                      </span>
                    </div>
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