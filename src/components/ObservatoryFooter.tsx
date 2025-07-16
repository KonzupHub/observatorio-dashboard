import React from 'react';
import { Card } from "@/components/ui/card";
import { Building, CreditCard, Globe, Code } from 'lucide-react';

export const ObservatoryFooter = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          {/* Logos dos parceiros */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-lg font-semibold text-primary">
              <Building className="h-6 w-6" />
              <span>Secretaria Municipal de Turismo RJ</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>ForwardKeys</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="h-4 w-4" />
                <span>Mastercard</span>
              </div>
              <div className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span>Konzup</span>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-muted-foreground">
            <p>
              Dados simulados para fins de demonstração | Fontes oficiais e parceiros
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};