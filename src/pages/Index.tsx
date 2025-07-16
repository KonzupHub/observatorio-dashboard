
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, TrendingUp, Users, DollarSign, MessageSquare, Globe, BarChart3, Building2, Sun, Waves } from 'lucide-react';
import { TopNavigation } from '@/components/TopNavigation';
import { HeroSection } from '@/components/HeroSection';
import { DashboardSection } from '@/components/DashboardSection';
import { AISection } from '@/components/AISection';
import { ImpactSection } from '@/components/ImpactSection';
import { InvestmentSection } from '@/components/InvestmentSection';
import { AdvancedDataSection } from '@/components/AdvancedDataSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700">
      <TopNavigation />
      
      {/* Add padding-top to account for fixed navigation */}
      <div className="pt-16">
        <HeroSection />
        <div id="dashboard">
          <DashboardSection />
        </div>
        <div id="dados">
          <AdvancedDataSection />
        </div>
        <div id="ia">
          <AISection />
        </div>
        <div id="impacto">
          <ImpactSection />
        </div>
        <div id="investimento">
          <InvestmentSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="outline" className="border-cyan-400 text-cyan-400 text-sm px-4 py-2 mb-4">
            Inovação em parceria com Secretaria Municipal do Rio de Janeiro
          </Badge>
          <h3 className="text-2xl font-bold mb-3">O Município não pode planejar no escuro</h3>
          <p className="text-xl text-cyan-300">Invista na inteligência que move o turismo. Invista no Rio.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
