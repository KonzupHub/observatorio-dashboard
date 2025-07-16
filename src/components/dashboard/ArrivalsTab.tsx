
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Car, Ship, Train, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

export const ArrivalsTab = () => {
  const leadTimeData = [
    { pais: 'Estados Unidos', lead_time_medio: 45, antecedencia_maxima: 180 },
    { pais: 'Argentina', lead_time_medio: 21, antecedencia_maxima: 90 },
    { pais: 'França', lead_time_medio: 62, antecedencia_maxima: 210 },
    { pais: 'Alemanha', lead_time_medio: 58, antecedencia_maxima: 195 },
    { pais: 'Itália', lead_time_medio: 52, antecedencia_maxima: 175 }
  ];

  const leadTimeDistribution = [
    { faixa: '0-7 dias', quantidade: 8, cor: '#ef4444' },
    { faixa: '8-30 dias', quantidade: 25, cor: '#f59e0b' },
    { faixa: '31-60 dias', quantidade: 35, cor: '#10b981' },
    { faixa: '61-90 dias', quantidade: 22, cor: '#3b82f6' },
    { faixa: '90+ dias', quantidade: 10, cor: '#8b5cf6' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Chegadas Aéreas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.23M</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Car className="w-4 h-4" />
              Chegadas Rodoviárias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">252K</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Ship className="w-4 h-4" />
              Chegadas Marítimas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65K</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Train className="w-4 h-4" />
              Chegadas Ferroviárias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5K</div>
            <p className="text-xs text-muted-foreground">Jan-Jun 2024</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Lead Time Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 dias</div>
            <p className="text-xs text-muted-foreground">Antecedência média</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Lead Time por País de Origem</CardTitle>
            <CardDescription>Antecedência média de reservas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pais" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} dias`, 'Lead Time']} />
                <Bar dataKey="lead_time_medio" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Antecedência</CardTitle>
            <CardDescription>Quando os turistas fazem reservas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadTimeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({faixa, quantidade}) => `${faixa}: ${quantidade}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="quantidade"
                >
                  {leadTimeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chegadas por Modal de Transporte</CardTitle>
            <CardDescription>Distribuição mensal por tipo de transporte</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { modal: 'Aéreo', total: 1230000 },
                { modal: 'Rodoviário', total: 252000 },
                { modal: 'Marítimo', total: 65000 },
                { modal: 'Ferroviário', total: 12500 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="modal" />
                <YAxis />
                <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} passageiros`, 'Total']} />
                <Bar dataKey="total" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sazonalidade das Chegadas</CardTitle>
            <CardDescription>Variação mensal por modal</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { mes: 'Jan', aereo: 180000, rodoviario: 45000, maritimo: 12000 },
                { mes: 'Fev', aereo: 220000, rodoviario: 52000, maritimo: 15000 },
                { mes: 'Mar', aereo: 160000, rodoviario: 38000, maritimo: 8000 },
                { mes: 'Abr', aereo: 140000, rodoviario: 42000, maritimo: 10000 },
                { mes: 'Mai', aereo: 120000, rodoviario: 35000, maritimo: 9000 },
                { mes: 'Jun', aereo: 110000, rodoviario: 40000, maritimo: 11000 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aereo" stroke="#3b82f6" name="Aéreo" />
                <Line type="monotone" dataKey="rodoviario" stroke="#10b981" name="Rodoviário" />
                <Line type="monotone" dataKey="maritimo" stroke="#f59e0b" name="Marítimo" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
