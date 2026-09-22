import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { PriceCalculator } from './components/PriceCalculator';
import { PricelistCatalog } from './components/PricelistCatalog';
import { SecurityCenter } from './components/SecurityCenter';
import { OrderWorkflow } from './components/OrderWorkflow';
import { AdminVerifier } from './components/AdminVerifier';
import { TestimonialGallery } from './components/TestimonialGallery';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
        {/* Top Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <ValueProps />
          <PriceCalculator />
          <PricelistCatalog />
          <SecurityCenter />
          <OrderWorkflow />
          <AdminVerifier />
          <TestimonialGallery />
          <FaqSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
