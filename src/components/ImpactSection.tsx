
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building2, DollarSign, Briefcase, Target } from 'lucide-react';

export const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-6 text-sm px-4 py-2">
            Dinheiro em Movimento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Observatório de Dados do Município:<br />
            <span className="text-yellow-400">Negócios que Concretizam</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cada dado do Observatório gera receita, emprego e investimento. 
            Veja o impacto econômico em tempo real.
          </p>
        </div>

        {/* Economic Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-yellow-400 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Receita Gerada
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-white">R$ 18.2 Bi</div>
              <div className="text-sm text-blue-200">PIB Turístico 2024</div>
              <div className="text-green-400 text-sm mt-2">+22% vs 2023</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Empregos Criados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-white">847K</div>
              <div className="text-sm text-blue-200">Postos de trabalho</div>
              <div className="text-green-400 text-sm mt-2">+15% vs 2023</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Investimentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2 text-white">R$ 4.7 Bi</div>
              <div className="text-sm text-blue-200">Novos projetos</div>
              <div className="text-green-400 text-sm mt-2">+38% vs 2023</div>
            </CardContent>
          </Card>
        </div>

        {/* Who Benefits Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Quem Ganha com o Observatório
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-cyan-400">PMEs & Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Dados gratuitos para decisões</li>
                  <li>• IA que explica tendências</li>
                  <li>• Identificação de nichos</li>
                  <li>• Timing de investimento</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-green-400">Governo & Trade</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Políticas baseadas em dados</li>
                  <li>• ROI de campanhas</li>
                  <li>• Planejamento estratégico</li>
                  <li>• Transparência pública</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-purple-400">Grandes Empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Market intelligence</li>
                  <li>• Análises customizadas</li>
                  <li>• API para sistemas</li>
                  <li>• Consultoria especializada</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-orange-400">Investidores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Due diligence em dados</li>
                  <li>• Avaliação de potencial</li>
                  <li>• Identificação de oportunidades</li>
                  <li>• Mitigação de riscos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-400">Turistas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Melhores experiências</li>
                  <li>• Preços justos</li>
                  <li>• Serviços otimizados</li>
                  <li>• Informações precisas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-lg text-red-400">Mídia & Academia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Fontes confiáveis</li>
                  <li>• Pesquisas aprofundadas</li>
                  <li>• Dados atualizados</li>
                  <li>• Análises prontas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
