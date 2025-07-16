
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Building2, Globe, MapPin } from 'lucide-react';
import { TourismChart } from './TourismChart';

export const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Turistas Internacionais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1M</div>
            <p className="text-xs text-muted-foreground">
              +15% vs 2023
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Receita Turística
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 18.2Bi</div>
            <p className="text-xs text-muted-foreground">
              +22% vs 2023
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Ocupação Hoteleira
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.4%</div>
            <p className="text-xs text-muted-foreground">
              Média anual
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Gasto Médio/Dia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 342</div>
            <p className="text-xs text-muted-foreground">
              Por turista
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TourismChart 
          title="Taxa de Ocupação Hoteleira"
          data={[
            { month: 'Jan', tourists: 180000, revenue: 1200 },
            { month: 'Fev', tourists: 220000, revenue: 1400 },
            { month: 'Mar', tourists: 160000, revenue: 1100 },
            { month: 'Abr', tourists: 140000, revenue: 950 },
            { month: 'Mai', tourists: 120000, revenue: 850 },
            { month: 'Jun', tourists: 110000, revenue: 800 },
            { month: 'Jul', tourists: 190000, revenue: 1300 },
            { month: 'Ago', tourists: 170000, revenue: 1150 },
            { month: 'Set', tourists: 130000, revenue: 900 },
            { month: 'Out', tourists: 150000, revenue: 1000 },
            { month: 'Nov', tourists: 200000, revenue: 1350 },
            { month: 'Dez', tourists: 250000, revenue: 1600 }
          ]}
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Top 5 Países de Origem
            </CardTitle>
            <CardDescription>Turistas internacionais em 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { country: 'Estados Unidos', percentage: 28.4, flag: '🇺🇸' },
                { country: 'Argentina', percentage: 21.7, flag: '🇦🇷' },
                { country: 'França', percentage: 12.3, flag: '🇫🇷' },
                { country: 'Alemanha', percentage: 9.8, flag: '🇩🇪' },
                { country: 'Itália', percentage: 8.1, flag: '🇮🇹' }
              ].map((item) => (
                <div key={item.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.flag}</span>
                    <span className="font-medium">{item.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{item.percentage}%</span>
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
