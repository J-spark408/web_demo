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
  full: `Gabin Korean BBQ was born from a desire to share the authentic taste of Korea, built upon a foundation of quality ingredients and time-honored culinary traditions.

Our story is deeply rooted in the expertise of our chefs, particularly our naengmyeon master.

With years of dedicated experience, they craft the perfect chilled buckwheat noodles, a refreshing and flavorful counterpoint to our premium grilled meats.

This dedication to both exceptional BBQ and the art of naengmyeon is what sets the Gabin experience apart.`
};
