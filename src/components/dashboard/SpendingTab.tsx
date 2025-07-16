
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export const SpendingTab = () => {
  const spendingCategories = [
    { categoria: 'Hospedagem', valor: 145, cor: '#3b82f6' },
    { categoria: 'Alimentação', valor: 89, cor: '#10b981' },
    { categoria: 'Transporte', valor: 67, cor: '#f59e0b' },
    { categoria: 'Entretenimento', valor: 52, cor: '#ef4444' },
    { categoria: 'Compras', valor: 38, cor: '#8b5cf6' },
    { categoria: 'Outros', valor: 21, cor: '#06b6d4' }
  ];

  const spendingByOrigin = [
    { pais: 'Estados Unidos', gasto_medio: 420, total: 28500000 },
    { pais: 'Argentina', gasto_medio: 285, total: 18200000 },
    { pais: 'França', gasto_medio: 380, total: 14100000 },
    { pais: 'Alemanha', gasto_medio: 395, total: 11800000 },
    { pais: 'Itália', gasto_medio: 355, total: 8900000 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gasto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 18.2Bi</div>
            <p className="text-xs text-muted-foreground">Receita anual</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 2.485</div>
            <p className="text-xs text-muted-foreground">Por visitante</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gasto Diário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 342</div>
            <p className="text-xs text-muted-foreground">Média por dia</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Maior Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42%</div>
            <p className="text-xs text-muted-foreground">Hospedagem</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gastos por Categoria</CardTitle>
            <CardDescription>Distribuição do orçamento turístico</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={spendingCategories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({categoria, valor}) => `${categoria}: R$${valor}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {spendingCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`R$ ${value}`, 'Gasto médio/dia']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gasto Médio por País</CardTitle>
            <CardDescription>Ticket médio por nacionalidade</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={spendingByOrigin}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pais" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'gasto_medio' ? `R$ ${value}` : `R$ ${Number(value).toLocaleString()}`,
                  name === 'gasto_medio' ? 'Gasto médio' : 'Total gasto'
                ]} />
                <Bar dataKey="gasto_medio" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Ranking de Receita por País</CardTitle>
            <CardDescription>Total arrecadado por nacionalidade</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spendingByOrigin.map((item, index) => (
                <div key={item.pais} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-bold text-gray-600 w-6">
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{item.pais}</div>
                      <div className="text-sm text-gray-500">Gasto médio: R$ {item.gasto_medio}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">R$ {(item.total / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-500">Total arrecadado</div>
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
