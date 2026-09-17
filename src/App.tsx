import React, { useState } from 'react';
import { ActiveScreen, PortfolioItem, Venue } from './types';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { PortfolioScreen } from './components/PortfolioScreen';
import { ProductionModal } from './components/ProductionModal';
import { VenueModal } from './components/VenueModal';
import { InquiryModal } from './components/InquiryModal';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [language, setLanguage] = useState<'EN' | 'AR'>('EN');

  // Modals state
  const [selectedProduction, setSelectedProduction] = useState<PortfolioItem | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryPreselectedVenue, setInquiryPreselectedVenue] = useState<string | undefined>(
    undefined
  );
  const [inquiryPreselectedProduction, setInquiryPreselectedProduction] = useState<
    string | undefined
  >(undefined);

  const handleOpenGeneralInquiry = () => {
    setInquiryPreselectedVenue(undefined);
    setInquiryPreselectedProduction(undefined);
    setInquiryOpen(true);
  };

  const handleInquireAboutVenue = (venue: Venue) => {
    setInquiryPreselectedVenue(venue.name);
    setInquiryPreselectedProduction(undefined);
    setInquiryOpen(true);
  };

  const handleInquireAboutProduction = (item: PortfolioItem) => {
    setInquiryPreselectedVenue(item.venue);
    setInquiryPreselectedProduction(`${item.prodNumber} - ${item.title}`);
    setInquiryOpen(true);
  };

  return (
    <div
      id="la-perla-app-root"
      className={`min-h-screen flex flex-col bg-[#FAF8F5] text-[#232323] ${
        language === 'AR' ? 'font-sans' : ''
      }`}
      dir={language === 'AR' ? 'rtl' : 'ltr'}
    >
      {/* Fixed Luxury Navigation */}
      <Navbar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        language={language}
        setLanguage={setLanguage}
        onOpenInquiry={handleOpenGeneralInquiry}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full">
        {activeScreen === 'home' ? (
          <HomeScreen
            onOpenVenueModal={setSelectedVenue}
            setActiveScreen={setActiveScreen}
            onOpenInquiry={handleOpenGeneralInquiry}
            language={language}
          />
        ) : (
          <PortfolioScreen
            onSelectProduction={setSelectedProduction}
            onOpenInquiry={handleOpenGeneralInquiry}
            language={language}
          />
        )}
      </main>

      {/* Floating Concierge Direct WhatsApp Trigger */}
      <aside
        aria-label="Concierge Contact"
        className="fixed bottom-6 right-6 z-40 flex items-center space-x-2"
      >
        <button
          id="floating-inquire-quick-btn"
          onClick={handleOpenGeneralInquiry}
          className="hidden sm:inline-flex items-center space-x-2 bg-[#0B2F1F] text-[#CBA160] px-4 py-2.5 shadow-lg border border-[#CBA160]/40 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#15452F] transition-all"
        >
          <span>Atelier Concierge</span>
        </button>

        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/962799999999"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#0B2F1F] hover:bg-[#15452F] text-[#CBA160] border border-[#CBA160]/50 shadow-xl flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
          title="Direct WhatsApp with Abdoun Atelier"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
      </aside>

      {/* Rich Detail Modals */}
      <ProductionModal
        item={selectedProduction}
        onClose={() => setSelectedProduction(null)}
        onInquireAboutThis={handleInquireAboutProduction}
      />

      <VenueModal
        venue={selectedVenue}
        onClose={() => setSelectedVenue(null)}
        onInquireVenue={handleInquireAboutVenue}
      />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        preselectedVenue={inquiryPreselectedVenue}
        preselectedProduction={inquiryPreselectedProduction}
      />

      {/* Luxury Footer */}
      <Footer
        setActiveScreen={setActiveScreen}
        onOpenInquiry={handleOpenGeneralInquiry}
        language={language}
      />
    </div>
  );
}
