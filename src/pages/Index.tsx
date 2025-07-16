
import React from 'react';
import { ObservatoryHeader } from '@/components/ObservatoryHeader';
import { FilterBar } from '@/components/FilterBar';
import { MetricsGrid } from '@/components/MetricsGrid';
import { DataVisualization } from '@/components/DataVisualization';
import { BossaBot } from '@/components/BossaBot';
import { ObservatoryFooter } from '@/components/ObservatoryFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ObservatoryHeader />
      <FilterBar />
      <MetricsGrid />
      <DataVisualization />
      <BossaBot />
      <ObservatoryFooter />
    </div>
  );
};

export default Index;
