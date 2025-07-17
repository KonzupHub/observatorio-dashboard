import React from 'react';
import { Badge } from "@/components/ui/badge";

export const TopNavigation = () => {
  const navItems = [
    { label: "Painel Executivo", link: "#painel-executivo" },
    { label: "Fluxo Turístico", link: "#fluxo-turistico" },
    { label: "Desempenho Econômico", link: "#desempenho-economico" },
    { label: "Oferta & Hospedagem", link: "#oferta-hospedagem" },
    { label: "Empregos & Empresas", link: "#empregos-empresas" },
    { label: "Mapas & Mobilidade", link: "#mapas-mobilidade" },
    { label: "Fontes de Dados", link: "#fontes-dados" }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">RJ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Observatório Rio Dados
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Prefeitura Badge */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Prefeitura do Rio
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};