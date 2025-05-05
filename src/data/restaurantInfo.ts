export interface OpeningHours {
  day: string;
  hours: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  location: {
    lat: number;
    lng: number;
  };
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
}

export const openingHours: OpeningHours[] = [
  { day: 'Monday', hours: '11:30 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '11:30 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '11:30 AM - 10:00 PM' },
  { day: 'Thursday', hours: '11:30 AM - 10:00 PM' },
  { day: 'Friday', hours: '11:30 AM - 11:00 PM' },
  { day: 'Saturday', hours: '11:30 AM - 11:00 PM' },
  { day: 'Sunday', hours: '10:30 AM - 9:00 PM' }
];

export const contactInfo: ContactInfo = {
  phone: '(213) 123-4567',
  email: 'la@gabinkoreangrill.com',
  address: {
    street: '400 S. Western Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90020',
    country: 'United States'
  },
  location: {
    lat: 40.7128,
    lng: -74.0060
  }
};

export const socialMedia: SocialMedia[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: 'facebook'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: 'instagram'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter'
  }
];

export const restaurantDescription = {
  short: 'Gabin LA is a Korean Grill restaurant offering exquisite cuisine in an elegant atmosphere.',
  full: `Gabin LA has been a culinary landmark in the heart of the city, offering an exceptional dining experience that combines traditional flavors with innovative techniques.

Our executive chef, Marco Bianchi, brings over 20 years of international experience to create dishes that are both familiar and surprising, using only the freshest seasonal ingredients sourced from local farmers and producers.

The elegant yet comfortable atmosphere, attentive service, and carefully curated wine list complement the outstanding cuisine, making a the perfect destination for special occasions, business dinners, or simply a memorable night out.

We pride ourselves on our commitment to sustainability, supporting local agriculture, and minimizing our environmental footprint while providing an unforgettable dining experience.`
};