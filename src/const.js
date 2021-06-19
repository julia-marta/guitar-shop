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

export const BREADCRUMBS = [`Главная`, `Каталог`, `Оформляем`];

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
  TWITTER: {
    name: `twitter`,
    width: 24,
    height: 24,
  }
};
