import React from 'react';
import { Globe, BarChart3 } from 'lucide-react';

export const ObservatoryHeader = () => {
  return (
    <header className="bg-card border-b border-border fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold text-foreground">
            Observatório Rio Dados
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
            <span>🇧🇷 PT</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>Prefeitura do Rio</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-bold">RJ</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};