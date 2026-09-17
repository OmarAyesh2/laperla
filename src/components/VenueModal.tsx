import React from 'react';
import { Venue } from '../types';
import { X, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react';

interface VenueModalProps {
  venue: Venue | null;
  onClose: () => void;
  onInquireVenue: (venue: Venue) => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({
  venue,
  onClose,
  onInquireVenue,
}) => {
  if (!venue) return null;

  return (
    <div
      id="venue-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] max-w-2xl w-full border border-[#CBA160]/40 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        <button
          id="close-venue-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#0B2F1F] text-[#CBA160] hover:bg-[#15452F] rounded-full transition-colors"
          aria-label="Close Venue Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#071F15]">
          <img
            src={venue.imageUrl}
            alt={venue.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F1F] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-bold bg-[#CBA160] text-[#071F15] px-2.5 py-1">
              {venue.badge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal pt-2">
              {venue.name}
            </h2>
            <div className="flex items-center space-x-2 text-xs text-white/80 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#CBA160]" />
              <span>{venue.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4 p-4 bg-white border border-[#EAE4DC] text-xs font-sans">
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Capacity
              </span>
              <span className="font-medium text-[#0B2F1F]">{venue.capacity}</span>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#CBA160]">
                Preferred Styling
              </span>
              <span className="font-medium text-[#0B2F1F]">{venue.style}</span>
            </div>
          </div>

          <p className="font-sans text-sm text-[#4A463F] leading-relaxed font-light">
            {venue.description}
          </p>

          <p className="font-sans text-xs text-[#6B6862] leading-relaxed italic bg-[#F4EFEA] p-4 border-l-2 border-[#CBA160]">
            Our atelier maintains direct engineering and design coordination with the banquet directors at {venue.name}, ensuring seamless logistics, rigging, and customized floral architecture.
          </p>

          <div className="pt-4 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="close-venue-modal-footer-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 border border-[#EAE4DC] text-xs uppercase tracking-[0.2em] font-sans text-[#6B6862]"
            >
              Back
            </button>

            <button
              id="inquire-this-venue-btn"
              onClick={() => {
                onClose();
                onInquireVenue(venue);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#0B2F1F] hover:bg-[#15452F] text-[#CBA160] font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <span>Plan Wedding at {venue.badge}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
