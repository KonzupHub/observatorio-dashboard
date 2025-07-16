
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Target, Zap } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const IntentionTab = () => {
  const searchVolumeData = [
    { mes: 'Jul 24', buscas: 145000, crescimento: 15 },
    { mes: 'Ago 24', buscas: 162000, crescimento: 12 },
    { mes: 'Set 24', buscas: 138000, crescimento: -8 },
    { mes: 'Out 24', buscas: 175000, crescimento: 27 },
    { mes: 'Nov 24', buscas: 198000, crescimento: 13 },
    { mes: 'Dez 24', buscas: 285000, crescimento: 44 },
    { mes: 'Jan 25', buscas: 420000, crescimento: 47 },
    { mes: 'Fev 25', buscas: 380000, crescimento: 32 }
  ];

  const topSearchOrigins = [
    { pais: 'Estados Unidos', buscas_futuras: 85000, crescimento: 28, flag: '🇺🇸' },
    { pais: 'Argentina', buscas_futuras: 72000, crescimento: 15, flag: '🇦🇷' },
    { pais: 'França', buscas_futuras: 45000, crescimento: 35, flag: '🇫🇷' },
    { pais: 'Reino Unido', buscas_futuras: 38000, crescimento: 42, flag: '🇬🇧' },
    { pais: 'Alemanha', buscas_futuras: 34000, crescimento: 18, flag: '🇩🇪' }
  ];

  const popularDates = [
    { evento: 'Carnaval 2025', periodo: 'Fev 28 - Mar 5', buscas: 125000, interesse: 95 },
    { evento: 'Rock in Rio', periodo: 'Set 13-22', buscas: 89000, interesse: 78 },
    { evento: 'Réveillon Copacabana', periodo: 'Dez 29 - Jan 2', buscas: 156000, interesse: 88 },
    { evento: 'Aniversário Rio', periodo: 'Mar 1', buscas: 23000, interesse: 45 },
    { evento: 'Temporada Verão', periodo: 'Dez-Mar', buscas: 234000, interesse: 82 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Search className="w-4 h-4" />
              Buscas Totais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1M</div>
            <p className="text-xs text-muted-foreground">Últimos 8 meses</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Crescimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+28%</div>
            <p className="text-xs text-muted-foreground">vs mesmo período 2023</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4" />
              Pico de Interesse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jan 25</div>
            <p className="text-xs text-muted-foreground">420K buscas</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pink-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Conversão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4%</div>
            <p className="text-xs text-muted-foreground">Busca → Reserva</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Volume de Buscas de Voos</CardTitle>
            <CardDescription>Evolução do interesse ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={searchVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} buscas`, 'Volume']} />
                <Area type="monotone" dataKey="buscas" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Origens - Próximos 6 Meses</CardTitle>
            <CardDescription>Países com mais interesse futuro</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topSearchOrigins.map((item, index) => (
                <div key={item.pais} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.flag}</span>
                    <div>
                      <div className="font-medium">{item.pais}</div>
                      <div className="text-sm text-green-600">+{item.crescimento}% vs período anterior</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-cyan-600">{(item.buscas_futuras / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-gray-500">buscas</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Datas Mais Procuradas</CardTitle>
            <CardDescription>Eventos e períodos de maior interesse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularDates.map((item) => (
                <div key={item.evento} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{item.evento}</h4>
                    <div className="text-sm font-medium text-blue-600">{item.interesse}%</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{item.periodo}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{(item.buscas / 1000).toFixed(0)}K buscas</span>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${item.interesse}%` }}
                      ></div>
                    </div>
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
