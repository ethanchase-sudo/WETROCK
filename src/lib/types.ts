export interface RoomType {
  id: string;
  code: string;
  name: string;
  concept: string;
  description: string;
  story: string;
  image: string;
  gallery: string[];
  sleeps: number;
  bed: string;
  baths: number;
  rateFrom: number;
  size: string;
  view: string;
  amenities: string[];
  features: { label: string; value: string }[];
  slug: string;
  category: 'room' | 'camping' | 'retreat' | 'compound';
}

export interface Experience {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  price: string;
  season: string;
  category: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

export interface BookingRequest {
  id: string;
  check_in: string;
  check_out: string;
  room_id: string;
  room_name: string;
  guests: number;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  add_ons: string[];
  notes: string;
  status: 'pending' | 'confirmed' | 'declined';
  created_at: string;
}

export interface PageMeta {
  path: string;
  label: string;
  title: string;
  subtitle: string;
  section: string;
}
