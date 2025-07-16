
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Target, TrendingUp, Users, Building2, Globe } from 'lucide-react';

export const InvestmentSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521974534073', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Investment Opportunity */}
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 mb-6 text-sm px-4 py-2">
            Oportunidade de Investimento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Dados que Transformam o Turismo<br />
            <span className="text-blue-600">em Motor Econômico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Investimento inicial para revolucionar a inteligência turística do Município do Rio de Janeiro
          </p>
        </div>

        {/* Return Projections - Horizontal Design */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-green-600 flex items-center justify-center gap-3 mb-2">
                <Target className="w-8 h-8" />
                Retorno Projetado
              </h3>
              <p className="text-lg text-gray-600">
                Impacto econômico esperado
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">R$ 8.5M</div>
                <div className="text-sm text-gray-600 font-medium">Receita ano 1</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">425%</div>
                <div className="text-sm text-gray-600 font-medium">ROI projetado 3 anos</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12.000+</div>
                <div className="text-sm text-gray-600 font-medium">Empresas impactadas</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">R$ 180M</div>
                <div className="text-sm text-gray-600 font-medium">Valor mercado potencial</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Métricas Chave do Projeto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Crescimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">300%</div>
                <div className="text-sm text-gray-600">ao ano projetado</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">em 12 meses</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">5K+</div>
                <div className="text-sm text-gray-600">parceiras ativas</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Mercado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">15%</div>
                <div className="text-sm text-gray-600">share projetado</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">
                Por que Investir Agora?
              </CardTitle>
              <CardDescription className="text-lg">
                O momento ideal para liderar a transformação digital do turismo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mercado em Expansão</h4>
                      <p className="text-sm text-gray-600">Turismo no RJ cresce 15% ao ano, com demanda crescente por inteligência de dados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Primeira Vantagem</h4>
                      <p className="text-sm text-gray-600">Pioneirismo na aplicação de IA para inteligência turística municipal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Parceria Estratégica</h4>
                      <p className="text-sm text-gray-600">Apoio oficial da Secretaria de Turismo do Município do Rio de Janeiro</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tecnologia Diferenciada</h4>
                      <p className="text-sm text-gray-600">IA conversacional multilíngue específica para turismo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Escalabilidade Nacional</h4>
                      <p className="text-sm text-gray-600">Modelo replicável para outros municípios brasileiros</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">ROI Comprovado</h4>
                      <p className="text-sm text-gray-600">Modelo de negócio testado com projeções conservadoras</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Revolucionar o Turismo do Município?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se à transformação digital que vai posicionar o Rio como referência mundial em inteligência turística
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4"
              onClick={openWhatsApp}
            >
              Investir no Projeto
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4"
              onClick={openWhatsApp}
            >
              Agendar Apresentação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
