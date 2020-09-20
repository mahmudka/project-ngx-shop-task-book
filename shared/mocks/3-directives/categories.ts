export interface ICategory {
  _id: string;
  name: string;
  subCategories: ISubCategory[];
}

export interface ISubCategory {
  _id: string;
  name: string;
  category: string;
}

export const categories: ICategory[] = [
  {
    _id: '5f105ea0e5e8b80ec6aad4ef',
    name: 'Инструменты',
    subCategories: [
      {
        _id: 'elektroinstrumenty-i-texnika-dlya-sada',
        name: 'Электроинструменты и техника для сада',
        category: '5f105ea0e5e8b80ec6aad4ef',
      },
      {
        _id: 'stroitelstvo-izmerenie-i-uborka',
        name: 'Строительство, измерение и уборка',
        category: '5f105ea0e5e8b80ec6aad4ef',
      },
      {
        _id: 'ruchnoj-instrument-i-osnastka',
        name: 'Ручной инструмент и оснастка',
        category: '5f105ea0e5e8b80ec6aad4ef',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4ee',
    name: 'Автотовары',
    subCategories: [
      {
        _id: 'avtoelektronika-i-protivougonnye-sistemy',
        name: 'Автоэлектроника и противоугонные системы',
        category: '5f105ea0e5e8b80ec6aad4ee',
      },
      {
        _id: 'avtozvuk',
        name: 'Автозвук',
        category: '5f105ea0e5e8b80ec6aad4ee',
      },
      {
        _id: 'naruzhnye-i-vnutrisalonnye-aksessuary',
        name: 'Наружные и внутрисалонные аксессуары',
        category: '5f105ea0e5e8b80ec6aad4ee',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4ed',
    name: 'Офис и сеть',
    subCategories: [
      {
        _id: 'orgtexnika-i-ofisnoe-oborudovanie',
        name: 'Оргтехника и офисное оборудование',
        category: '5f105ea0e5e8b80ec6aad4ed',
      },
      {
        _id: 'marshrutizatory-i-prochee-besprovodnoe-oborudovanie',
        name: 'Маршрутизаторы и прочее беспроводное оборудование',
        category: '5f105ea0e5e8b80ec6aad4ed',
      },
      {
        _id: 'professionalnoe-setevoe-oborudovanie',
        name: 'Профессиональное сетевое оборудование',
        category: '5f105ea0e5e8b80ec6aad4ed',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4e9',
    name: 'Бытовая техника',
    subCategories: [
      {
        _id: 'tovary-dlya-kuxni',
        name: 'Товары для кухни',
        category: '5f105ea0e5e8b80ec6aad4e9',
      },
      {
        _id: 'tovary-dlya-doma',
        name: 'Товары для дома',
        category: '5f105ea0e5e8b80ec6aad4e9',
      },
      {
        _id: 'krasota-i-zdorove',
        name: 'Красота и здоровье',
        category: '5f105ea0e5e8b80ec6aad4e9',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4ea',
    name: 'Смартфоны',
    subCategories: [
      {
        _id: 'smartfony-i-gadzhety',
        name: 'Смартфоны и гаджеты',
        category: '5f105ea0e5e8b80ec6aad4ea',
      },
      {
        _id: 'fototexnika',
        name: 'Фототехника',
        category: '5f105ea0e5e8b80ec6aad4ea',
      },
      {
        _id: 'planshety-elektronnye-knigi',
        name: 'Планшеты, электронные книги',
        category: '5f105ea0e5e8b80ec6aad4ea',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4eb',
    name: 'ТВ и Развлечения',
    subCategories: [
      {
        _id: 'televizory-i-aksessuary',
        name: 'Телевизоры и аксессуары',
        category: '5f105ea0e5e8b80ec6aad4eb',
      },
      {
        _id: 'igry-i-xobbi',
        name: 'Игры и хобби',
        category: '5f105ea0e5e8b80ec6aad4eb',
      },
      {
        _id: 'audiotexnika',
        name: 'Аудиотехника',
        category: '5f105ea0e5e8b80ec6aad4eb',
      },
    ],
  },
  {
    _id: '5f105ea0e5e8b80ec6aad4ec',
    name: 'Компьютеры',
    subCategories: [
      {
        _id: 'kompyutery-noutbuki-i-po',
        name: 'Компьютеры, ноутбуки и ПО',
        category: '5f105ea0e5e8b80ec6aad4ec',
      },
      {
        _id: 'komplektuyushhie-dlya-pk',
        name: 'Комплектующие для ПК',
        category: '5f105ea0e5e8b80ec6aad4ec',
      },
      {
        _id: 'periferiya-i-aksessuary',
        name: 'Периферия и аксессуары',
        category: '5f105ea0e5e8b80ec6aad4ec',
      },
    ],
  },
];
