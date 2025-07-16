import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  Ship, 
  Building, 
  FileText, 
  DollarSign, 
  Plane, 
  MapPin, 
  Home, 
  CreditCard, 
  Globe
} from 'lucide-react';

export const DataSourcesSection = () => {
  const dataSources = [
    {
      title: "Dados Terrestres",
      source: "ANTT",
      icon: <Truck className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Dados Marítimos",
      source: "CLIA",
      icon: <Ship className="h-6 w-6" />,
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      title: "Empregos",
      source: "CAGED",
      icon: <Building className="h-6 w-6" />,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Novas empresas de turismo",
      source: "Junta Comercial",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "PIB Turismo",
      source: "placeholder",
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Aéreos",
      source: "Nexus (inteligência interna) e Connect (versão pública)",
      icon: <Plane className="h-6 w-6" />,
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Comportamento & Mapa de Calor",
      source: "Behavior (GPS)",
      icon: <MapPin className="h-6 w-6" />,
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Hospedagem",
      source: "Agency360 (GDS), Airbnb, Booking (valor estimado)",
      icon: <Home className="h-6 w-6" />,
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Gastos",
      source: "Mastercard",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Booking & Voos",
      source: "ForwardKeys",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Fontes de Dados
          </h2>
          <p className="text-gray-600">
            Informações integradas de múltiplas fontes oficiais e parceiros estratégicos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dataSources.map((source, index) => (
            <Card key={index} className={`${source.color} border-2 hover:shadow-md transition-shadow`}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="text-gray-700 mt-1">
                    {source.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {source.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>{source.source}</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};