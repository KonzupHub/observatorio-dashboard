import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Building2 } from 'lucide-react';

export const ProfileTab = () => {
  const employmentData = [
    { year: '2020', companies: 310 },
    { year: '2021', companies: 420 },
    { year: '2022', companies: 510 },
    { year: '2023', companies: 570 },
    { year: '2024', companies: 640 }
  ];

  return (
    <section id="empregos-empresas" className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Empregos & Empresas
          </h2>
          <p className="text-gray-600">
            Mercado de trabalho e empreendedorismo no turismo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employment Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Vagas Formais no Turismo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  168k
                </div>
                <div className="text-lg text-gray-600 mb-4">
                  Postos de trabalho formais
                </div>
                <Badge variant="outline" className="text-sm">
                  Fonte: CAGED (2024)
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* New Companies Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-accent" />
                Novas Empresas de Turismo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {employmentData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{data.year}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${(data.companies / 640) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-8 text-right">
                        {data.companies}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Badge variant="outline" className="text-sm">
                  Fonte: Jucerja
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};