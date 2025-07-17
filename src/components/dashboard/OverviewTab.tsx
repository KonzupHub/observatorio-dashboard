import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  DollarSign, 
  Clock, 
  Building2, 
  Star, 
  CloudSun,
  Info,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

export const OverviewTab = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('90');

  const metrics = [
    {
      id: 'chegadas',
      icon: Plane,
      label: 'Chegadas Internacionais',
      values: { '30': 52000, '90': 148000, '365': 625000 },
      delta: +12,
      fonte: 'Nexus / PF',
      format: (val: number) => `${(val / 1000).toFixed(0)}k`
    },
    {
      id: 'gastos',
      icon: DollarSign,
      label: 'Gastos Estimados (USD mi)',
      values: { '30': 72, '90': 230, '365': 980 },
      delta: +8,
      fonte: 'Mastercard',
      format: (val: number) => `${val}mi`
    },
    {
      id: 'permanencia',
      icon: Clock,
      label: 'Permanência Média (dias)',
      values: { '30': 5.1, '90': 5.4, '365': 5.6 },
      delta: 0,
      fonte: 'Pesquisa MTur',
      format: (val: number) => `${val} dias`
    },
    {
      id: 'ocupacao',
      icon: Building2,
      label: 'Ocupação Hoteleira',
      values: { '30': 76, '90': 74, '365': 71 },
      delta: 0,
      fonte: 'Agency360',
      format: (val: number) => `${val}%`
    },
    {
      id: 'avaliacao',
      icon: Star,
      label: 'Avaliação Média (1-5)',
      values: { '30': 4.6, '90': 4.6, '365': 4.6 },
      delta: 0,
      fonte: 'Booking/TripAdvisor',
      format: (val: number) => `${val}/5`
    },
    {
      id: 'clima',
      icon: CloudSun,
      label: 'Clima Médio',
      values: { '30': '26°C úmido', '90': '25°C úmido', '365': '24°C' },
      delta: 0,
      fonte: 'INMET',
      format: (val: any) => val
    }
  ];

  const openModal = (metricId: string) => {
    alert(`Fonte detalhada: ${metricId}`);
  };

  return (
    <section id="painel-executivo" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Painel Executivo
          </h2>
          <p className="text-gray-600">
            Principais indicadores de performance do turismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric) => {
            const IconComponent = metric.icon;
            const currentValue = metric.values[selectedPeriod as keyof typeof metric.values];
            
            return (
              <Card key={metric.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <CardTitle className="text-sm font-medium">
                        {metric.label}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openModal(metric.id)}
                      className="h-6 w-6"
                    >
                      <Info className="h-3 w-3" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">
                      {typeof currentValue === 'number' ? metric.format(currentValue) : currentValue}
                    </div>
                    
                    {metric.delta !== 0 && (
                      <div className="flex items-center gap-1">
                        {metric.delta > 0 ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          metric.delta > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.delta > 0 ? '+' : ''}{metric.delta}%
                        </span>
                      </div>
                    )}
                    
                    <Badge variant="secondary" className="text-xs">
                      {metric.fonte}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};