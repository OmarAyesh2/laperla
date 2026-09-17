export type ActiveScreen = 'home' | 'portfolio';

export type PortfolioCategory =
  | 'all'
  | 'royal'
  | 'floral'
  | 'waterfront'
  | 'intimate';

export interface PortfolioItem {
  id: string;
  prodNumber: string;
  title: string;
  subtitle: string;
  category: 'royal' | 'floral' | 'waterfront' | 'intimate';
  categoryLabel: string;
  venue: string;
  location: string;
  season: string;
  guests: string;
  imageUrl: string;
  description: string;
  palette: string[];
  keyHighlights: string[];
  quote?: string;
  isFeatured?: boolean;
}

export interface Venue {
  id: string;
  name: string;
  badge: string;
  location: string;
  description: string;
  capacity: string;
  style: string;
  imageUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  estimatedGuests: string;
  venuePreference: string;
  notes: string;
}
