
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface TourismChartProps {
  title: string;
  data: Array<{
    month: string;
    tourists: number;
    revenue: number;
  }>;
}

export const TourismChart: React.FC<TourismChartProps> = ({ title, data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Dados mensais 2024 - Município do RJ</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value, name) => [
                name === 'tourists' ? `${Number(value).toLocaleString()} turistas` : `R$ ${Number(value).toLocaleString()}M`,
                name === 'tourists' ? 'Turistas' : 'Receita'
              ]}
            />
            <Legend />
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="tourists" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="Turistas"
            />
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Receita (R$ M)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
