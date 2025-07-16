
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Bot, User, Globe } from 'lucide-react';

export const AISection = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: '👋 Olá! Sou o BossaBot, seu assistente de IA especializado em turismo do Município do Rio de Janeiro. Pergunte qualquer coisa sobre turismo no nosso município - posso responder em português, inglês ou espanhol!'
    }
  ]);

  const exampleQuestions = [
    'Qual bairro do Rio mais cresce no turismo europeu?',
    'Como captar mais turistas americanos para o Município do RJ em 2025?',
    'Qual impacto do carnaval no ticket médio dos hotéis do Município do RJ?',
    'Quais são os melhores meses para investir em hotelaria no Município do RJ?',
    'Como a Copa de 2014 impactou o turismo carioca?'
  ];

  const handleAskQuestion = (questionText?: string) => {
    const q = questionText || question;
    if (!q.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: q }]);
    
    // Simulate AI response focused on Rio de Janeiro Municipality
    setTimeout(() => {
      let response = '';
      if (q.includes('europeu') || q.includes('Europa') || q.includes('bairro')) {
        response = '🇪🇺 **Crescimento Europeu por Bairro no Município do Rio:**\n\nSanta Teresa (Capital) lidera com +47% de turistas europeus em 2024! Os dados mostram que europeus buscam experiências autênticas no Município do RJ:\n\n**Capital do Rio:**\n• **Santa Teresa**: +47% (média R$ 280/dia)\n• **Lapa**: +32% (vida noturna cultural)\n• **Centro Histórico**: +28% (turismo histórico)\n• **Zona Sul**: +25% (praias e natureza)\n\n**Interior do Município:**\n• **Petrópolis**: +38% (turismo histórico imperial)\n• **Búzios**: +35% (praias exclusivas)\n\n💡 **Insight**: Europeus gastam 23% mais em experiências culturais no Município do RJ que americanos.';
      } else if (q.includes('americanos') || q.includes('EUA')) {
        response = '🇺🇸 **Estratégia para Turistas Americanos no Município do RJ 2025:**\n\n**Oportunidades identificadas no Município:**\n• Voos diretos RJ-Miami aumentaram demanda em 34%\n• Americanos preferem estadias de 7+ dias no Município (vs 4 dias média)\n• Gastam R$ 420/dia no Município do RJ (22% acima da média)\n\n**Destinos preferidos no Município do RJ:**\n1. **Capital**: Barra, Copacabana e Ipanema\n2. **Região dos Lagos**: Búzios e Cabo Frio\n3. **Região Serrana**: Petrópolis e Teresópolis\n\n**Recomendações para o Município:**\n1. Campanhas dezembro-fevereiro\n2. Pacotes longos (7-10 dias) incluindo capital e interior\n3. Marketing destacando Cristo Redentor, Pão de Açúcar e praias municipais';
      } else if (q.includes('carnaval') || q.includes('Carnaval')) {
        response = '🎭 **Impacto do Carnaval nos Hotéis do Município do RJ:**\n\n**Dados reveladores do Município:**\n• Ticket médio sobe **312%** durante carnaval em todo o Município\n• Ocupação atinge 97% na capital e 89% no interior (vs 78% média anual)\n• Receita de 5 dias = 2 meses normais\n\n**Por região no Município do RJ:**\n\n**Capital:**\n• Luxo (Copacabana/Ipanema): R$ 1.840/noite (+420%)\n• Médio (Zona Sul): R$ 680/noite (+280%)\n• Econômico (Centro/Lapa): R$ 320/noite (+200%)\n\n**Interior do Município:**\n• Petrópolis: R$ 450/noite (+250%)\n• Búzios: R$ 890/noite (+340%)\n• Região Serrana: R$ 380/noite (+180%)\n\n💰 **Total Município do RJ**: R$ 2.8 bilhões em 5 dias!';
      } else if (q.includes('meses') || q.includes('investir') || q.includes('hotelaria')) {
        response = '📅 **Melhores Meses para Investir em Hotelaria no Município do RJ:**\n\n**Análise sazonal do Município:**\n\n**Alta Temporada (Dezembro-Março):**\n• Ocupação: 85-97% em todo o Município\n• Ticket médio: +280% na capital, +190% interior\n• ROI: 18-25% ao mês\n\n**Média Temporada (Abril-Junho, Setembro-Novembro):**\n• Ocupação: 65-75% no Município\n• Preços estáveis, custos menores\n• **Melhor período para investir**: Maio-Junho\n\n**Baixa Temporada (Julho-Agosto):**\n• Ocupação: 45-60% no Município\n• Oportunidade para reformas e expansão\n\n**Recomendação para o Município do RJ:**\n1. **Maio-Junho**: Ideal para aquisições\n2. **Setembro**: Preparação para alta temporada\n3. **Foco regional**: Capital (turismo urbano) + Interior (natureza/história)';
      } else if (q.includes('Copa') || q.includes('2014')) {
        response = '⚽ **Impacto da Copa 2014 no Turismo Carioca:**\n\n**Transformações na cidade:**\n• +185% visitantes internacionais durante o evento\n• Infraestrutura: Aeroporto Santos Dumont, VLT, Porto Maravilha\n• Legado hoteleiro: +12.000 novos leitos na cidade\n• Copacabana registrou ocupação de 98%\n\n**Efeitos duradouros:**\n• Rio consolidou-se como destino esportivo\n• Aumento de 34% em eventos internacionais pós-Copa\n• Maracanã virou ícone turístico permanente';
      } else {
        response = `📊 Analisando sua pergunta sobre "${q}" no contexto do Município do Rio de Janeiro...\n\nCom base nos dados do Observatório municipal, posso te ajudar com insights específicos sobre:\n\n• Padrões de visitação no Município do RJ\n• Impactos econômicos nos municípios fluminenses\n• Tendências sazonais no turismo municipal\n• Perfis de turistas que visitam o Município\n• Oportunidades de investimento no Município do RJ\n• Comparativos entre capital e interior\n\nPoderia ser mais específico sobre qual aspecto do turismo fluminense te interessa mais?`;
      }
      
      setMessages(prev => [...prev, { type: 'ai', content: response }]);
    }, 1500);

    setQuestion('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Democratizando a Inteligência Turística
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Converse com o BossaBot em português, inglês ou espanhol. 
            Transformamos dados complexos em insights acionáveis para qualquer pessoa.
          </p>
          <div className="flex justify-center gap-2">
            <Badge className="bg-green-100 text-green-800">🇧🇷 Português</Badge>
            <Badge className="bg-blue-100 text-blue-800">🇺🇸 English</Badge>
            <Badge className="bg-red-100 text-red-800">🇪🇸 Español</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  BossaBot - Assistente de IA
                  <Badge variant="outline" className="ml-2">Online 24/7</Badge>
                </CardTitle>
                <CardDescription>
                  Especialista em dados turísticos do Município do Rio de Janeiro
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 max-h-96">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' ? 'bg-blue-600' : 'bg-green-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg px-4 py-3 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="whitespace-pre-line text-sm">
                            {message.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Ex: Qual o melhor mês para abrir um hotel em Copacabana?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                    className="flex-1"
                  />
                  <Button onClick={() => handleAskQuestion()} className="bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Example Questions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Perguntas Populares</CardTitle>
                <CardDescription>Clique para testar o BossaBot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {exampleQuestions.map((q, index) => (
                  <button
                    key={index}
                    onClick={() => handleAskQuestion(q)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm transition-colors border"
                  >
                    <MessageSquare className="w-4 h-4 inline mr-2 text-blue-600" />
                    {q}
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quem Usa o BossaBot?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">PMEs e Startups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Gestores Públicos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Grandes Empresas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Investidores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Jornalistas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
