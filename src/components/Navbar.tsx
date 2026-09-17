import React, { useState, useEffect } from 'react';
import { ActiveScreen } from '../types';
import { ASSETS } from '../data/content';
import { Menu, X, Globe, Sparkles, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  language: 'EN' | 'AR';
  setLanguage: (lang: 'EN' | 'AR') => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  setActiveScreen,
  language,
  setLanguage,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeScreen !== 'home') {
      setActiveScreen('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioClick = () => {
    setMobileMenuOpen(false);
    setActiveScreen('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setMobileMenuOpen(false);
    setActiveScreen('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE4DC] py-3 text-[#232323]'
            : 'bg-gradient-to-b from-[#071F15]/80 via-[#071F15]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={handleHomeClick}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <img
              src={isScrolled ? ASSETS.footerEmblem : ASSETS.logoHeader}
              alt="La Perla Events"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span
                className={`font-serif tracking-[0.25em] text-base sm:text-lg uppercase font-normal leading-tight ${
                  isScrolled ? 'text-[#0B2F1F]' : 'text-white'
                }`}
              >
                La Perla
              </span>
              <span
                className={`font-sans tracking-[0.3em] text-[9px] uppercase font-light ${
                  isScrolled ? 'text-[#CBA160]' : 'text-[#DFBE84]'
                }`}
              >
                Events & Haute Scenography
              </span>
            </div>
          </button>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <button
              id="nav-link-story"
              onClick={() => handleNavClick('our-story')}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#CBA160] ${
                isScrolled ? 'text-[#232323]' : 'text-white/90'
              }`}
            >
              {language === 'AR' ? 'قصتنا' : 'Our Story'}
            </button>

            <button
              id="nav-link-settings"
              onClick={() => handleNavClick('signature-settings')}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#CBA160] ${
                isScrolled ? 'text-[#232323]' : 'text-white/90'
              }`}
            >
              {language === 'AR' ? 'الأجواء والقاعات' : 'Settings'}
            </button>

            <button
              id="nav-link-pillars"
              onClick={() => handleNavClick('pillars-section')}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#CBA160] ${
                isScrolled ? 'text-[#232323]' : 'text-white/90'
              }`}
            >
              {language === 'AR' ? 'التجربة' : 'The Experience'}
            </button>

            <button
              id="nav-link-venues"
              onClick={() => handleNavClick('prestigious-venues')}
              className={`font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-colors hover:text-[#CBA160] ${
                isScrolled ? 'text-[#232323]' : 'text-white/90'
              }`}
            >
              {language === 'AR' ? 'قاعاتنا المعتمدة' : 'Venues'}
            </button>

            {/* Screen 2 Direct Link */}
            <button
              id="nav-link-portfolio"
              onClick={handlePortfolioClick}
              className={`relative font-sans text-[11px] tracking-[0.2em] uppercase font-medium transition-all px-2.5 py-1 rounded ${
                activeScreen === 'portfolio'
                  ? 'text-[#CBA160] font-semibold border-b-2 border-[#CBA160]'
                  : isScrolled
                  ? 'text-[#0B2F1F] hover:text-[#CBA160]'
                  : 'text-white hover:text-[#CBA160]'
              }`}
            >
              {language === 'AR' ? 'الأرشيف والأعمال' : 'Portfolio'}
            </button>
          </nav>

          {/* Right Actions: Screen Switcher & Inquiry CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Screen Switcher Badge */}
            <div
              id="screen-switcher-control"
              className={`hidden md:flex items-center p-0.5 rounded-full border text-[10px] tracking-[0.12em] font-sans ${
                isScrolled
                  ? 'bg-[#F4EFEA] border-[#EAE4DC] text-[#232323]'
                  : 'bg-black/30 backdrop-blur-md border-white/20 text-white'
              }`}
            >
              <button
                id="switch-to-home-btn"
                onClick={handleHomeClick}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  activeScreen === 'home'
                    ? 'bg-[#0B2F1F] text-[#CBA160] font-semibold shadow-xs'
                    : 'hover:text-[#CBA160]'
                }`}
              >
                ATELIER
              </button>
              <button
                id="switch-to-portfolio-btn"
                onClick={handlePortfolioClick}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  activeScreen === 'portfolio'
                    ? 'bg-[#0B2F1F] text-[#CBA160] font-semibold shadow-xs'
                    : 'hover:text-[#CBA160]'
                }`}
              >
                ANTHOLOGY
              </button>
            </div>

            {/* Language Toggle */}
            <button
              id="lang-toggle-btn"
              onClick={() => setLanguage(language === 'EN' ? 'AR' : 'EN')}
              className={`flex items-center space-x-1 text-xs tracking-wider px-2 py-1 rounded transition-colors ${
                isScrolled
                  ? 'text-[#232323] hover:text-[#0B2F1F]'
                  : 'text-white/80 hover:text-white'
              }`}
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-sans font-medium text-[11px]">{language}</span>
            </button>

            {/* Inquire CTA Button */}
            <button
              id="header-inquire-btn"
              onClick={onOpenInquiry}
              className={`hidden sm:inline-flex items-center space-x-2 text-[11px] font-sans tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 font-medium ${
                isScrolled
                  ? 'bg-[#0B2F1F] text-[#FAF8F5] hover:bg-[#15452F] hover:text-[#CBA160]'
                  : 'bg-[#CBA160] text-[#071F15] hover:bg-[#DFBE84]'
              }`}
            >
              <span>{language === 'AR' ? 'طلب استشارة' : 'Inquire'}</span>
              <ChevronRight className="w-3 h-3" />
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 focus:outline-none ${
                isScrolled ? 'text-[#0B2F1F]' : 'text-white'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-40 bg-[#071F15]/95 backdrop-blur-lg flex flex-col justify-between pt-24 pb-8 px-6 text-white"
        >
          <div className="space-y-6">
            <div className="border-b border-[#CBA160]/20 pb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#CBA160] font-sans">
                Active View
              </span>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  id="drawer-switch-home"
                  onClick={handleHomeClick}
                  className={`py-2 px-3 text-xs tracking-wider uppercase border transition-all text-center ${
                    activeScreen === 'home'
                      ? 'bg-[#CBA160] text-[#0B2F1F] border-[#CBA160] font-semibold'
                      : 'border-white/20 text-white/80'
                  }`}
                >
                  Home Atelier
                </button>
                <button
                  id="drawer-switch-portfolio"
                  onClick={handlePortfolioClick}
                  className={`py-2 px-3 text-xs tracking-wider uppercase border transition-all text-center ${
                    activeScreen === 'portfolio'
                      ? 'bg-[#CBA160] text-[#0B2F1F] border-[#CBA160] font-semibold'
                      : 'border-white/20 text-white/80'
                  }`}
                >
                  Curated Anthology
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-4">
              <button
                id="drawer-link-story"
                onClick={() => handleNavClick('our-story')}
                className="text-left font-serif text-2xl tracking-wide hover:text-[#CBA160] transition-colors"
              >
                Our Story
              </button>
              <button
                id="drawer-link-settings"
                onClick={() => handleNavClick('signature-settings')}
                className="text-left font-serif text-2xl tracking-wide hover:text-[#CBA160] transition-colors"
              >
                Signature Atmospheres
              </button>
              <button
                id="drawer-link-pillars"
                onClick={() => handleNavClick('pillars-section')}
                className="text-left font-serif text-2xl tracking-wide hover:text-[#CBA160] transition-colors"
              >
                The Experience & Pillars
              </button>
              <button
                id="drawer-link-venues"
                onClick={() => handleNavClick('prestigious-venues')}
                className="text-left font-serif text-2xl tracking-wide hover:text-[#CBA160] transition-colors"
              >
                Prestigious Venues
              </button>
              <button
                id="drawer-link-portfolio"
                onClick={handlePortfolioClick}
                className="text-left font-serif text-2xl tracking-wide text-[#CBA160]"
              >
                Curated Portfolio Archive
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              id="drawer-inquire-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#CBA160] text-[#071F15] text-xs uppercase tracking-[0.25em] font-semibold text-center hover:bg-[#DFBE84] transition-colors"
            >
              Inquire With Our Atelier
            </button>
            <div className="flex items-center justify-between text-xs text-white/60 font-sans tracking-wider">
              <span>Abdoun, Amman, Jordan</span>
              <a
                href="https://wa.me/962799999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 text-[#CBA160]"
              >
                <Phone className="w-3 h-3" />
                <span>+962 7 9999 9999</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
