import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Calendar, Users, Building, Sparkles } from 'lucide-react';
import { VENUES } from '../data/content';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVenue?: string;
  preselectedProduction?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedVenue,
  preselectedProduction,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    estimatedGuests: '300 - 500 Guests',
    venuePreference: preselectedVenue || 'The Ritz-Carlton, Amman',
    visionNotes: preselectedProduction
      ? `Inspired by ${preselectedProduction}. We would love to discuss a similar haute scenography aesthetic.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedVenue) {
      setFormData((prev) => ({ ...prev, venuePreference: preselectedVenue }));
    }
  }, [preselectedVenue]);

  useEffect(() => {
    if (preselectedProduction) {
      setFormData((prev) => ({
        ...prev,
        visionNotes: `Inquiring regarding aesthetic style: ${preselectedProduction}`,
      }));
    }
  }, [preselectedProduction]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="inquiry-dialog-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative bg-[#FAF8F5] max-w-xl w-full border border-[#CBA160]/40 shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Close Button */}
        <button
          id="close-inquiry-modal-btn"
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#0B2F1F] text-[#CBA160] hover:bg-[#15452F] rounded-full transition-colors"
          aria-label="Close Inquiry Form"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#0B2F1F] text-white p-6 sm:p-8 space-y-2">
          <div className="flex items-center space-x-2 text-[#CBA160]">
            <Sparkles className="w-4 h-4 text-[#CBA160]" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium">
              Private Atelier Consultation
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Begin Your Celebration Journey
          </h2>
          <p className="font-sans text-xs text-white/70 font-light">
            Abdoun Atelier • Dedicated Personal Stewardship
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div
              id="modal-inquiry-success"
              className="text-center py-8 space-y-5 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#0B2F1F]/10 flex items-center justify-center text-[#0B2F1F]">
                <CheckCircle2 className="w-8 h-8 text-[#0B2F1F]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0B2F1F]">
                Your Inquiry Has Been Received
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4A463F] max-w-sm font-light leading-relaxed">
                Our concierge in Abdoun, Amman will reach out via WhatsApp or telephone within 24 hours to schedule your private design preview.
              </p>
              <button
                id="modal-inquiry-dismiss-btn"
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#0B2F1F] text-[#CBA160] text-xs uppercase tracking-[0.2em] font-medium"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+962 7 9XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={formData.estimatedGuests}
                    onChange={(e) => setFormData({ ...formData, estimatedGuests: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                  >
                    <option>Under 150 Guests</option>
                    <option>150 - 300 Guests</option>
                    <option>300 - 500 Guests</option>
                    <option>500 - 800 Guests</option>
                    <option>800+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                  Preferred Venue
                </label>
                <select
                  value={formData.venuePreference}
                  onChange={(e) => setFormData({ ...formData, venuePreference: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none"
                >
                  {VENUES.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.location})
                    </option>
                  ))}
                  <option value="Private Residence / Other">Private Residence / Other</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase tracking-[0.15em] text-[#0B2F1F] font-medium mb-1">
                  Aesthetic Notes or Special Wishes
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding your preferred styling, florals, or inspirations..."
                  value={formData.visionNotes}
                  onChange={(e) => setFormData({ ...formData, visionNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4DC] text-sm text-[#232323] focus:border-[#CBA160] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#0B2F1F] hover:bg-[#15452F] text-[#FAF8F5] font-sans text-xs uppercase tracking-[0.25em] font-semibold transition-all flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Submit Private Consultation Request</span>
                    <Send className="w-3.5 h-3.5 text-[#CBA160]" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
