export const HEADER_MENU_ITEMS = [`Каталог`, `Где купить?`, `О компании`, `Cервис-центры`];

export const USER_MENU_ITEMS = [
  {
    type: `map`,
    label: `Как проехать`,
  },
  {
    type: `search`,
    label: `Поиск по сайту`,
  },
  {
    type: `basket`,
    label: `Корзина`,
  }
];

export const SOCIAL_MENU_ITEMS = [
  {
    type: `facebook`,
    label: `Фейсбук`,
  },
  {
    type: `instagram`,
    label: `Инстаграм`,
  },
  {
    type: `twitter`,
    label: `Твиттер`,
  }
];

export const FOOTER_MENU_ITEMS = [
  {
    type: `about`,
    title: `О нас`,
    text: [`Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.`, `Все инструменты проверены, отстроены и доведены до идеала!`],
  },
  {
    type: `catalogue`,
    title: `Каталог`,
    items: [`Акустические гитары`, `Классические гитары`, `Электрогитары`, `Бас-гитары`, `Укулеле`],
  },
  {
    type: `information`,
    title: `Информация`,
    items: [`Где купить?`, `Блог`, `Вопрос - ответ`, `Возврат`, `Сервис-центры`],
  },
  {
    type: `contacts`,
    title: `Контакты`,
    text: [`г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.`, {type: `phone`, content: `8-812-500-50-50`}, `Режим работы:`, {type: `clock`, content: `с 11:00 до 20:00,`}, `без выходных.`],
  },
];

export const SORTING_ITEMS = [`по цене`, `по популярности`];

export const SORTING_TOGGLE_ITEMS = [
    {
      type: `toggle_up`,
      label: `По возрастанию`,
    },
    {
      type: `toggle_down`,
      label: `По убыванию`,
    },
  ];

export const BREADCRUMBS = [`Главная`, `Каталог`, `Оформляем`];

export const STARS = [`1`, `2`, `3`, `4`, `5`];

export const GuitarImage = {
  "SO757575": `guitar1`,
  "TK129049": `guitar2`,
  "RO111111": `guitar3`,
  "TK436457": `guitar4`,
  "DI192138": `guitar5`,
  "SO934345": `guitar1`,
  "DI082347": `guitar3`,
  "SO135646": `guitar6`,
  "VO154751": `guitar5`,
  "укулеле": `guitar3`,
  "акустическая гитара": `guitar5`,
  "электрогитара": `guitar1`,
};

export const AppRoute = {
  ROOT: `/`,
  CART: `/cart`,
};

export const PageType = {
  MAIN: `catalogue`,
  INNER: `cart`,
};

export const PageTitle = {
  CATALOGUE: `Каталог гитар`,
  CART: `Корзина`,
};

export const IconType = {
  ARROW: {
    name: `arrow`,
    width: 16,
    height: 16,
  },
  BASKET: {
    name: `basket`,
    width: 16,
    height: 18,
  },
  CART: {
    name: `cart`,
    width: 12,
    height: 13,
  },
  CLOCK: {
    name: `clock`,
    width: 10,
    height: 10,
  },
  FACEBOOK: {
    name: `facebook`,
    width: 24,
    height: 24,
  },
  INSTAGRAM: {
    name: `instagram`,
    width: 24,
    height: 24,
  },
  MAP: {
    name: `map`,
    width: 40,
    height: 40,
  },
  PHONE: {
    name: `phone`,
    width: 10,
    height: 10,
  },
  SEARCH: {
    name: `search`,
    width: 40,
    height: 40,
  },
  STAR: {
    name: `star`,
    width: 12,
    height: 12,
  },
  STAR_EMPTY: {
    name: `star-empty`,
    width: 12,
    height: 12,
  },
  TOGGLE_DOWN: {
    name: `toggle-down`,
    width: 22,
    height: 22,
  },
  TOGGLE_UP: {
    name: `toggle-up`,
    width: 22,
    height: 22,
  },
  TWITTER: {
    name: `twitter`,
    width: 24,
    height: 24,
  }
};
