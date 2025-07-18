import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, MessageCircle, X } from 'lucide-react';

export const BossaBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'bot', message: string}>>([]);

  const quickQuestions = [
    "Quais bairros do município receberam mais turistas internacionais este mês?",
    "Quanto gastaram os turistas de Portugal no município do Rio de Janeiro nos últimos 90 dias?",
    "Qual foi a permanência média dos visitantes de negócios no último trimestre?",
    "Como está a ocupação hoteleira 5★ comparada ao mesmo período de 2024?",
    "Qual país emissor mais cresceu em chegadas aéreas este ano?",
    "Quantas novas empresas de ecoturismo foram abertas em 2024?"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newUserMessage = { type: 'user' as const, message };
    const botResponse = { 
      type: 'bot' as const, 
      message: `Insight exemplo: ${message}. Fonte: Observatório Rio Dados`
    };

    setChatHistory(prev => [...prev, newUserMessage, botResponse]);
    setMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    const newUserMessage = { type: 'user' as const, message: question };
    const botResponse = { 
      type: 'bot' as const, 
      message: `Insight exemplo: ${question}. Fonte: Observatório Rio Dados`
    };

    setChatHistory(prev => [...prev, newUserMessage, botResponse]);
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[340px] h-[500px] z-50">
          <Card className="h-full flex flex-col shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span>Bossa Bot</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                Assistente de Dados Turísticos
              </Badge>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col gap-4">
              {/* Quick Questions */}
              {chatHistory.length === 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Perguntas rápidas:
                  </p>
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left justify-start h-auto py-2 px-3 text-wrap"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              )}

              {/* Chat History */}
              <div className="flex-1 space-y-3 overflow-y-auto">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        chat.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {chat.message}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Digite sua pergunta..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};