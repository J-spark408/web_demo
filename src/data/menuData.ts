export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    description: 'Begin your culinary journey with these exquisite appetizers.'
  },
  {
    id: 'main-courses',
    name: 'Main Courses',
    description: 'Savor our chef\'s signature entrées, crafted with the finest ingredients.'
  },
  {
    id: 'seafood',
    name: 'From the Ocean',
    description: 'Fresh seafood delicacies sourced sustainably from local waters.'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Complete your dining experience with our decadent sweet creations.'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Complement your meal with our selection of fine drinks.'
  }
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls infused with black truffle, served with saffron aioli',
    price: '$14',
    category: 'starters',
    image: 'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vegetarian']
  },
  {
    id: 2,
    name: 'Burrata Caprese',
    description: 'Creamy burrata cheese with heirloom tomatoes, basil, and aged balsamic reduction',
    price: '$16',
    category: 'starters',
    image: 'https://images.pexels.com/photos/11220209/pexels-photo-11220209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  {
    id: 3,
    name: 'Seared Scallops',
    description: 'Pan-seared sea scallops with cauliflower purée, pancetta, and micro herbs',
    price: '$18',
    category: 'starters',
    image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  
  // Main Courses
  {
    id: 4,
    name: 'Filet Mignon',
    description: '8oz grass-fed beef tenderloin with truffle mashed potatoes, seasonal vegetables, and red wine reduction',
    price: '$38',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Gluten-Free']
  },
  {
    id: 5,
    name: 'Herb-Crusted Rack of Lamb',
    description: 'Dijon and herb-crusted New Zealand lamb with rosemary jus, roasted fingerling potatoes, and glazed carrots',
    price: '$42',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Signature Dish']
  },
  {
    id: 6,
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, white truffle oil, and aged Parmesan',
    price: '$28',
    category: 'main-courses',
    image: 'https://images.pexels.com/photos/6249737/pexels-photo-6249737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vegetarian']
  },
  
  // Seafood
  {
    id: 7,
    name: 'Chilean Sea Bass',
    description: 'Miso-glazed sea bass with bok choy, shiitake mushrooms, and ginger-scallion sauce',
    price: '$40',
    category: 'seafood',
    image: 'https://images.pexels.com/photos/8697539/pexels-photo-8697539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Gluten-Free']
  },
  {
    id: 8,
    name: 'Lobster Linguine',
    description: 'Fresh Maine lobster with house-made linguine, cherry tomatoes, and lemon-butter sauce',
    price: '$46',
    category: 'seafood',
    image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Signature Dish']
  },
  
  // Desserts
  {
    id: 9,
    name: 'Molten Chocolate Cake',
    description: 'Warm chocolate cake with a liquid center, served with vanilla bean ice cream and raspberry coulis',
    price: '$14',
    category: 'desserts',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vegetarian']
  },
  {
    id: 10,
    name: 'Crème Brûlée',
    description: 'Classic vanilla bean custard with caramelized sugar crust and fresh berries',
    price: '$12',
    category: 'desserts',
    image: 'https://images.pexels.com/photos/8903468/pexels-photo-8903468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    tags: ['Vegetarian', 'Gluten-Free']
  },
  
  // Beverages
  {
    id: 11,
    name: 'Signature Craft Cocktails',
    description: 'Hand-crafted cocktails using premium spirits and fresh ingredients',
    price: '$16',
    category: 'beverages',
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 12,
    name: 'Wine Selection',
    description: 'Extensive wine list featuring both local and international selections',
    price: 'Various',
    category: 'beverages',
    image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];