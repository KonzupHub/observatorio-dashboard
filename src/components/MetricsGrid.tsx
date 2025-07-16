import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, DollarSign, Clock, Building, Star, Cloud } from 'lucide-react';

const metrics = [
  {
    title: "Chegadas Internacionais",
    value: "148k",
    change: "+12%",
    icon: Plane,
    color: "text-primary"
  },
  {
    title: "Gastos Estimados",
    value: "USD 230 mi",
    change: "+8%",
    icon: DollarSign,
    color: "text-accent"
  },
  {
    title: "Permanência Média",
    value: "5,4 dias",
    change: null,
    icon: Clock,
    color: "text-muted-foreground"
  },
  {
    title: "Ocupação Hoteleira",
    value: "74%",
    change: null,
    icon: Building,
    color: "text-primary"
  },
  {
    title: "Nota Média Reviews",
    value: "4,6/5",
    change: null,
    icon: Star,
    color: "text-accent"
  },
  {
    title: "Clima Médio",
    value: "25°C, úmido",
    change: null,
    icon: Cloud,
    color: "text-muted-foreground"
  }
];

export const MetricsGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Visão Geral
          </h2>
          <p className="text-gray-600">
            Principais indicadores do turismo no Rio de Janeiro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="transition-all duration-200 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  {metric.value}
                </div>
                {metric.change && (
                  <Badge 
                    variant="secondary" 
                    className="mt-2 bg-accent/10 text-accent border-accent/20"
                  >
                    {metric.change}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};