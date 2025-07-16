
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TourismChart } from '@/components/TourismChart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { MapPin, Users, Plane, Building, TrendingUp, Globe, Calendar, DollarSign } from 'lucide-react';

export const AdvancedDataSection = () => {
  // Dados mockup baseados em observatórios reais
  const occupancyData = [
    { month: 'Jan', taxa: 68, precoMedio: 280, RevPAR: 190 },
    { month: 'Fev', taxa: 85, precoMedio: 340, RevPAR: 289 },
    { month: 'Mar', taxa: 72, precoMedio: 310, RevPAR: 223 },
    { month: 'Abr', taxa: 76, precoMedio: 295, RevPAR: 224 },
    { month: 'Mai', taxa: 70, precoMedio: 285, RevPAR: 200 },
    { month: 'Jun', taxa: 82, precoMedio: 315, RevPAR: 258 },
    { month: 'Jul', taxa: 89, precoMedio: 395, RevPAR: 352 },
    { month: 'Ago', taxa: 86, precoMedio: 380, RevPAR: 327 },
    { month: 'Set', taxa: 74, precoMedio: 295, RevPAR: 218 },
    { month: 'Out', taxa: 78, precoMedio: 305, RevPAR: 238 },
    { month: 'Nov', taxa: 81, precoMedio: 325, RevPAR: 263 },
    { month: 'Dez', taxa: 92, precoMedio: 420, RevPAR: 386 }
  ];

  const profileData = [
    { origem: 'São Paulo', percentage: 28, gastoMedio: 1250 },
    { origem: 'Minas Gerais', percentage: 18, gastoMedio: 980 },
    { origem: 'Estados Unidos', percentage: 12, gastoMedio: 2100 },
    { origem: 'Argentina', percentage: 8, gastoMedio: 850 },
    { origem: 'França', percentage: 6, gastoMedio: 1800 },
    { origem: 'Reino Unido', percentage: 5, gastoMedio: 1950 },
    { origem: 'Alemanha', percentage: 4, gastoMedio: 1750 },
    { origem: 'Chile', percentage: 4, gastoMedio: 920 },
    { origem: 'Outros', percentage: 15, gastoMedio: 1150 }
  ];

  const flightData = [
    { rota: 'GIG ⇄ GRU', passageiros: 2340000, crescimento: 8.5 },
    { rota: 'GIG ⇄ BSB', passageiros: 1850000, crescimento: 12.3 },
    { rota: 'GIG ⇄ CGH', passageiros: 1620000, crescimento: 6.7 },
    { rota: 'GIG ⇄ MIA', passageiros: 580000, crescimento: 15.2 },
    { rota: 'GIG ⇄ LIS', passageiros: 420000, crescimento: 22.1 },
    { rota: 'GIG ⇄ EZE', passageiros: 380000, crescimento: -3.2 },
    { rota: 'GIG ⇄ MAD', passageiros: 340000, crescimento: 18.7 },
    { rota: 'GIG ⇄ CDG', passageiros: 320000, crescimento: 14.9 }
  ];

  const economicImpactData = [
    { setor: 'Hotelaria', impacto: 4.2, empregos: 180000 },
    { setor: 'Alimentação', impacto: 3.8, empregos: 250000 },
    { setor: 'Transporte', impacto: 2.9, empregos: 120000 },
    { setor: 'Entretenimento', impacto: 2.1, empregos: 85000 },
    { setor: 'Varejo', impacto: 3.5, empregos: 150000 },
    { setor: 'Serviços', impacto: 1.7, empregos: 62000 }
  ];

  const seasonalityData = [
    { period: 'Carnaval', factor: 3.2, demanda: 'Muito Alta', precoVariacao: '+180%' },
    { period: 'Reveillon', factor: 2.8, demanda: 'Muito Alta', precoVariacao: '+150%' },
    { period: 'Férias Jul', factor: 1.9, demanda: 'Alta', precoVariacao: '+85%' },
    { period: 'Férias Jan', factor: 1.7, demanda: 'Alta', precoVariacao: '+70%' },
    { period: 'Rock in Rio', factor: 2.1, demanda: 'Muito Alta', precoVariacao: '+120%' },
    { period: 'Alta Temp.', factor: 1.4, demanda: 'Média', precoVariacao: '+40%' },
    { period: 'Baixa Temp.', factor: 0.7, demanda: 'Baixa', precoVariacao: '-25%' }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-6 text-sm px-4 py-2">
            Dados Avançados do Observatório
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Inteligência Turística<br />
            <span className="text-blue-600">em Profundidade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dados detalhados baseados nos principais observatórios mundiais: UNWTO, WTTC, ForwardKeys e mais
          </p>
        </div>

        <Tabs defaultValue="ocupacao" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            <TabsTrigger value="ocupacao" className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              Ocupação
            </TabsTrigger>
            <TabsTrigger value="perfil" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="voos" className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              Malha Aérea
            </TabsTrigger>
            <TabsTrigger value="economia" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Economia
            </TabsTrigger>
            <TabsTrigger value="sazonalidade" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Sazonalidade
            </TabsTrigger>
            <TabsTrigger value="tendencias" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Tendências
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ocupacao" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Taxa de Ocupação Hoteleira</CardTitle>
                  <CardDescription>Dados mensais 2024 - Município do RJ</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={occupancyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Taxa de Ocupação']} />
                      <Bar dataKey="taxa" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>RevPAR (Receita por Quarto)</CardTitle>
                  <CardDescription>Revenue per Available Room - R$</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={occupancyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`R$ ${value}`, 'RevPAR']} />
                      <Line type="monotone" dataKey="RevPAR" stroke="#10b981" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600">76.8%</div>
                <div className="text-sm text-gray-600">Taxa Média Anual</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">R$ 325</div>
                <div className="text-sm text-gray-600">Diária Média</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-purple-600">R$ 249</div>
                <div className="text-sm text-gray-600">RevPAR Médio</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-orange-600">+8.3%</div>
                <div className="text-sm text-gray-600">vs 2023</div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="perfil" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Origem dos Turistas</CardTitle>
                  <CardDescription>Distribuição por estado/país de origem</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={profileData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="percentage"
                        label={({ origem, percentage }) => `${origem}: ${percentage}%`}
                      >
                        {profileData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gasto Médio por Origem</CardTitle>
                  <CardDescription>Ticket médio por turista (R$)</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={profileData.slice(0, 6)} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="origem" type="category" width={80} />
                      <Tooltip formatter={(value) => [`R$ ${value}`, 'Gasto Médio']} />
                      <Bar dataKey="gastoMedio" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="voos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Principais Rotas Aéreas</CardTitle>
                <CardDescription>Movimento de passageiros e crescimento anual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {flightData.map((route, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Plane className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold">{route.rota}</span>
                        </div>
                        <Badge variant="outline">
                          {route.passageiros.toLocaleString()} passageiros
                        </Badge>
                      </div>
                      <div className={`text-sm font-semibold ${route.crescimento > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {route.crescimento > 0 ? '+' : ''}{route.crescimento}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="economia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impacto Econômico por Setor</CardTitle>
                <CardDescription>Contribuição em bilhões de reais e empregos gerados</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={economicImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="setor" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="impacto" fill="#3b82f6" name="Impacto (R$ Bi)" />
                    <Bar yAxisId="right" dataKey="empregos" fill="#10b981" name="Empregos (mil)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sazonalidade" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fatores de Sazonalidade</CardTitle>
                <CardDescription>Impacto de eventos e períodos na demanda turística</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seasonalityData.map((period, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="font-semibold text-lg mb-2">{period.period}</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Fator:</span>
                            <span className="font-semibold">{period.factor}x</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Demanda:</span>
                            <Badge variant={period.demanda === 'Muito Alta' ? 'default' : 'secondary'}>
                              {period.demanda}
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Preços:</span>
                            <span className={`font-semibold ${period.precoVariacao.includes('+') ? 'text-red-600' : 'text-green-600'}`}>
                              {period.precoVariacao}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tendencias" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Previsões ForwardKeys</CardTitle>
                  <CardDescription>Tendências baseadas em reservas futuras</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                      <span>Turismo América do Norte</span>
                      <Badge className="bg-green-100 text-green-800">+23% em 2025</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                      <span>Turismo Europa</span>
                      <Badge className="bg-blue-100 text-blue-800">+18% em 2025</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                      <span>Turismo Doméstico</span>
                      <Badge className="bg-orange-100 text-orange-800">+12% em 2025</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                      <span>Turismo de Luxo</span>
                      <Badge className="bg-purple-100 text-purple-800">+31% em 2025</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insights Google Travel</CardTitle>
                  <CardDescription>Tendências de busca e interesse</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border-l-4 border-l-blue-500 bg-blue-50">
                      <div className="font-semibold">Turismo Sustentável</div>
                      <div className="text-sm text-gray-600">+150% em buscas relacionadas</div>
                    </div>
                    <div className="p-3 border-l-4 border-l-green-500 bg-green-50">
                      <div className="font-semibold">Experiências Locais</div>
                      <div className="text-sm text-gray-600">+89% interesse em atividades autênticas</div>
                    </div>
                    <div className="p-3 border-l-4 border-l-purple-500 bg-purple-50">
                      <div className="font-semibold">Viagens Longas</div>
                      <div className="text-sm text-gray-600">+67% em estadias +7 dias</div>
                    </div>
                    <div className="p-3 border-l-4 border-l-orange-500 bg-orange-50">
                      <div className="font-semibold">Turismo de Aventura</div>
                      <div className="text-sm text-gray-600">+45% crescimento esperado</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
