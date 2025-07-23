'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuSection from './MenuSection';

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}