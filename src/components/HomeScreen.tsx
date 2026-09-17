import React, { useState } from 'react';
import { ASSETS, VENUES, PILLARS } from '../data/content';
import { Venue, ActiveScreen } from '../types';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Send,
  Building,
} from 'lucide-react';

interface HomeScreenProps {
  onOpenVenueModal: (venue: Venue) => void;
  setActiveScreen: (screen: ActiveScreen) => void;
  onOpenInquiry: () => void;
  language: 'EN' | 'AR';
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenVenueModal,
  setActiveScreen,
  onOpenInquiry,
  language,
}) => {
  // Local form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    estimatedGuests: '300 - 500 Guests',
    venuePreference: 'The Ritz-Carlton, Amman',
    visionNotes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div id="home-screen-root" className="w-full">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-20"
      >
        {/* Background Image with Deep Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroHome}
            alt="La Perla Luxury Wedding Celebration"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071F15] via-[#071F15]/65 to-[#071F15]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,31,21,0.5)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-12 pb-16">
          {/* Subtle Crest / Subheading */}
          <div className="flex items-center space-x-2 text-[#CBA160] mb-4">
            <span className="h-[1px] w-8 sm:w-12 bg-[#CBA160]/60" />
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.35em] uppercase font-light">
              Bespoke Haute Scenography • Amman
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-[#CBA160]/60" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-6">
            Timeless Beginnings
          </h1>

          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#DFBE84] font-light mb-6 tracking-wide">
            A Place for Extraordinary Love
          </p>

          <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/85 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
            Crafting ethereal atmospheres, royal ballrooms, and bespoke celebrations throughout Jordan. Where every whispered vow becomes an architectural legacy.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="hero-inquire-cta"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-4 bg-[#CBA160] hover:bg-[#DFBE84] text-[#071F15] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-md"
            >
              Inquire Now
            </button>

            <button
              id="hero-portfolio-cta"
              onClick={() => {
                setActiveScreen('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 border border-white/40 hover:border-[#CBA160] text-white hover:text-[#CBA160] font-sans text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 backdrop-blur-xs"
            >
              Explore Anthology
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex flex-col items-center text-white/60 text-[10px] tracking-[0.3em] font-sans uppercase">
            <span className="mb-2">Scroll To Discover</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#CBA160]" />
          </div>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section id="our-story" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#232323] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-2 text-[#CBA160]">
                <span className="h-[1px] w-6 bg-[#CBA160]" />
                <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-medium">
                  The Atelier Narrative
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B2F1F] leading-[1.15]">
                More Than an Event, A Lasting Legacy
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#4A463F] leading-relaxed font-light">
                Founded in Amman with a vision to transcend traditional celebration design, La Perla Events choreographs immersive sensory environments. We unite haute architectural scenography with living botanical sculpture, orchestrating Jordanian warmth with European refinement.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#4A463F] leading-relaxed font-light">
                From intimate candlelit private estates in Abdoun to monumental royal ballrooms at The Ritz-Carlton and serene Dead Sea horizons, our atelier transforms spaces into enduring emotional sanctuaries.
              </p>

              <div className="pt-4 flex items-center space-x-6">
                <div>
                  <span className="block font-serif text-3xl text-[#0B2F1F]">12+</span>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#6B6862] uppercase">
                    Years of Mastery
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-[#EAE4DC]" />
                <div>
                  <span className="block font-serif text-3xl text-[#0B2F1F]">350+</span>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#6B6862] uppercase">
                    Celebrations Curated
                  </span>
                </div>
                <div className="h-10 w-[1px] bg-[#EAE4DC]" />
                <div>
                  <span className="block font-serif text-3xl text-[#0B2F1F]">100%</span>
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#6B6862] uppercase">
                    Bespoke Conception
                  </span>
                </div>
              </div>
            </div>

            {/* Center Column: Floral Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-2 bg-white shadow-xl border border-[#EAE4DC] max-w-sm w-full">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={ASSETS.storyFloral}
                    alt="La Perla Floral Scenography Arch"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="py-3 px-2 text-center">
                  <span className="font-sans text-[9px] tracking-[0.25em] text-[#CBA160] uppercase">
                    Living Botanical Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Card with Emblem */}
            <div className="lg:col-span-3 bg-[#0B2F1F] text-white p-8 sm:p-10 border border-[#0B2F1F] shadow-lg relative flex flex-col justify-between min-h-[360px]">
              <div className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#CBA160]/40 rounded-full">
                  <Sparkles className="w-5 h-5 text-[#CBA160]" />
                </div>

                <p className="font-display italic text-xl sm:text-2xl text-[#FAF8F5] leading-snug font-light">
                  "True luxury is not merely seen—it is felt in the hushed reverie of an imperial ballroom illuminated by candlelight."
                </p>
              </div>

              <div className="pt-6 border-t border-white/15">
                <span className="block font-sans text-xs uppercase tracking-[0.2em] text-[#CBA160] font-medium">
                  Atelier Philosophy
                </span>
                <span className="text-[11px] text-white/60 tracking-wider">
                  La Perla Creative Direction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SPACES & ATMOSPHERES */}
      <section
        id="signature-settings"
        className="py-24 bg-[#F4EFEA] border-y border-[#EAE4DC] text-[#232323]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CBA160] font-semibold">
              Signature Atmospheres
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B2F1F]">
              Iconic Settings, Unforgettable Moments
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B6862] font-light">
              From monumental ballrooms to tranquil Dead Sea shores, our scenography adapts to every sacred canvas.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Setting 1: Grand Ballroom */}
            <div
              id="setting-card-ballroom"
              className="group bg-white border border-[#EAE4DC] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ASSETS.settingGrandBallroom}
                  alt="The Grand Ballroom"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0B2F1F]/90 backdrop-blur-xs text-[#CBA160] px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium">
                  Imperial Grandeur
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#0B2F1F] mb-2">The Grand Ballroom</h3>
                  <p className="font-sans text-xs text-[#6B6862] leading-relaxed">
                    Designed for grand royal matrimonial banquets at premier destinations including Grand Hyatt Amman and The Ritz-Carlton. Towering chandeliers, custom velvet lounges, and crystal runways.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#CBA160] font-sans font-medium">
                    Up to 800 Guests
                  </span>
                  <button
                    id="ballroom-inquire-action"
                    onClick={onOpenInquiry}
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#0B2F1F] group-hover:text-[#CBA160] flex items-center space-x-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Setting 2: Estate Gardens */}
            <div
              id="setting-card-estate"
              className="group bg-white border border-[#EAE4DC] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ASSETS.settingEstateGardens}
                  alt="The Estate Gardens"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0B2F1F]/90 backdrop-blur-xs text-[#CBA160] px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium">
                  Open-Air Nocturne
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#0B2F1F] mb-2">The Estate Gardens</h3>
                  <p className="font-sans text-xs text-[#6B6862] leading-relaxed">
                    Sculpted for starry evening receptions across Amman’s private estates and Dunes Club pavilions. Canopy fairy lighting, antique stone fountains, and curated botanical courtyards.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#CBA160] font-sans font-medium">
                    Intimate to 500 Guests
                  </span>
                  <button
                    id="estate-inquire-action"
                    onClick={onOpenInquiry}
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#0B2F1F] group-hover:text-[#CBA160] flex items-center space-x-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Setting 3: Dead Sea Waterfront */}
            <div
              id="setting-card-waterfront"
              className="group bg-white border border-[#EAE4DC] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ASSETS.settingDeadSea}
                  alt="Dead Sea Waterfront"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0B2F1F]/90 backdrop-blur-xs text-[#CBA160] px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-sans font-medium">
                  Sacred Sunset
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#0B2F1F] mb-2">Dead Sea Waterfront</h3>
                  <p className="font-sans text-xs text-[#6B6862] leading-relaxed">
                    Exclusive sunset vows overlooking the serene Dead Sea at Crown and Kempinski Ishtar. Golden horizon reflections, floating candle basins, and breathtaking desert coastal vistas.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE4DC] flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#CBA160] font-sans font-medium">
                    Up to 450 Guests
                  </span>
                  <button
                    id="waterfront-inquire-action"
                    onClick={onOpenInquiry}
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#0B2F1F] group-hover:text-[#CBA160] flex items-center space-x-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4 PILLARS (THOUGHTFULLY CURATED FOR YOU) */}
      <section id="pillars-section" className="py-24 bg-[#FAF8F5] text-[#232323]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CBA160] font-semibold">
              The Atelier Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B2F1F]">
              Thoughtfully Curated for You
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B6862] font-light">
              Every celebration is a bespoke work of spatial art orchestrated through four foundational disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-8 border border-[#EAE4DC] hover:border-[#CBA160] transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-[#CBA160] font-light">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B6862] font-sans">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#0B2F1F] mb-3">{pillar.title}</h3>

                  <p className="font-sans text-xs text-[#4A463F] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F4EFEA]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#0B2F1F] font-semibold font-sans">
                    La Perla Precision
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRESTIGIOUS COLLABORATIONS & PREFERRED VENUES */}
      <section
        id="prestigious-venues"
        className="py-24 bg-[#0B2F1F] text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CBA160] font-semibold">
              Jordan’s Most Distinguished Sanctuaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              Prestigious Collaborations & Preferred Venues
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-light">
              Approved luxury scenography partners with trusted, seamless execution across Amman and the Kingdom.
            </p>
          </div>

          {/* Venues Interactive Badges / Carousel */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {VENUES.map((venue) => (
              <button
                key={venue.id}
                id={`venue-badge-${venue.id}`}
                onClick={() => onOpenVenueModal(venue)}
                className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CBA160] rounded-sm transition-all text-center flex flex-col items-center justify-center space-y-3 focus:outline-none"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border border-[#CBA160]/40 p-0.5 group-hover:scale-105 transition-transform">
                  <img
                    src={venue.imageUrl}
                    alt={venue.name}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-white font-medium group-hover:text-[#CBA160] transition-colors leading-tight">
                    {venue.badge}
                  </span>
                  <span className="text-[9px] text-white/50 tracking-wider font-light mt-1">
                    {venue.location}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-sans text-xs text-white/60 tracking-wider">
              Planning at a private royal residence or external destination? Our atelier provides full mobile infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EMOTIONAL TESTIMONIAL / CLIENT STORY */}
      <section
        id="client-testimonials"
        className="relative py-28 sm:py-36 flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.testimonialCouple}
            alt="Bride and Groom Evening Celebration"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#071F15]/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="w-16 h-16 mx-auto rounded-full border border-[#CBA160]/60 flex items-center justify-center bg-[#0B2F1F]/60">
            <Sparkles className="w-6 h-6 text-[#CBA160]" />
          </div>

          <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl text-[#FAF8F5] leading-relaxed font-light">
            "Our wedding orchestrated by La Perla Events was far beyond anything we could have ever imagined. The moment we stepped into the grand ballroom, our breath was taken away by the cascading white orchids, the candlelight, and the sheer royal majesty."
          </blockquote>

          <div className="flex flex-col items-center space-y-1">
            <span className="font-serif text-lg sm:text-xl text-[#DFBE84] tracking-wide">
              Nour & Tarek
            </span>
            <span className="font-sans text-xs tracking-[0.25em] text-white/70 uppercase">
              Amman, Jordan • The Ritz-Carlton
            </span>
          </div>
        </div>
      </section>

      {/* 7. INQUIRY FORM SECTION */}
      <section id="inquire" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#232323]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Dossier */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#CBA160] font-semibold">
                  Private Atelier Consultations
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B2F1F]">
                  Begin Your Story with La Perla
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#4A463F] font-light leading-relaxed">
                  We accept a curated number of matrimonial commissions each season to preserve uncompromising artistry and dedicated personal stewardship.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#EAE4DC]">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#CBA160] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-[0.15em] text-[#0B2F1F] font-medium">
                      Atelier Studio
                    </span>
                    <span className="text-sm text-[#4A463F] font-light">
                      Fawzi Al-Mulki Street, Abdoun, Amman, Jordan
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#CBA160] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-[0.15em] text-[#0B2F1F] font-medium">
                      Direct Concierge Line
                    </span>
                    <a
                      href="tel:+96265930000"
                      className="text-sm text-[#4A463F] hover:text-[#0B2F1F] font-light"
                    >
                      +962 6 593 0000 / +962 7 9999 9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#CBA160] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-[0.15em] text-[#0B2F1F] font-medium">
                      Electronic Inquiries
                    </span>
                    <a
                      href="mailto:concierge@laperlaevents.com"
                      className="text-sm text-[#4A463F] hover:text-[#0B2F1F] font-light"
                    >
                      concierge@laperlaevents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-[#CBA160] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs uppercase tracking-[0.15em] text-[#0B2F1F] font-medium">
                      Private Appointment Hours
                    </span>
                    <span className="text-sm text-[#4A463F] font-light">
                      Saturday – Thursday: 10:00 AM – 7:00 PM (By Appointment)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#EAE4DC] shadow-sm">
              {submitted ? (
                <div
                  id="inquiry-success-message"
                  className="text-center py-12 space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0B2F1F]/10 flex items-center justify-center text-[#0B2F1F]">
                    <CheckCircle2 className="w-8 h-8 text-[#0B2F1F]" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#0B2F1F]">
                    Thank You for Inquiring
                  </h3>
                  <p className="font-sans text-sm text-[#4A463F] max-w-md font-light leading-relaxed">
                    Our lead creative director and atelier concierge will review your celebration vision and contact you within 24 hours to schedule your private design consultation.
                  </p>
                  <button
                    id="submit-another-inquiry-btn"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-[#CBA160] text-[#0B2F1F] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F4EFEA]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form id="bespoke-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        id="inquiry-input-name"
                        type="text"
                        required
                        placeholder="e.g. Zeina Al-Majali"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-input-email"
                        type="email"
                        required
                        placeholder="zeina@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Telephone / WhatsApp *
                      </label>
                      <input
                        id="inquiry-input-phone"
                        type="tel"
                        required
                        placeholder="+962 7 9XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Anticipated Date
                      </label>
                      <input
                        id="inquiry-input-date"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Estimated Guest Count
                      </label>
                      <select
                        id="inquiry-select-guests"
                        value={formData.estimatedGuests}
                        onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      >
                        <option>Under 150 Guests (Intimate)</option>
                        <option>150 - 300 Guests</option>
                        <option>300 - 500 Guests</option>
                        <option>500 - 800 Guests (Royal Grandeur)</option>
                        <option>800+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                        Preferred Venue / Setting
                      </label>
                      <select
                        id="inquiry-select-venue"
                        value={formData.venuePreference}
                        onChange={(e) => setFormData({ ...formData, venuePreference: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors"
                      >
                        <option>The Ritz-Carlton, Amman</option>
                        <option>Grand Hyatt Amman</option>
                        <option>Sheraton Amman Al Nabil</option>
                        <option>W Hotel Amman</option>
                        <option>White Hall Events</option>
                        <option>Dunes Club Amman</option>
                        <option>Crown Dead Sea / Waterfront</option>
                        <option>Private Estate / Other Destination</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-2">
                      Tell Us About Your Vision & Inspirations
                    </label>
                    <textarea
                      id="inquiry-textarea-vision"
                      rows={4}
                      placeholder="Share details regarding your preferred aesthetic, color palettes, floral wishes, or questions..."
                      value={formData.visionNotes}
                      onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0B2F1F] hover:bg-[#15452F] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting To Atelier...</span>
                    ) : (
                      <>
                        <span>Submit Private Matrimonial Inquiry</span>
                        <Send className="w-3.5 h-3.5 text-[#CBA160]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
