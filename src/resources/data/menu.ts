export interface MenuOptions {
  name: string;
  link: string;
}

export interface Menu {
  name: string;
  link: string;
  menuOptions?: Array<MenuOptions>;
}

export interface Active {
  [key: string]: {
    activeIndex: number;
    selectedIndex?: number;
  };
}

export const active: Active = {
  home: { activeIndex: 0 },
  services: { activeIndex: 1, selectedIndex: 0 },
  'custom-software': {
    activeIndex: 1,
    selectedIndex: 1,
  },
  'mobile-apps': {
    activeIndex: 1,
    selectedIndex: 2,
  },
  websites: {
    activeIndex: 1,
    selectedIndex: 3,
  },
  revolution: { activeIndex: 2 },
  about: { activeIndex: 3 },
  contact: { activeIndex: 4 },
  estimate: { activeIndex: 5 },
};

// remove services from when convertion to poper and meulist
export const menu: Array<Menu> = [
  { name: 'Home', link: '/' },
  {
    name: 'Services',
    link: '/services',
    menuOptions: [
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Custom Software Development',
        link: '/custom-software',
      },
      {
        name: 'iOS/Android App Development',
        link: '/mobile-apps',
      },
      {
        name: 'Website Development',
        link: '/websites',
      },
    ],
  },
  { name: 'The Revolution', link: '/revolution' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/contact' },
];

export const footerLinks = [
  [{ name: 'Home', link: '/' }],
  [
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Custom Software Development',
      link: '/custom-software',
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobile-apps',
    },
    {
      name: 'Website Development',
      link: '/websites',
    },
  ],
  [
    { name: 'The Revolution', link: '/revolution' },
    { name: 'Vision', link: '/revolution' },
    { name: 'Technology', link: '/revolution' },
    { name: 'Process', link: '/revolution' },
  ],
  [
    { name: 'About us ', link: '/about' },
    { name: 'History', link: '/revolution' },
    { name: 'Team', link: '/revolution' },
    { name: 'Process', link: '/revolution' },
  ],
  [{ name: 'Contact Us', link: '/contact' }],
];
