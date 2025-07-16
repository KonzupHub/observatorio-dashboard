
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Globe, Users, Building2 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

export const CapacityTab = () => {
  const flightCapacityData = [
    { mes: 'Jan', voos_nacionais: 1250, voos_internacionais: 420, assentos_nacionais: 187500, assentos_internacionais: 126000 },
    { mes: 'Fev', voos_nacionais: 1380, voos_internacionais: 580, assentos_nacionais: 207000, assentos_internacionais: 174000 },
    { mes: 'Mar', voos_nacionais: 1180, voos_internacionais: 380, assentos_nacionais: 177000, assentos_internacionais: 114000 },
    { mes: 'Abr', voos_nacionais: 1050, voos_internacionais: 320, assentos_nacionais: 157500, assentos_internacionais: 96000 },
    { mes: 'Mai', voos_nacionais: 980, voos_internacionais: 280, assentos_nacionais: 147000, assentos_internacionais: 84000 },
    { mes: 'Jun', voos_nacionais: 1020, voos_internacionais: 290, assentos_nacionais: 153000, assentos_internacionais: 87000 }
  ];

  const airlineCapacity = [
    { companhia: 'GOL', participacao_nacional: 35, participacao_internacional: 15, assentos_totais: 89000 },
    { companhia: 'LATAM', participacao_nacional: 28, participacao_internacional: 45, assentos_totais: 95000 },
    { companhia: 'Azul', participacao_nacional: 25, participacao_internacional: 8, assentos_totais: 52000 },
    { companhia: 'American Airlines', participacao_nacional: 0, participacao_internacional: 12, assentos_totais: 18000 },
    { companhia: 'Air France', participacao_nacional: 0, participacao_internacional: 8, assentos_totais: 12000 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Voos Nacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8K</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Voos Internacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3K</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Assentos Nacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.03M</div>
            <p className="text-xs text-muted-foreground">Capacidade total</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Assentos Internacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">681K</div>
            <p className="text-xs text-muted-foreground">Capacidade total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução da Capacidade</CardTitle>
            <CardDescription>Assentos disponíveis por mês</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={flightCapacityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  `${Number(value).toLocaleString()} assentos`,
                  name === 'assentos_nacionais' ? 'Nacionais' : 'Internacionais'
                ]} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="assentos_nacionais" 
                  stackId="1"
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.6}
                  name="Nacionais"
                />
                <Area 
                  type="monotone" 
                  dataKey="assentos_internacionais" 
                  stackId="1"
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.6}
                  name="Internacionais"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Número de Voos por Mês</CardTitle>
            <CardDescription>Operações aéreas no Rio</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={flightCapacityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="voos_nacionais" fill="#10b981" name="Nacionais" />
                <Bar dataKey="voos_internacionais" fill="#f59e0b" name="Internacionais" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Participação por Companhia Aérea</CardTitle>
            <CardDescription>Market share da capacidade de assentos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {airlineCapacity.map((item, index) => (
                <div key={item.companhia} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold text-gray-600 w-6">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{item.companhia}</div>
                      <div className="text-sm text-gray-500">
                        Nacional: {item.participacao_nacional}% | Internacional: {item.participacao_internacional}%
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{(item.assentos_totais / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-500">assentos/mês</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
