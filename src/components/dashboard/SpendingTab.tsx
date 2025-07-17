import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp } from 'lucide-react';

export const SpendingTab = () => {
  const spendingData = [
    { year: '2023', amount: 92 },
    { year: '2024', amount: 98 },
    { year: '2025', amount: 104 }
  ];

  return (
    <section id="desempenho-economico" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Desempenho Econômico
          </h2>
          <p className="text-gray-600">
            Análise do impacto econômico do turismo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Spending Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Gasto Médio Diário (USD)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {spendingData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">{data.year}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-accent">
                        ${data.amount}
                      </span>
                      <span className="text-sm text-gray-600">USD/dia</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* PIB Tourism */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                PIB Turismo Municipal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  R$ 13,6 bi
                </div>
                <div className="text-lg text-gray-600 mb-4">
                  Ano base: 2024
                </div>
                <Badge variant="outline" className="text-sm">
                  Fonte: IBGE
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};