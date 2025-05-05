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
    id: "combos",
    name: "Combo",
    description: "Begin your culinary journey with these exquisite appetizers.",
  },
  {
    id: "beef",
    name: "Beef",
    description:
      "Savor our chef's signature entrées, crafted with the finest ingredients.",
  },
  {
    id: "pork",
    name: "Pork",
    description:
      "Fresh seafood delicacies sourced sustainably from local waters.",
  },
  {
    id: "noodle",
    name: "Noodle",
    description:
      "Complete your dining experience with our decadent sweet creations.",
  },
  {
    id: "drinks",
    name: "Drink",
    description: "Complement your meal with our selection of fine drinks.",
  },
];

export const menuItems: MenuItem[] = [
  // Combos
  {
    id: 1,
    name: "Beef Combo",
    description:
      "Prime Boneless Short Rib, Seasoned Prime Boneless Short Rib, Brisket, Jigae (Kimchi or Soybean Paste)",
    price: "$99",
    category: "combos",
    image:
      "https://cdn.vox-cdn.com/thumbor/vSybHsDuxugoCIOwKkLs2C7vMSg=/0x0:720x477/1200x900/filters:focal(303x182:417x296):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71829039/King_Chang.0.jpeg",
    tags: ["Beef", "Jigae"],
  },
  {
    id: 2,
    name: "Pork Combo",
    description:
      "Pork Belly, Pork Jowl, Thinnly Pork Belly, Jigae (Kimchi or Soybean Paste)",
    price: "$79",
    category: "combos",
    image:
      "https://cavilllane.com.au/storage/2023/09/korean-kitchen-700x783-1.jpg",
    tags: ["Pork", "Jigae"],
  },
  {
    id: 3,
    name: "Gabin Combo",
    description:
      "LA Galbi, Brisket, Pork Belly, Jigae (Kimchi or Soybean Paste), Naengmyun",
    price: "$149",
    category: "combos",
    image:
      "https://wooltariusa.com/cdn/shop/files/MOSTLOVEDK-BBQ.jpg?v=1700170305",
    tags: ["Beef", "Pork", "Marinated", "Jigae", "Noodle"],
  },

  // Main Courses
  {
    id: 4,
    name: "LA Galbi",
    description: "",
    price: "$52",
    category: "beef",
    image:
      "https://www.tastingtable.com/img/gallery/10-best-cuts-of-meat-for-korean-bbq/short-rib-kalbi-1693923619.jpg",
    tags: ["Beef", "Marinated"],
  },
  {
    id: 5,
    name: "Brisket",
    description: "",
    price: "$42",
    category: "beef",
    image:
      "https://cdn.vox-cdn.com/thumbor/PCY9h5HTtqGyfiFsAFfyu2D0rM4=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/25355683/2024_03_22_KTeamBBQ_029.jpg",
    tags: ["Beef", "Thin Cut"],
  },
  {
    id: 6,
    name: "Beef Belly",
    description: "",
    price: "$38",
    category: "beef",
    image:
      "https://asianinspirations.com.au/wp-content/uploads/2024/01/Best-Meats-to-Savour-in-Korean-Barbecue_10-Brisket.jpg",
    tags: ["Beef", "Thin Cut"],
  },

  // Seafood
  {
    id: 7,
    name: "Pork Belly",
    description: "",
    price: "$40",
    category: "pork",
    image:
      "https://youngocean.com/cdn/shop/files/porkbelly.jpg?v=1724882634",
    tags: ["Pork"],
  },
  {
    id: 8,
    name: "Pork Jowl",
    description: "",
    price: "$46",
    category: "pork",
    image:
      "https://youngocean.com/cdn/shop/products/PorkJowl28x5.jpg?v=1707433873",
    tags: ["Pork"],
  },
  {
    id: 9,
    name: "Thinnly Cut Pork",
    description: "",
    price: "$14",
    category: "pork",
    image:
      "https://i0.wp.com/thebutteragedsteak.com/wp-content/uploads/sites/7/2021/06/Pork-Belly-Slice.jpg?fit=1024%2C1024&ssl=1",
    tags: ["Pork", "Thin Cut"],
  },

  // Desserts
  {
    id: 10,
    name: "Naengmyeon",
    description: "Korean Cold Buck Wheat Noodles",
    price: "$18",
    category: "noodle",
    image:
      "https://i.pinimg.com/736x/67/59/a2/6759a2ffd465698c11a6d98d718807ee.jpg",
    tags: ["Noodle"],
  },

  // Beverages
  {
    id: 11,
    name: "Soju",
    description: "Fresh, Original, Flavor",
    price: "$13",
    category: "drinks",
    image:
      "https://static.bartenderspiritsawards.com/en/blog/images/w/1200/BartenderSpiritsAwardsUS-06282022033828000000-62babe046ee50.jpg",
    tags: ["Soju"],
  },
  {
    id: 12,
    name: "Beer",
    description: "Terra, Cass, Krush",
    price: "$9",
    category: "drinks",
    image:
      "https://beertasting.app/storage/media/2828034fdce464168d6d65c883514709/conversions/2024-11-10,-South-Korea,-Clear-Glass-Bottles-optimized.jpg",
      tags: ["Beer"],
    },
];
