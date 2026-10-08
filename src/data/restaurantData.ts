export interface MenuItem {
  id: string;
  name: string;
  turkishName: string;
  category: 'tantuni' | 'sides' | 'drinks' | 'desserts';
  description: string;
  priceTL: number;
  tags: string[];
  image?: string;
  highlight?: string;
  isPopular?: boolean;
}

export interface Branch {
  id: 'lefke' | 'guzelyurt';
  name: string;
  shortName: string;
  region: string;
  address: string;
  landmark: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  mapsUrl: string;
  hours: string;
  deliveryZones: string[];
}

export const BRANCHES: Record<'lefke' | 'guzelyurt', Branch> = {
  lefke: {
    id: 'lefke',
    name: 'Çınar Tantuni Lefke',
    shortName: 'Lefke',
    region: 'Gemikonağı / Lefke',
    address: 'Ecevit Caddesi, Deniz Boyu Yolu, Gemikonağı, Lefke',
    landmark: 'Steps from European University of Lefke (LAÜ)',
    phone: '+905338881234',
    phoneDisplay: '+90 (533) 888 12 34',
    whatsapp: '905338881234',
    mapsUrl: 'https://maps.google.com/?q=Lefke+KKTC',
    hours: '11:00 AM - 02:00 AM Daily',
    deliveryZones: ['Gemikonağı', 'LAÜ Kampüs', 'Lefke Merkez', 'Yedidalga'],
  },
  guzelyurt: {
    id: 'guzelyurt',
    name: 'Çınar Tantuni Güzelyurt',
    shortName: 'Güzelyurt',
    region: 'Merkez / Güzelyurt',
    address: 'Kutlu Adalı Bulvarı No: 18, Güzelyurt Merkez',
    landmark: 'City Center, Near Main Terminal',
    phone: '+905338775678',
    phoneDisplay: '+90 (533) 877 56 78',
    whatsapp: '905338775678',
    mapsUrl: 'https://maps.google.com/?q=Guzelyurt+KKTC',
    hours: '11:00 AM - 01:30 AM Daily',
    deliveryZones: ['Güzelyurt Merkez', 'Bostancı', 'Yayla', 'Aydınköy'],
  },
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'et-durum',
    name: 'Biftek Et Tantuni Dürüm',
    turkishName: 'Lavaş Dürüm Et Tantuni',
    category: 'tantuni',
    description: 'Tender prime beef diced finely, flash seared in a traditional copper sac with Mediterranean spices, fresh parsley, and sumac onions wrapped in thin lavash.',
    priceTL: 240,
    tags: ['Signature', '100% Beef', 'Best Seller'],
    image: '/images/tantuni-beef.jpg',
    highlight: 'Classic Mersin Recipe',
    isPopular: true,
  },
  {
    id: 'yogurtlu-et',
    name: 'Yoğurtlu Biftek Tantuni',
    turkishName: 'Yoğurtlu Tantuni Tabağı',
    category: 'tantuni',
    description: 'Sliced bite-sized beef dürüm rolls topped with chilled garlic yogurt, sizzling browned butter, and roasted chili flakes.',
    priceTL: 290,
    tags: ['Chef Signature', 'Garlic Yogurt', 'Brown Butter'],
    image: '/images/tantuni-yogurtlu.jpg',
    highlight: 'House Favorite',
    isPopular: true,
  },
  {
    id: 'tavuk-durum',
    name: 'Tavuk Tantuni Dürüm & Somun',
    turkishName: 'Tavuk Tantuni',
    category: 'tantuni',
    description: 'Juicy spiced chicken breast pieces pan-seared with diced tomatoes, sumac onions, and fresh lemon. Available in crisp crusty somun bread or thin lavash.',
    priceTL: 180,
    tags: ['High Protein', 'Student Choice'],
    image: '/images/tantuni-chicken.jpg',
    highlight: 'Light and Crisp',
    isPopular: true,
  },
  {
    id: 'et-somun',
    name: 'Somun Ekmek Arası Et Tantuni',
    turkishName: 'Çıtır Ekmek Arası Et',
    category: 'tantuni',
    description: 'Freshly baked local crusty somun bread filled with sizzling diced beef, vine tomatoes, sumac onions, and lemon.',
    priceTL: 240,
    tags: ['Crusty Bread', 'Generous Portion'],
    image: '/images/tantuni-beef.jpg',
    highlight: 'Crispy Bread Bite',
  },
  {
    id: 'ayran',
    name: 'Yayık Köpüklü Ayran',
    turkishName: 'Açık Ayran',
    category: 'drinks',
    description: 'Traditional Turkish salted yogurt drink with dense foam served ice cold in a chilled cup.',
    priceTL: 45,
    tags: ['Cold Drink', 'Traditional'],
    highlight: 'Chilled Velvet Foam',
    isPopular: true,
  },
  {
    id: 'salgam',
    name: 'Adana Şalgam Suyu',
    turkishName: 'Acılı ve Acısız Şalgam',
    category: 'drinks',
    description: 'Fermented purple carrot and turnip beverage, served cold with pickled chili pepper.',
    priceTL: 45,
    tags: ['Cold Drink', 'Authentic'],
    highlight: 'Choice of Mild or Spicy',
  },
  {
    id: 'kunefe',
    name: 'Hatay Usulü Sıcak Künefe',
    turkishName: 'Peynirli Fıstıklı Künefe',
    category: 'desserts',
    description: 'Crispy golden shredded kadayıf pastry baked with molten unsalted cheese, soaked in warm syrup, garnished with Antep pistachios.',
    priceTL: 160,
    tags: ['Warm Dessert', 'Antep Pistachio'],
    highlight: 'Baked to Order',
    isPopular: true,
  },
  {
    id: 'sutlac',
    name: 'Geleneksel Fırın Sütlaç',
    turkishName: 'Fırınlanmış Sütlaç',
    category: 'desserts',
    description: 'Slow-baked creamy Turkish rice pudding with caramelized golden top and crushed hazelnuts.',
    priceTL: 110,
    tags: ['Chilled', 'Classic'],
    highlight: 'Smooth and Creamy',
  },
];
