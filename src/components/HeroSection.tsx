
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Waves, Zap, Globe } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Sun className="w-8 h-8 text-yellow-300" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-500">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Waves className="w-8 h-8 text-cyan-300" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-1000">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
          <Zap className="w-8 h-8 text-green-300" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge variant="outline" className="border-cyan-400 text-cyan-400 mb-6 text-sm px-4 py-2">
          Observatório de Dados do Município do Rio de Janeiro
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-300 to-white bg-clip-text text-transparent leading-tight">
          Secretaria Municipal do Rio de Janeiro:<br />
          Dados que Encantam,<br />
          <span className="text-yellow-400">Insights que Movem Bilhões</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Observatório de dados do Município: transforme emoção turística em receita, emprego e investimento. 
          O primeiro observatório que fala sua língua - literalmente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 text-lg"
            onClick={() => scrollToSection('dashboard')}
          >
            Explore os Dados
          </Button>
          <Button 
            size="lg" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-8 py-4 text-lg"
            onClick={() => scrollToSection('ia')}
          >
            Converse com a IA
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">47M+</div>
            <div className="text-sm text-blue-200">Turistas/Ano</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">R$ 18Bi</div>
            <div className="text-sm text-blue-200">PIB Turístico</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">180+</div>
            <div className="text-sm text-blue-200">Países de Origem</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-blue-200">IA Analista</div>
          </div>
        </div>
      </div>
    </section>
  );
};
