import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, ASSETS } from '../data/content';
import { PortfolioItem, PortfolioCategory } from '../types';
import {
  Sparkles,
  ArrowRight,
  Filter,
  Eye,
  Calendar,
  Users,
  MapPin,
  Flower2,
  ChevronRight,
} from 'lucide-react';

interface PortfolioScreenProps {
  onSelectProduction: (item: PortfolioItem) => void;
  onOpenInquiry: () => void;
  language: 'EN' | 'AR';
}

export const PortfolioScreen: React.FC<PortfolioScreenProps> = ({
  onSelectProduction,
  onOpenInquiry,
  language,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const categories: { key: PortfolioCategory; label: string; count: number }[] = [
    { key: 'all', label: 'ALL PRODUCTIONS', count: 32 },
    { key: 'royal', label: 'ROYAL WEDDINGS', count: 14 },
    { key: 'floral', label: 'FLORAL SCENOGRAPHY', count: 9 },
    { key: 'waterfront', label: 'DEAD SEA & WATERFRONT', count: 5 },
    { key: 'intimate', label: 'INTIMATE RECEPTIONS', count: 4 },
  ];

  const featuredItem = PORTFOLIO_ITEMS.find((item) => item.isFeatured) || PORTFOLIO_ITEMS[0];

  const filteredItems =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS.filter((item) => !item.isFeatured)
      : PORTFOLIO_ITEMS.filter(
          (item) => item.category === activeCategory && !item.isFeatured
        );

  return (
    <div id="portfolio-screen-root" className="w-full pt-28 pb-24 bg-[#FAF8F5] text-[#232323]">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="flex items-center justify-center space-x-2 text-[#CBA160] mb-3">
          <span className="h-[1px] w-8 bg-[#CBA160]" />
          <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase font-light">
            AMMAN • DEAD SEA • PRIVATE ESTATES
          </span>
          <span className="h-[1px] w-8 bg-[#CBA160]" />
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0B2F1F] tracking-tight mb-4">
          A Curated Anthology of Timeless Celebrations
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#6B6862] max-w-2xl mx-auto font-light leading-relaxed">
          Where bespoke spatial architecture converges with emotional artistry. Explore our celebrated matrimonial productions across the Kingdom of Jordan.
        </p>

        {/* 2. Interactive Filter Bar */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`filter-tab-${cat.key}`}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-[11px] font-sans tracking-[0.2em] uppercase transition-all duration-200 border ${
                activeCategory === cat.key
                  ? 'bg-[#0B2F1F] text-[#CBA160] border-[#0B2F1F] font-semibold shadow-xs'
                  : 'bg-white text-[#4A463F] border-[#EAE4DC] hover:border-[#CBA160] hover:text-[#0B2F1F]'
              }`}
            >
              {cat.label} <span className="opacity-60 ml-1">({cat.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Editorial Production (PROD. N° 048) */}
      {(activeCategory === 'all' || activeCategory === 'royal') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div
            id="featured-production-banner"
            className="group relative bg-[#071F15] text-white border border-[#0B2F1F] overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Side */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px] overflow-hidden">
                <img
                  src={featuredItem.imageUrl}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F15] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 bg-[#CBA160] text-[#071F15] px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-sans font-bold">
                  {featuredItem.prodNumber} • FEATURED
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-[#DFBE84]">
                    <Sparkles className="w-4 h-4 text-[#CBA160]" />
                    <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-medium">
                      {featuredItem.categoryLabel}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
                    {featuredItem.title}
                  </h2>

                  <p className="font-display italic text-lg sm:text-xl text-[#CBA160]">
                    {featuredItem.subtitle}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {featuredItem.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs font-sans text-white/70">
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                        Venue
                      </span>
                      <span className="font-medium text-white">{featuredItem.venue}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                        Season & Scale
                      </span>
                      <span className="font-medium text-white">{featuredItem.guests}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    id="featured-view-journal-btn"
                    onClick={() => onSelectProduction(featuredItem)}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#CBA160] hover:bg-[#DFBE84] text-[#071F15] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Production Journal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Editorial Masonry / Productions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="group bg-white border border-[#EAE4DC] hover:border-[#CBA160] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE4DC]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B2F1F]/90 backdrop-blur-xs text-[#CBA160] px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-sans font-medium">
                    {item.prodNumber}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#0B2F1F] px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase font-sans">
                    {item.season}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-[9px] tracking-[0.2em] uppercase text-[#6B6862] font-sans">
                    <span className="text-[#CBA160] font-medium">{item.categoryLabel}</span>
                    <span>{item.guests}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B2F1F] font-normal leading-snug group-hover:text-[#CBA160] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-display italic text-sm text-[#6B6862]">
                    {item.subtitle}
                  </p>

                  <p className="font-sans text-xs text-[#4A463F] font-light line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#EAE4DC] flex items-center justify-between">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#6B6862] font-sans">
                  {item.venue}
                </span>

                <button
                  id={`view-journal-btn-${item.id}`}
                  onClick={() => onSelectProduction(item)}
                  className="text-xs uppercase tracking-[0.15em] font-medium text-[#0B2F1F] group-hover:text-[#CBA160] flex items-center space-x-1"
                >
                  <span>Explore Journal</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Atelier Craft: The Poetry of Scenography */}
      <section className="py-20 bg-[#F4EFEA] border-y border-[#EAE4DC] mb-20 text-[#232323]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CBA160] font-semibold">
              The Architecture of Atmosphere
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0B2F1F]">
              The Poetry of Scenography
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#6B6862] font-light">
              How our design house transforms raw architectural space into emotional sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#EAE4DC] space-y-4">
              <span className="font-serif text-3xl text-[#CBA160]">I.</span>
              <h3 className="font-serif text-xl text-[#0B2F1F]">Botanical Architecture</h3>
              <p className="font-sans text-xs text-[#4A463F] leading-relaxed font-light">
                We work exclusively with elite European and Kenyan floriculturists, air-freighting fresh garden roses, ranunculus, and orchids directly into Amman within 36 hours of harvest.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#EAE4DC] space-y-4">
              <span className="font-serif text-3xl text-[#CBA160]">II.</span>
              <h3 className="font-serif text-xl text-[#0B2F1F]">Luminescence & Shadow</h3>
              <p className="font-sans text-xs text-[#4A463F] leading-relaxed font-light">
                Light is our primary medium. We balance warm 2400K architectural spotlights with thousands of real wax dripless candles to create a golden twilight ambiance that flatters every face.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#EAE4DC] space-y-4">
              <span className="font-serif text-3xl text-[#CBA160]">III.</span>
              <h3 className="font-serif text-xl text-[#0B2F1F]">Haute Table Curation</h3>
              <p className="font-sans text-xs text-[#4A463F] leading-relaxed font-light">
                From hand-cast bone china chargers to custom Italian velvet tablecloths and hand-calligraphed linen menus, every place setting becomes a personal gift to your honored guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Royal Editorial Quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-20 space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full border border-[#CBA160]/40 flex items-center justify-center text-[#CBA160]">
          <Sparkles className="w-5 h-5" />
        </div>

        <blockquote className="font-display italic text-2xl sm:text-3xl text-[#0B2F1F] leading-relaxed font-light">
          "Every single nuance was an orchestration of timeless poise and quiet majesty. La Perla has established an unrivaled pinnacle in Jordanian haute matrimonial design."
        </blockquote>

        <div className="flex flex-col items-center">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#CBA160] font-medium">
            VIP Editorial Review
          </span>
          <span className="font-sans text-[11px] text-[#6B6862]">
            Amman Royal Society & Society Gazette
          </span>
        </div>
      </section>

      {/* 7. Consultation Call-to-Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2F1F] text-white p-10 sm:p-14 text-center border border-[#0B2F1F] space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#CBA160] font-medium">
              Private Matrimonial Dossier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Commission Your Celebration With Our Atelier
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Our lead designers in Abdoun are currently reserving dates for the upcoming autumn and spring wedding seasons.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                id="portfolio-inquire-cta-btn"
                onClick={onOpenInquiry}
                className="px-8 py-4 bg-[#CBA160] hover:bg-[#DFBE84] text-[#071F15] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
