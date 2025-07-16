
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

export const ProfileTab = () => {
  const ageData = [
    { faixa: '18-25', quantidade: 280000, porcentagem: 28 },
    { faixa: '26-35', quantidade: 350000, porcentagem: 35 },
    { faixa: '36-45', quantidade: 200000, porcentagem: 20 },
    { faixa: '46-55', quantidade: 120000, porcentagem: 12 },
    { faixa: '56+', quantidade: 50000, porcentagem: 5 }
  ];

  const genderData = [
    { genero: 'Feminino', valor: 52, cor: '#ec4899' },
    { genero: 'Masculino', valor: 47, cor: '#3b82f6' },
    { genero: 'Outros', valor: 1, cor: '#10b981' }
  ];

  const educationData = [
    { nivel: 'Superior Completo', porcentagem: 45 },
    { nivel: 'Superior Incompleto', porcentagem: 25 },
    { nivel: 'Ensino Médio', porcentagem: 20 },
    { nivel: 'Pós-graduação', porcentagem: 8 },
    { nivel: 'Outros', porcentagem: 2 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Idade Média</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32 anos</div>
            <p className="text-xs text-muted-foreground">Turistas internacionais</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-pink-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gênero Predominante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52% F</div>
            <p className="text-xs text-muted-foreground">Maioria feminina</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Escolaridade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">Superior completo</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-cyan-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tempo Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.3 dias</div>
            <p className="text-xs text-muted-foreground">Permanência no RJ</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Faixa Etária</CardTitle>
            <CardDescription>Perfil demográfico dos visitantes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="faixa" />
                <YAxis />
                <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} pessoas`, 'Quantidade']} />
                <Bar dataKey="quantidade" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Gênero</CardTitle>
            <CardDescription>Composição dos visitantes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({genero, valor}) => `${genero}: ${valor}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Nível de Escolaridade</CardTitle>
            <CardDescription>Formação educacional dos visitantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {educationData.map((item) => (
                <div key={item.nivel} className="flex items-center justify-between">
                  <span className="font-medium">{item.nivel}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${item.porcentagem}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-10">{item.porcentagem}%</span>
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
