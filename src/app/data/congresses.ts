export type AvailabilityStatus = 'rooms-available' | 'limited-availability' | 'request-rooms';

export interface HotelOption {
  name: string;
  stars: number;
  distanceKm: number;
  category: string;
  priceFrom: number;
  availability: AvailabilityStatus;
}

export interface Congress {
  id: string;
  name: string;
  city: string;
  country: string;
  location: string;
  dateRange: string;
  availability: AvailabilityStatus;
  description: string;
  hotels: HotelOption[];
}

export const congresses: Congress[] = [
  {
    id: 'escmid',
    name: 'European Society of Clinical Microbiology and Infectious Diseases',
    city: 'Munich',
    country: 'Germany',
    location: 'Munich, Germany',
    dateRange: '17–21 April 2026',
    availability: 'rooms-available',
    description: 'One of the largest infectious disease congresses in Europe. Hotel availability in Munich is critically limited during this period — we have secured contingents across central and near-venue properties.',
    hotels: [
      { name: 'Sofitel Munich Bayerpost', stars: 5, distanceKm: 0.8, category: 'Luxury', priceFrom: 320, availability: 'rooms-available' },
      { name: 'Marriott Munich', stars: 4, distanceKm: 1.2, category: 'Superior', priceFrom: 245, availability: 'limited-availability' },
      { name: 'Holiday Inn Munich – City Centre', stars: 4, distanceKm: 2.1, category: 'Standard', priceFrom: 185, availability: 'rooms-available' },
      { name: 'NH Collection Munich Bavaria', stars: 4, distanceKm: 1.5, category: 'Superior', priceFrom: 210, availability: 'limited-availability' },
    ]
  },
  {
    id: 'easd',
    name: 'European Association for the Study of Diabetes',
    city: 'Hamburg',
    country: 'Germany',
    location: 'Hamburg, Germany',
    dateRange: '28 September – 2 October 2026',
    availability: 'request-rooms',
    description: 'A major annual event for diabetes research. Hotel availability in Hamburg is limited during this period — early booking is essential.',
    hotels: [
      { name: 'Radisson Blu Hotel Hamburg', stars: 4, distanceKm: 0.5, category: 'Superior', priceFrom: 280, availability: 'request-rooms' },
      { name: 'Empire Riverside Hotel', stars: 4, distanceKm: 1.0, category: 'Standard', priceFrom: 200, availability: 'request-rooms' },
    ]
  },
  {
    id: 'eha',
    name: 'European Hematology Association Congress',
    city: 'Milan',
    country: 'Italy',
    location: 'Milan, Italy',
    dateRange: '11–14 June 2026',
    availability: 'limited-availability',
    description: 'The EHA Congress is the premier hematology event in Europe. Limited hotel availability remains in central Milan.',
    hotels: [
      { name: 'Marriott Milan', stars: 5, distanceKm: 0.7, category: 'Luxury', priceFrom: 350, availability: 'limited-availability' },
      { name: 'NH Collection Milano President', stars: 4, distanceKm: 1.5, category: 'Superior', priceFrom: 270, availability: 'limited-availability' },
    ]
  },
  {
    id: 'esmo',
    name: 'European Society for Medical Oncology Congress',
    city: 'Prague',
    country: 'Czech Republic',
    location: 'Prague, Czech Republic',
    dateRange: '23–27 October 2026',
    availability: 'request-rooms',
    description: 'One of the world\'s leading oncology events. Hotel rooms in Prague Congress Center area are fully allocated — we can source remaining inventory.',
    hotels: [
      { name: 'Hilton Prague', stars: 5, distanceKm: 0.3, category: 'Luxury', priceFrom: 310, availability: 'request-rooms' },
      { name: 'Don Giovanni Hotel', stars: 4, distanceKm: 0.8, category: 'Superior', priceFrom: 240, availability: 'request-rooms' },
    ]
  },
  {
    id: 'esc',
    name: 'European Society of Cardiology Congress',
    city: 'London',
    country: 'United Kingdom',
    location: 'London, United Kingdom',
    dateRange: '27–31 August 2026',
    availability: 'limited-availability',
    description: 'The world\'s largest cardiology congress. London ExCeL area hotels have limited remaining availability.',
    hotels: [
      { name: 'Novotel London ExCeL', stars: 4, distanceKm: 0.2, category: 'Standard', priceFrom: 290, availability: 'limited-availability' },
      { name: 'ibis London ExCeL', stars: 3, distanceKm: 0.4, category: 'Standard', priceFrom: 190, availability: 'limited-availability' },
    ]
  },
  {
    id: 'eular',
    name: 'European Alliance of Associations for Rheumatology',
    city: 'Vienna',
    country: 'Austria',
    location: 'Vienna, Austria',
    dateRange: '3–6 June 2026',
    availability: 'rooms-available',
    description: 'The EULAR Annual Congress is the leading European event in rheumatology. We have secured contingents across central Vienna properties.',
    hotels: [
      { name: 'Grand Hotel Wien', stars: 5, distanceKm: 0.6, category: 'Luxury', priceFrom: 380, availability: 'rooms-available' },
      { name: 'Marriott Vienna', stars: 5, distanceKm: 0.9, category: 'Superior', priceFrom: 295, availability: 'rooms-available' },
      { name: 'NH Vienna Airport', stars: 4, distanceKm: 2.0, category: 'Standard', priceFrom: 195, availability: 'rooms-available' },
    ]
  },
];

export function getCongressById(id: string): Congress | undefined {
  return congresses.find(c => c.id === id);
}

export function getAvailabilityLabel(status: AvailabilityStatus): string {
  switch (status) {
    case 'rooms-available': return 'Rooms Available';
    case 'limited-availability': return 'Limited Availability';
    case 'request-rooms': return 'Request Rooms';
  }
}
