
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FilterBar } from '@/components/FilterBar';
import { MetricsGrid } from '@/components/MetricsGrid';
import { DataSourcesSection } from '@/components/DataSourcesSection';
import { DataVisualization } from '@/components/DataVisualization';
import { BossaBot } from '@/components/BossaBot';
import { ObservatoryFooter } from '@/components/ObservatoryFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FilterBar />
      <MetricsGrid />
      <DataSourcesSection />
      <DataVisualization />
      <BossaBot />
      <ObservatoryFooter />
    </div>
  );
};

export default Index;
