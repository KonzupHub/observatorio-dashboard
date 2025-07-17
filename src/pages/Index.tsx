
import React from 'react';
import { TopNavigation } from '@/components/TopNavigation';
import { HeroSection } from '@/components/HeroSection';
import { FilterBar } from '@/components/FilterBar';
import { OverviewTab } from '@/components/dashboard/OverviewTab';
import { ArrivalsTab } from '@/components/dashboard/ArrivalsTab';
import { SpendingTab } from '@/components/dashboard/SpendingTab';
import { CapacityTab } from '@/components/dashboard/CapacityTab';
import { ProfileTab } from '@/components/dashboard/ProfileTab';
import { IntentionTab } from '@/components/dashboard/IntentionTab';
import { DataSourcesSection } from '@/components/DataSourcesSection';
import { BossaBot } from '@/components/BossaBot';
import { ObservatoryFooter } from '@/components/ObservatoryFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <HeroSection />
      <FilterBar />
      <OverviewTab />
      <ArrivalsTab />
      <SpendingTab />
      <CapacityTab />
      <ProfileTab />
      <IntentionTab />
      <DataSourcesSection />
      <BossaBot />
      <ObservatoryFooter />
    </div>
  );
};

export default Index;
