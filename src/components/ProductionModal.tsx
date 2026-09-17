import React from 'react';
import { PortfolioItem } from '../types';
import { X, MapPin, Users, Calendar, Sparkles, ArrowRight, Check } from 'lucide-react';

interface ProductionModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquireAboutThis: (item: PortfolioItem) => void;
}

export const ProductionModal: React.FC<ProductionModalProps> = ({
  item,
  onClose,
  onInquireAboutThis,
}) => {
  if (!item) return null;

  return (
    <div
      id="production-journal-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] max-w-4xl w-full border border-[#CBA160]/40 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Close Button */}
        <button
          id="close-journal-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#0B2F1F] text-[#CBA160] hover:bg-[#15452F] rounded-full transition-colors"
          aria-label="Close Production Journal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#071F15]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F1F] via-[#0B2F1F]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex items-center space-x-2 text-[#CBA160]">
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-bold bg-[#071F15]/80 px-2.5 py-1">
                {item.prodNumber}
              </span>
              <span className="text-xs tracking-wider uppercase text-white/80 font-sans">
                {item.categoryLabel}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
              {item.title}
            </h2>
            <p className="font-display italic text-base sm:text-lg text-[#DFBE84]">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-[#EAE4DC] text-xs font-sans">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Venue
              </span>
              <span className="font-medium text-[#0B2F1F]">{item.venue}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Location
              </span>
              <span className="font-medium text-[#0B2F1F]">{item.location}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Season
              </span>
              <span className="font-medium text-[#0B2F1F]">{item.season}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Scale
              </span>
              <span className="font-medium text-[#0B2F1F]">{item.guests}</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl text-[#0B2F1F]">Editorial Scenography Notes</h3>
            <p className="font-sans text-sm text-[#4A463F] leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Key Production Highlights */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-[#0B2F1F]">Key Production Details</h3>
            <div className="space-y-2">
              {item.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#4A463F]">
                  <Check className="w-4 h-4 text-[#CBA160] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette Swatches */}
          <div className="space-y-2">
            <h3 className="font-serif text-sm text-[#0B2F1F] uppercase tracking-wider">
              Harmonized Atelier Palette
            </h3>
            <div className="flex items-center space-x-3">
              {item.palette.map((color, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div
                    className="w-7 h-7 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                  <span className="text-[10px] text-[#6B6862] font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          {item.quote && (
            <div className="p-4 bg-[#F4EFEA] border-l-2 border-[#CBA160] italic font-display text-base text-[#0B2F1F]">
              "{item.quote}"
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="close-journal-modal-footer-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 border border-[#EAE4DC] text-xs uppercase tracking-[0.2em] font-sans text-[#6B6862] hover:text-[#0B2F1F]"
            >
              Close Journal
            </button>

            <button
              id="modal-inquire-this-production-btn"
              onClick={() => {
                onClose();
                onInquireAboutThis(item);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0B2F1F] hover:bg-[#15452F] text-[#CBA160] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <span>Inquire About This Aesthetic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
