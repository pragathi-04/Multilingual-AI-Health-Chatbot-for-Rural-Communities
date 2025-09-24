import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChatDemo } from './components/ChatDemo';
import { Features } from './components/Features';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { Implementation } from './components/Implementation';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ChatDemo />
        <Features />
        <AnalyticsDashboard />
        <Implementation />
      </main>
      <Footer />
    </div>;
}