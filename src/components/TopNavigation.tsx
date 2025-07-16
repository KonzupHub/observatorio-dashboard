
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, Menu } from 'lucide-react';

export const TopNavigation = () => {
  const [language, setLanguage] = useState('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    console.log('Idioma alterado para:', newLanguage);
    // Aqui você pode implementar a lógica de mudança de idioma
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Observatório RJ</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#dados" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dados Avançados
            </a>
            <a href="#ia" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              IA Analista
            </a>
            <a href="#impacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Impacto
            </a>
            <a href="#investimento" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Investimento
            </a>
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center space-x-4">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[140px] bg-white border-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{currentLanguage?.flag}</span>
                  <span>{currentLanguage?.name}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 hidden md:inline-flex"
              onClick={() => scrollToSection('dashboard')}
            >
              Explore Mais
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                Dashboard
              </a>
              <a href="#dados" className="text-gray-700 hover:text-blue-600 font-medium">
                Dados Avançados
              </a>
              <a href="#ia" className="text-gray-700 hover:text-blue-600 font-medium">
                IA Analista
              </a>
              <a href="#impacto" className="text-gray-700 hover:text-blue-600 font-medium">
                Impacto
              </a>
              <a href="#investimento" className="text-gray-700 hover:text-blue-600 font-medium">
                Investimento
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full mt-4"
                onClick={() => scrollToSection('dashboard')}
              >
                Explore Mais
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
