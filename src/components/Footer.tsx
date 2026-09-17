import React from 'react';
import { ASSETS } from '../data/content';
import { ActiveScreen } from '../types';
import { Phone, Mail, MapPin, Instagram, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveScreen: (screen: ActiveScreen) => void;
  onOpenInquiry: () => void;
  language: 'EN' | 'AR';
}

export const Footer: React.FC<FooterProps> = ({
  setActiveScreen,
  onOpenInquiry,
  language,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (screen: ActiveScreen, sectionId?: string) => {
    setActiveScreen(screen);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="atelier-footer" className="bg-[#071F15] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Brand Crest */}
        <div className="flex flex-col items-center text-center space-y-4 pb-14 border-b border-white/10">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 border border-[#CBA160]/40 group-hover:border-[#CBA160] transition-colors mb-3">
              <img
                src={ASSETS.footerEmblem}
                alt="La Perla Events Monogram"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] uppercase text-white group-hover:text-[#CBA160] transition-colors">
              La Perla
            </h3>
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#DFBE84]">
              Events & Haute Scenography
            </span>
          </button>

          <p className="font-sans text-xs text-white/60 max-w-md font-light leading-relaxed">
            Curating royal weddings, starlit garden receptions, and iconic waterfront celebrations across Amman and the Kingdom of Jordan.
          </p>
        </div>

        {/* Multi-Column Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-white/10 text-xs font-sans">
          {/* Col 1: Studio Location */}
          <div className="space-y-3">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#CBA160] font-semibold">
              The Abdoun Atelier
            </span>
            <p className="text-white/70 leading-relaxed font-light">
              Fawzi Al-Mulki Street
              <br />
              Abdoun, Amman, Jordan
            </p>
            <p className="text-white/50 text-[11px]">
              Private consultations exclusively by appointment.
            </p>
          </div>

          {/* Col 2: Atelier Nav */}
          <div className="space-y-3">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#CBA160] font-semibold">
              Exploration
            </span>
            <ul className="space-y-2 text-white/80">
              <li>
                <button
                  onClick={() => navigateTo('home', 'our-story')}
                  className="hover:text-[#CBA160] transition-colors"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'signature-settings')}
                  className="hover:text-[#CBA160] transition-colors"
                >
                  Atmospheres & Spaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('home', 'prestigious-venues')}
                  className="hover:text-[#CBA160] transition-colors"
                >
                  Partner Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('portfolio')}
                  className="hover:text-[#CBA160] transition-colors text-[#DFBE84]"
                >
                  Curated Portfolio Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#CBA160] font-semibold">
              Concierge
            </span>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="tel:+96265930000"
                  className="hover:text-[#CBA160] transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CBA160]" />
                  <span>+962 6 593 0000</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/962799999999"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#CBA160] transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CBA160]" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@laperlaevents.com"
                  className="hover:text-[#CBA160] transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#CBA160]" />
                  <span>concierge@laperlaevents.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Inquiry Callout */}
          <div className="space-y-3">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#CBA160] font-semibold">
              Matrimonial Inquiries
            </span>
            <p className="text-white/70 leading-relaxed font-light">
              Now accepting inquiries for 2025 - 2026 royal and estate wedding seasons.
            </p>
            <button
              onClick={onOpenInquiry}
              className="w-full py-2.5 px-4 bg-[#CBA160] hover:bg-[#DFBE84] text-[#071F15] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all mt-2"
            >
              Request Consultation
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 font-sans space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} La Perla Events Atelier. All Rights Reserved. Amman, Jordan.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#CBA160] transition-colors flex items-center space-x-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@laperla_events</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-[#CBA160] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
