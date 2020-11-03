/* MENU */
export const MENU_ID = {
  PRODUCTS: 1,
  INSPIRATIONS: 2,
  ABOUT: 3,
  BASKET: 4
};

export const MENU_PATHS = {
  HOME_PAGE: '/',
  PRODUCTS: '/products',
  INSPIRATIONS: '/inspirations',
  ABOUT: '/about',
  BASKET: '/basket'
};

export const MENU_NAMES = {
  HOME_PAGE: 'Home Page',
  PRODUCTS: 'All our products',
  INSPIRATIONS: 'Inspiration',
  ABOUT: 'About OS',
  BASKET: 'Basket'
};

export const menu = [
  {
    id: MENU_ID.PRODUCTS,
    name: 'All our products',
    link: MENU_PATHS.PRODUCTS
  },
  {
    id: MENU_ID.INSPIRATIONS,
    name: 'Inspiration for the office',
    link: MENU_PATHS.INSPIRATIONS
  },
  {
    id: MENU_ID.ABOUT,
    name: 'About OS',
    link: MENU_PATHS.ABOUT
  }
];
