
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from './dashboard/OverviewTab';
import { ArrivalsTab } from './dashboard/ArrivalsTab';
import { IntentionTab } from './dashboard/IntentionTab';
import { CapacityTab } from './dashboard/CapacityTab';
import { ProfileTab } from './dashboard/ProfileTab';
import { SpendingTab } from './dashboard/SpendingTab';
import { HeatMapCard } from './HeatMapCard';

export const DashboardSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            O Rio é o Topo do Funil do Brasil
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dashboards inteligentes que revelam padrões invisíveis do turismo carioca. 
            Cada pixel conta uma história de oportunidade.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="overview">Panorama</TabsTrigger>
            <TabsTrigger value="arrivals">Chegadas</TabsTrigger>
            <TabsTrigger value="intention">Intenção</TabsTrigger>
            <TabsTrigger value="capacity">Capacidade</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="spending">Gastos</TabsTrigger>
            <TabsTrigger value="heatmap">Mapa de Calor</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="arrivals">
            <ArrivalsTab />
          </TabsContent>

          <TabsContent value="intention">
            <IntentionTab />
          </TabsContent>

          <TabsContent value="capacity">
            <CapacityTab />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="spending">
            <SpendingTab />
          </TabsContent>

          <TabsContent value="heatmap">
            <HeatMapCard />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
